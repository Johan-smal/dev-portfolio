locals {
  lamdbda_s3_bucket = var.is_localstack ? "hot-reload" : aws_s3_bucket.lambda_bucket.bucket
  lambda_s3_key = var.is_localstack ? "${var.LAMBDA_MOUNT_CWD}/dist" : "${aws_s3_object.lambda_dist.key}"
  apigate_endpoint = var.is_localstack ? "http://${aws_api_gateway_rest_api.portfolio_api.id}.execute-api.localhost.localstack.cloud:4566/${terraform.workspace}" : "${aws_api_gateway_deployment.portfolio_deployment.invoke_url}${terraform.workspace}"
}