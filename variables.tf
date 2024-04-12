variable "aws_region" {
  type = string
  default = "eu-west-1"
}
variable "project" {
  type = string
  default = "dev-portfolio"
  description = "Unique identifier for the project"
}