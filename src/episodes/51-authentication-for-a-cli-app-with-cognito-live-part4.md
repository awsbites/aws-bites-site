---
episode: 51
title: "Authentication for a CLI app with Cognito - Live coding PART 4"
youtube_id: "vVic3oqqqfY"
anchor_fm_link: "https://anchor.fm/aws-bites/episodes/51--Authentication-for-a-CLI-app-with-Cognito---Live-coding-PART-4-e1nvr0m"
publish_date: 2022-09-16
---

How can you build a WeTransfer or a Dropbox Transfer clone on AWS?

This is our fourth live coding stream. In this episode, we started looking into adding some security to our application. Specifically, we started implementing a device auth flow on top of AWS Cognito to allow our file upload CLI application to get some credentials.

All our code is available in this repository: [github.com/awsbites/weshare.click](https://github.com/awsbites/weshare.click).


Some of the resources we mentioned:

- [Content-Disposition Header on MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition)
- [OAuth 2 Device Auth flow RFC8628](https://www.rfc-editor.org/rfc/rfc8628)
- [XKCD Comic about password security](https://xkcd.com/936/)
- [crypto-random-string package](https://www.npmjs.com/package/crypto-random-string)
- [Dash offline documentation app](https://kapeli.com/dash)
