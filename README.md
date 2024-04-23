# Developer Portfolio Template

Starting boilerplate for developer that want to create a nice looking portfolio website, but does not want to be force to use some over-the-top frontend framework and would like to deploy to AWS.

### Built With

#### Backend
[![aws-logo]][aws-url]
[![terraform-logo]][terraform-url]
[![hono-logo]][hono-url]

#### Frontend
[![htmx-logo]][htmx-url]
[![tailwindcss-logo]][tailwindcss-url]
[![daisyui-logo]][daisyui-url]

#### Tools
[![localstack-logo]][localstack-url]
[![esbuild-logo]][esbuild-url]

## Setup Locally

This project uses [Localstack][localstack-url] with [this](https://docs.localstack.cloud/user-guide/integrations/terraform/) Terraform wrapper to deploy to local AWS Services

### Requirements
- aws-cli
- docker & docker-compose
- [tflocal](https://docs.localstack.cloud/user-guide/integrations/terraform/)
- pnpm

```
// Localstack setup

cp terraform.tfvars.example terraform.tfvars

docker compose up -d localstack

tflocal plan

tflocal apply -auto-approve

// PNPM
pnpm i
pnpm dev
```

Then go the `api_endpoint` output from running `tflocal output`

### Deployment

Update the `terraform.tfvars` to match the route53 domain you have access to and the deploy to AWS with `terraform apply`


[aws-logo]: https://img.shields.io/badge/aws-orange?style=for-the-badge&logo=amazonaws&logoColor=white
[aws-url]: https://aws.amazon.com/

[localstack-logo]: https://img.shields.io/badge/localstack-blue?style=for-the-badge
[localstack-url]: https://www.localstack.cloud/

[terraform-logo]: https://img.shields.io/badge/terraform-purple?style=for-the-badge&logo=terraform&logoColor=white
[terraform-url]: https://www.terraform.io/

[hono-logo]: https://img.shields.io/badge/hono-000000?style=for-the-badge&logo=hono&logoColor=white
[hono-url]: https://hono.dev/

[htmx-logo]: https://img.shields.io/badge/htmx-000000?style=for-the-badge&logo=htmx&logoColor=white
[htmx-url]: https://htmx.org/

[tailwindcss-logo]: https://img.shields.io/badge/tailwindcss-0ea5e9?style=for-the-badge&logo=tailwindcss&logoColor=white
[tailwindcss-url]: https://tailwindcss.com/

[daisyui-logo]: https://img.shields.io/badge/daisyui-green?style=for-the-badge&logo=daisyui&logoColor=white
[daisyui-url]: https://daisyui.com/

[esbuild-logo]: https://img.shields.io/badge/esbuild-FFCF00?style=for-the-badge&logo=esbuild&logoColor=white
[esbuild-url]: https://esbuild.com/

