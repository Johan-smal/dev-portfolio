variable "aws_region" {
  type = string
  default = "eu-west-1"
}
variable "project" {
  type = string
  description = "Unique identifier for the project"
}
variable "domain" {
  type = string
  description = "Main Domain use for project"
}