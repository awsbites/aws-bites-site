---
episode: 113
title: "How do you revoke leaked credentials?"
youtube_id: "CHBiENy56sY"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/113--How-do-you-revoke-leaked-credentials-e2f4ls1"
publish_date: 2024-02-09
---

In this episode, we discuss what to do if you accidentally leak your AWS credentials during a live stream. We explain the difference between temporary credentials and long-lived credentials, and how to revoke each type. For temporary credentials, we recommend using the AWS console to revoke sessions or creating an IAM policy to deny access. For long-lived credentials, you must deactivate and rotate the credentials. We also touch on using tools like HashiCorp Vault to manage credentials securely.

> AWS Bites is brought to you by fourTheorem, the AWS consulting partner that doesn’t suck. Check us out at [fourtheorem.com](https://fourtheorem.com)!


In this episode, we mentioned the following resources.

- [Gist with example policy](https://gist.github.com/lmammino/02fef8ce0cc22a45f219fe4f47fcf20c)
- [Revoking IAM role temporary security credentials](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_revoke-sessions.html) (official AWS docs)
