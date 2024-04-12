variable "is_localstack" {
  type = bool
  default = true
}
variable "aws_region" {
  type = string
}
variable "project" {
  type = string
}
variable "LAMBDA_MOUNT_CWD" {
  type = string
}