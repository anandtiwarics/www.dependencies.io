---
date: 2017-07-24T14:49:58.517120
draft: false
title: "Collector: dockerfile"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-collector-3DA4E9.svg)](https://www.dependencies.io/docs/collectors/)
[![Docker](https://img.shields.io/badge/dockerhub-collector--dockerfile-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-dockerfile/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-dockerfile.svg)](https://github.com/dependencies-io/collector-dockerfile/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-dockerfile.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-dockerfile)
[![license](https://img.shields.io/github/license/dependencies-io/collector-dockerfile.svg)](https://github.com/dependencies-io/collector-dockerfile/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/)
finds base images of a Dockerfile. The images must be public on Docker Hub.

## Usage

### dependencies.yml

```yaml
collectors:
- type: dockerfile
  path: Dockerfile
  actors:
  - ...
```

### Works well with

- [find-replace actor](https://www.dependencies.io/docs/actors/find-replace/) ([GitHub repo](https://github.com/dependencies-io/actor-find-replace/))
- [repo-issue actor](https://www.dependencies.io/docs/actors/repo-issue/) ([GitHub repo](https://github.com/dependencies-io/actor-repo-issue/))


## Resources

- https://registry.hub.docker.com/v1/repositories/library/ubuntu/tags

## Support

Any questions or issues with this specific collector should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-dockerfile/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
