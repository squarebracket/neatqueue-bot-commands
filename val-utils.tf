terraform {
  backend "s3" {
    bucket = "tf-abc123"
    region = "us-east-2"
    key = "neatqueue-cmds.tfstate"
  }

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.98.0"
    }
  }
}

variable "commands" {
  type = set(string)
  default = [
    "pcrank_v1",
    "pcrecord_v1",
    "pcteams_v1"
  ]
}

resource "aws_apigatewayv2_api" "neatqueue_utils" {
  name        = "neatqueue_utils"
  protocol_type = "HTTP"
}

resource "aws_apigatewayv2_stage" "neatqueue_utils_prod" {
  api_id = aws_apigatewayv2_api.neatqueue_utils.id

  name        = "prod"
  auto_deploy = true
}

module "commands" {
  source  = "./lambda"

  for_each = var.commands
  name_ver = each.value
  api_gateway = aws_apigatewayv2_api.neatqueue_utils
}

output "urls" {
  value = {
    for k, v in module.commands : k => "${aws_apigatewayv2_stage.neatqueue_utils_prod.invoke_url}${v.url}"
  }
}
