---
episode: 53
title: "Authentication for a CLI app with Cognito - Live coding PART 6"
youtube_id: "b-FoqIcOcPw"
spotify_link: "https://podcasters.spotify.com/pod/show/aws-bites/episodes/53--Authentication-for-a-CLI-app-with-Cognito---Live-coding-PART-6-e1oinoj"
publish_date: 2022-09-28
---

This is our sixth (and last!) live coding stream.

In this episode, we completed the authentication layer for our file transfer application. Specifically, we completed the OAuth 2 device flow on top of AWS Cognito and updated the weshare CLI application to support this new authentication flow. We also added an authorization layer in front of our file upload API.

All our code is available in this repository: [github.com/awsbites/weshare.click](https://github.com/awsbites/weshare.click).


Some of the resources we mentioned:

  - [GitHub PR](https://github.com/awsbites/weshare.click/pull/2) with the final OAuth 2.0 device flow step
  - [`jwtinfo` CLI tool](https://github.com/lmammino/jwtinfo)
  - [`enquirer`](https://npm.im/enquirer) package
  - [`undici`](https://npm.im/undici) HTTP client package
  - [`open`](https://npm.im/open) package to open the browser at a specific URL
  - [`ora`](https://npm.im/ora) package for animated spinners
  - [`conf`](https://npm.im/conf) package for persisting user settings
