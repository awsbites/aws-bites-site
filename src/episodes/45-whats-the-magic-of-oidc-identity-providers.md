---
episode: 45
title: What’s the magic of OIDC identity providers?
youtube_id: dXQkZresTpw
anchor_fm_link: https://anchor.fm/aws-bites/episodes/45--Whats-the-magic-of-OIDC-identity-providers-e1l5r6p
publish_date: 2022-07-15
---

If you are thinking of using an external CICD tool to deploy to AWS you are probably wondering how to securely connect your pipelines to your AWS account.
You could create a user for your CICD tool of choice and copy some hard coded credentials into it, but, let’s face it: this doesn’t feel like the right - or at least the most secure - approach!
In the previous episode we discussed how AWS and GitHub solved this problem by using OIDC identity providers and this seems to be a good solution to the problem.
In this episode of AWS Bites we will try to demystify the secrets of OIDC identity providers and explain how they work and what’s the trust model between AWS and an OIDC provider like GitHub actions. We will also explain all the steps required to integrate AWS with GitHub, how JWT works in this particular scenario and other use cases where you could use OIDC providers.

In this episode, we mentioned the following resources:
- [GitHub docs explaining how to integrate with AWS as an OIDC provider](https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect)
- [Article “What’s in a JWT”](https://loige.co/whats-in-a-jwt)
- [`jwtinfo`, CLI tool to inspect JWT](https://github.com/lmammino/jwtinfo)
- [AWS action to assume a role from a GitHub Pipeline](https://github.com/aws-actions/configure-aws-credentials#assuming-a-role)
- [Great post by Elias Brange detailing how to setup GitHub OIDC integration for AWS](https://www.eliasbrange.dev/posts/secure-aws-deploys-from-github-actions-with-oidc/)
- [Previous episode on why you should consider GitHub Actions rather than AWS CodePipeline](https://awsbites.com/44-do-you-use-codepipeline-or-github-actions/)
