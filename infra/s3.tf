resource "aws_s3_bucket" "lambda_bucket" {
  bucket = "${var.project}-archive"
}

data "archive_file" "source" {
  type        = "zip"
  source_dir  = "${var.LAMBDA_MOUNT_CWD}/dist"
  output_path = "${var.LAMBDA_MOUNT_CWD}/dist.zip"
}

resource "aws_s3_object" "lambda_dist" {
  bucket = "${aws_s3_bucket.lambda_bucket.id}"
  key    = "dist.zip"
  source = "${data.archive_file.source.output_path}" # its mean it depended on zip
}