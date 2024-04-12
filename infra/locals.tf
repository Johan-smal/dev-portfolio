locals {
  lamdbda_s3_bucket = var.is_localstack ? "hot-reload" : aws_s3_bucket.lambda_bucket.bucket
  lambda_s3_key = var.is_localstack ? "${var.LAMBDA_MOUNT_CWD}/dist" : "${aws_s3_object.lambda_dist.key}"
}