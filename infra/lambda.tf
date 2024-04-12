resource "aws_lambda_function" "hono_handler" {
  s3_bucket     = local.lamdbda_s3_bucket
  s3_key        = local.lambda_s3_key
  function_name = "${var.project}-hono-handler-${terraform.workspace}"
  role          = aws_iam_role.lambda_execution_role.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  timeout       = 30

  environment {
    variables = {
      
    }
  }
}

resource "aws_lambda_function_url" "hono_endpoint" {
  function_name      = aws_lambda_function.hono_handler.function_name
  authorization_type = "NONE"
}

data "aws_iam_policy_document" "lambda_assume_role_policy_document" {
  statement {
    actions = [ "sts:AssumeRole" ]
    principals {
      type = "Service"
      identifiers = [ "lambda.amazonaws.com" ]
    }
  }
}

resource "aws_iam_role" "lambda_execution_role" {
  name = "${var.project}-lambda-execution-role-${terraform.workspace}"
  assume_role_policy = data.aws_iam_policy_document.lambda_assume_role_policy_document.json
}