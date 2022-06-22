---
episode: 44
title: Do you use CodePipeline or GitHub Actions?
youtube_id: zJ_YFqonxNE
anchor_fm_link: https://anchor.fm/aws-bites/episodes/44--Do-you-use-CodePipeline-or-GitHub-Actions-e1ktqb4
publish_date: 2022-07-08
---

Automated, Continuous Build and Continuous Delivery are must-haves when building modern applications on AWS. To achieve this, you have numerous options, including third party providers like GitHub Actions and Circle CI, and the AWS services, CodePipeline and CodeBuild. In this episode we focus on GitHub Actions and we compare it with the native AWS features offered by services like CodePipeline and Code Build. In particular we discuss what CodePipeline offers and how to set it up, what the tradeoffs are and when to choose one over the other. We also discuss when you should look outside AWS to a third-party provider and highlight when GitHub Actions can be a great fit for your AWS CI/CD needs!

In this episode, we mentioned the following resources:
- [Example pipeline for a serverless mono repo using CDK is available in SLIC Starter](https://github.com/fourTheorem/slic-starter/tree/main/packages/cicd)
- [50+ official actions provided by GitHub themselves](https://github.com/actions)
- [How to configure OIDC integrations with AWS and other services like GitHub](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/configuring-openid-connect-in-amazon-web-services)
- [GitHub Actions billing details](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions)
- [Workshop illustrating how to create CodeBuild and CodePipeline resources using CDK](https://cdkworkshop.com/20-typescript/70-advanced-topics/200-pipelines/3000-new-pipeline.html )
- [Paul Swail’s article “Why I switched from AWS CodePipeline to GitHub Actions”](https://serverlessfirst.com/switch-codepipeline-to-github-actions/)
- [A tutorial article by AWS showing how to authenticate and use GitHub actions to build & deploy a web app to an EC2 instance](https://aws.amazon.com/blogs/devops/integrating-with-github-actions-ci-cd-pipeline-to-deploy-a-web-app-to-amazon-ec2/)
- [Other examples of when it is OK to ditch AWS services for third party (previous podcast episode)](https://awsbites.com/43-when-is-it-ok-to-cheat-on-aws/ )
