---
episode: 121
title: "5 Ways to extend CloudFormation"
youtube_id: "xx6xOx9xQRM"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/121--5-Ways-to-extend-CloudFormation-e2igs3c"
publish_date: 2024-04-19
---

In this episode, we discuss 5 different ways to extend CloudFormation capabilities beyond what it natively supports. We started with a quick recap of what CloudFormation is and why we might need to extend it. We then covered using custom scripts and templating engines, which can be effective but require extra maintenance. We recommended relying instead on tools like Serverless Framework, SAM, and CDK which generate CloudFormation templates but provide abstractions and syntax improvements. When you need custom resources, CloudFormation macros allow pre-processing templates, while custom resources and the CloudFormation registry allow defining new resource types. We summarized recommendations for when to use each approach based on our experience. Overall, we covered multiple options for extending CloudFormation to support more complex infrastructure needs.


> AWS Bites is brought to you by fourTheorem, an AWS Partner that specialises in modern application architecture and migration. If you are curious to find out more and to work with us, check us out on [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources.

- Ep. 31 ["Cloudformation or Terraform"](https://awsbites.com/31-cloudformation-or-terraform/)
- [Serverless Framework](https://www.serverless.com/)
- [SAM (Serverless Application Model)](https://aws.amazon.com/serverless/sam/)
- [CDK (Cloud Development Kit)](https://aws.amazon.com/cdk/)
- Ep. 119 ["The state of AWS 2024 (AnsWeRS community survey commentary)"](https://awsbites.com/)119-the-state-of-aws-2024-answers-community-survey-commentary/
- Ep. 93 ["CDK Patterns - The Good, The Bad and The Ugly"](https://awsbites.com/93-cdk-patterns-the-good-the-bad-and-the-ugly/)
- [SLIC Watch](https://github.com/fourTheorem/slic-watch)
- [AWS SSO Utils by Ben Kehoe](https://github.com/benkehoe/aws-sso-util)
- [JavaScript library to safely create custom CloudFormaion resources](https://www.npmjs.com/package/safe-cfn-custom-resource)
- [Clouformation CLI](https://github.com/aws-cloudformation/cloudformation-cli)
- [Cloudformation CLI docs](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/what-is-cloudformation-cli.html)
- Cloudonaut podcast ["3½ ways to workaround missing CloudFormation support"](https://cloudonaut.io/three-and-a-half-ways-to-workaround-missing-cloudformation-support/)
