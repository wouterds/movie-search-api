# movie-search-cdn-caching-example

[![code-review](https://github.com/wouterds/movie-search-cdn-caching-example/workflows/code-review/badge.svg)](https://github.com/wouterds/movie-search-cdn-caching-example/actions/workflows/code-review.yml)
[![release](https://github.com/wouterds/movie-search-cdn-caching-example/workflows/release/badge.svg)](https://github.com/wouterds/movie-search-cdn-caching-example/actions/workflows/release.yml)
![docker image version](https://ghcr-badge.deta.dev/wouterds/movie-search-cdn-caching-example/latest_tag?label=latest)
![docker image size](https://ghcr-badge.deta.dev/wouterds/movie-search-cdn-caching-example/size)

This is a simple example project to demonstrate how you can leverage Cloudflare's CDN to cache your API responses, reduce load on your application and upstream services.

\- built using Docker, Node.js, TypeScript, Express and a few other libraries

## Setup

### Dependencies

```bash
# install node
nvm install

# dependencies
yarn
```

### Environment

```bash
# copy example env
cp .env.example .env
```

Adjust the environment variables to your needs.

## Linting

```bash
# lint
yarn lint

# lint & try to fix what's possible
yarn lint:fix
```

## Development

```bash
# dev server
yarn dev

# compile source
yarn build
```

## Deployment

An arm64v8 Docker image is built on tag & deployed automatically on a Raspberry Pi.

```bash
# bugfixes
yarn patch

# new (small) features
yarn minor

# new (big) release
yarn major
```
