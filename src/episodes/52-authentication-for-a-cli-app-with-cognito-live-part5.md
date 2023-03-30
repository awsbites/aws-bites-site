---
episode: 52
title: "Authentication for a CLI app with Cognito - Live coding PART 5"
youtube_id: "0TzfkbisMEA"
anchor_fm_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/52--Authentication-for-a-CLI-app-with-Cognito---Live-coding-PART-5-e1o8ice"
publish_date: 2022-09-21
---

How can you build a WeTransfer or a Dropbox Transfer clone on AWS?

This is our fifth live coding stream. In this episode, we continued adding some security to our application. Specifically, we implemented 75% of the OAuth 2 device flow on top of AWS Cognito to allow our file upload CLI application to get some credentials.
In order to implement this flow, we need to store some secrets. We decided to use DynamoDB and spent a lot of time discussing our data design and how and why we used the famous and controversial DynamoDB single table design principle.

All our code is available in this repository: [github.com/awsbites/weshare.click](https://github.com/awsbites/weshare.click).


Some of the resources we mentioned:

- [OAuth 2 Device Auth flow RFC8628](https://www.rfc-editor.org/rfc/rfc8628)
- [The DynamoDB book](https://www.dynamodbbook.com/) by Alex DeBrie
- [LevelDB](https://github.com/google/leveldb)
- [OAuth 2 Authorization framework RFC6749](https://www.rfc-editor.org/rfc/rfc6749)
