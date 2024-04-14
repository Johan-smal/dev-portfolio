variable "is_localstack" {
  type = bool
  default = true
}
variable "apply_cloud" {
  type = number
}
variable "aws_region" {
  type = string
}
variable "domain" {
  type = string
}
variable "project" {
  type = string
}
variable "LAMBDA_MOUNT_CWD" {
  type = string
}