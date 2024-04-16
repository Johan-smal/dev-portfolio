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
  key    = var.is_localstack ? "dist.zip" : "dist-${data.archive_file.source.output_base64sha256}.zip"
  source = "${data.archive_file.source.output_path}" # its mean it depended on zip
}

resource "aws_s3_bucket" "public" {
  bucket = "${var.project}-public"
}

resource "aws_s3_bucket_ownership_controls" "s3_bucket_acl_ownership" {
  count = var.apply_cloud
  bucket = aws_s3_bucket.public.id
  rule {
    object_ownership = "ObjectWriter"
  }
}

resource "aws_s3_bucket_policy" "public_policy" {
  bucket = aws_s3_bucket.public.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource = [
          "${aws_s3_bucket.public.arn}",
          "${aws_s3_bucket.public.arn}/*",
        ]
      },
    ]
  })
}

locals {
  content_type_map = {
   "js" = "text/javascript"
   "html" = "text/html"
   "css"  = "text/css"
  }
}

resource "aws_s3_object" "object_assets" {
  depends_on = [aws_s3_bucket.public]
  for_each   = fileset("${path.root}/dist_public/", "*")
  bucket     = aws_s3_bucket.public.bucket
  key        = each.value
  source     = "dist_public/${each.value}"
  etag       = filemd5("dist_public/${each.value}")
  content_type = lookup(local.content_type_map, reverse(split(".", each.value))[0], "binary/octet-stream")
}