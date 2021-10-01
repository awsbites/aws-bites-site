# AWS Bites site

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
