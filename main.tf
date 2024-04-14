terraform {
  required_version = ">= 1.5.0"

  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~> 5.3"
    }
  }

  backend "local" {
    path = "./terraform/terraform.tfstate"
  }
}

provider "aws" {
  region = var.aws_region
}

data "aws_caller_identity" "current" {}

locals {
  is_localstack = data.aws_caller_identity.current.account_id == "000000000000"
}

module "infra" {
  source = "./infra"
  LAMBDA_MOUNT_CWD = path.cwd
  project = var.project
  aws_region = var.aws_region
  is_localstack = local.is_localstack
  domain = var.domain
}

output "is_localstack" {
  value = local.is_localstack
}

output "infra" {
  value = module.infra
}