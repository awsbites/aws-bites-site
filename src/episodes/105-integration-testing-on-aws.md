---
episode: 105
title: "Integration Testing on AWS"
youtube_id: "1bt01ks5D6c"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/105--Integration-Testing-on-AWS-e2c9r88"
publish_date: 2023-11-24
---

In this episode, we discuss integration testing event-driven systems and explore AWS's new Integration Application Test Kit (IATK). We cover the challenges of testing events and common approaches like logging, end-to-end testing, and using temporary queues. We then introduce IATK, walk through how to use it for EventBridge testing, and share our experience trying out the X-Ray trace validation. We found IATK promising but still rough around the edges, though overall a useful addition to help test complex event flows.


> AWS Bites is brought to you by fourTheorem, the ultimate AWS partner for modern applications on AWS. We can help you to be successful with AWS! Check us out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources:

- [`sls-test-tools`](https://github.com/aleios-cloud/sls-test-tools) on GitHub
- Sarah Hamilton’s article on [Integration testing and how to use `sls-test-tool`](https://medium.com/serverless-transformation/bridge-integrity-integration-testing-strategy-for-eventbridge-based-serverless-architectures-b73529397251)
- Our previous [episode on building a cross-account Event Bridge deployment](https://awsbites.com/39-how-do-you-build-a-cross-account-event-backbone-with-eventbridge/)
- Our [IATK tests for the cross-account Event Bridge project](https://github.com/fourTheorem/cross-account-eventbridge/blob/main/test/integration/test_events.py)
- [IATK tutorial](https://awslabs.github.io/aws-iatk/tutorial/)
- [IATK examples](https://awslabs.github.io/aws-iatk/tutorial/examples/retrieve_cfn_info/)
