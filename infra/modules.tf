module "custom_domain" {
  count = var.apply_cloud
  source = "./custom_domain"
  domain = var.domain
  api_gateway_rest_api_id = aws_api_gateway_rest_api.portfolio_api.id
  api_gateway_stage_name = aws_api_gateway_stage.stage.stage_name
}