output "infra" {
  value = {
    lambda_invoke_url = aws_lambda_function_url.hono_endpoint.function_url
    api_endpoint = local.apigate_endpoint
    public_dist_endpoint = local.public_dist_endpoint
  }
}