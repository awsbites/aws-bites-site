---
episode: 42
title: How do you containerise and run your API with Fargate?
youtube_id: 5ZSnNsC8szE
spotify_link: https://anchor.fm/aws-bites/episodes/42--How-do-you-containerise-and-run-your-API-with-Fargate-e1k6m3j
publish_date: 2022-06-24
---

We recently talked about migrating a monolithic application to AWS, using EC2, load balancers, S3 and RDS. In this episode we want to talk about a slightly different setup, where we are going for containers instead of EC2 and we want to deploy them in Fargate. In this We are going to cover all the components you will need in your architecture, the reasons to choose Fargate over any alternatives and discuss some CDK tricks to get started in a quick way (and the pitfalls that might come with them).

In this episode, we mentioned the following resources:

- [CDK ECS Patterns](https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_ecs_patterns-readme.html)
- [How to fine tune the health checks to speed up the deployment process](https://www.qovery.com/blog/how-to-speed-up-amazon-ecs-container-deployments)
- [Previous Episode "37. How do you migrate a monolith to AWS without the drama?"](https://awsbites.com/37-how-do-you-migrate-a-monolith-to-aws-without-the-drama/)
