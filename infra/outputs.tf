output "infra" {
  value = {
    lambda_invoke_url = aws_lambda_function_url.hono_endpoint.function_url
    api_endpoint = aws_api_gateway_deployment.portfolio_deployment.invoke_url
  }
}