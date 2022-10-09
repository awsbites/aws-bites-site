# AWS Bites site

[![Build](https://github.com/awsbites/aws-bites-site/actions/workflows/deploy.yml/badge.svg)](https://github.com/awsbites/aws-bites-site/actions/workflows/deploy.yml)
[![Netlify Status](https://api.netlify.com/api/v1/badges/8a203404-ec39-4d29-902f-83a51705af00/deploy-status)](https://app.netlify.com/sites/boring-bohr-998eda/deploys)


Static website source code for [awsbites.com](https://awsbites.com).

## Requirements

Needs a recent version of Node.js (recommended 14+).

Install all the needed dependencies with:

```bash
npm install
```

## Dev server

Run the dev server with:

```bash
npm start
```

This will give you a URL for a local live server


## Build

Simply run:

```bash
npm run build
```

The static assets will be made available in `dist/`.

This is an incremental build, so old files that might not be needed anymore will still be in `dist/`.

If you need to perform a clean build, you can run:

```bash
npm run clean && npm run build
```


## Deploy

Deployment happen automatically through GitHub Actions.

There are 3 different ways to trigger a deployment:

  - **On push**: Every time a new push to the `main` branch is made a deployment is started.
  - **On schedule**: A new build and deployment of the current `main` branch is done automatically **every Friday at 00:01**.
  - **On demand**: You can trigger the [`deploy` workflow](https://github.com/awsbites/aws-bites-site/actions/workflows/deploy.yml) manually.
