---
episode: 143
title: "Is App Runner better than Fargate?"
youtube_id: "Phc3ifgB1c8"
spotify_link: "https://creators.spotify.com/pod/show/aws-bites/episodes/143--Is-App-Runner-better-than-Fargate-e32hktc"
publish_date: 2025-05-09
---

Picture this. You’ve got a web app built with Rust and Solid.js. It started life
running on a dusty on-prem server, but now it's time to move it to the cloud.
The clock is ticking. You could take the well-worn AWS path: set up a VPC,
configure subnets, attach an ALB, define IAM roles, and deploy with Fargate. Or
you could try something different. In this episode of AWS Bites, we share the
real story of migrating a monolithic containerized app to AWS App Runner. It
promises to take your code, build it, deploy it, and scale it with minimal
effort. But does it really deliver? We compare App Runner with Fargate based on
hands-on experience. You’ll learn where App Runner shines, where it gets in the
way, and how we handled everything from custom domains to background job
processing. You’ll also hear when we would still choose Fargate, and why. If
you've ever hoped for a Heroku-like experience on AWS, or you want to simplify
your container deployments without giving up too much control, this episode is
for you.

> AWS Bites is brought to you in association with fourTheorem. At fourTheorem,
> we believe serverless should be simple, scalable, and cost-effective — and we
> help teams do just that. Whether you’re diving into containers, stepping into
> event-driven architecture, or scaling a global SaaS platform on AWS, our team
> has your back. Visit [fourtheorem.com](https://fourtheorem.com) to see how we
> can help you build faster, better, and with more confidence using AWS cloud!

In this episode, we mentioned the following resources:

- [Last Week in AWS: The 17 Ways to Run Containers on AWS](https://www.lastweekinaws.com/blog/the-17-ways-to-run-containers-on-aws/)
- [GitHub Issue – App Runner scale to zero discussion](https://github.com/aws/apprunner-roadmap/issues/9)
- [Custom Domain with CloudFormation (Mark van Holsteijn, Xebia)](https://xebia.com/blog/configure-custom-domain-for-aws-apprunner-service-using-cloudformation/)
- [AWS Docs – App Runner hosted zone IDs](https://docs.aws.amazon.com/general/latest/gr/apprunner.html)
