data "aws_route53_zone" "dns_zone" {
  name = var.domain
}

resource "aws_acm_certificate" "acm_certificate" {
  domain_name       = var.domain
  validation_method = "DNS"
}

resource "aws_route53_record" "certificate_records" {
  for_each = {
    for dvo in aws_acm_certificate.acm_certificate.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.dns_zone.zone_id
}

resource "aws_acm_certificate_validation" "certificate_validation" {
  certificate_arn         = aws_acm_certificate.acm_certificate.arn
  validation_record_fqdns = [for record in aws_route53_record.certificate_records : record.fqdn]
}

resource "aws_api_gateway_domain_name" "domain_name" {
  domain_name = var.domain

  regional_certificate_arn = aws_acm_certificate_validation.certificate_validation.certificate_arn

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}

resource "aws_route53_record" "domain" {
  name    = aws_api_gateway_domain_name.domain_name.domain_name
  type    = "A"
  zone_id = data.aws_route53_zone.dns_zone.id

  alias {
    evaluate_target_health = true
    name                   = aws_api_gateway_domain_name.domain_name.regional_domain_name
    zone_id                = aws_api_gateway_domain_name.domain_name.regional_zone_id
  }
}

resource "aws_api_gateway_base_path_mapping" "gateway_mapping" {
  api_id      = var.api_gateway_rest_api_id
  domain_name = aws_api_gateway_domain_name.domain_name.domain_name
  stage_name  = var.api_gateway_stage_name
}