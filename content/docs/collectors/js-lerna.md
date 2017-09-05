---
date: 2017-09-05T13:57:05.673737
draft: false
title: "Collector: js-lerna"
---

[![Docker](https://img.shields.io/badge/dockerhub-collector--js--lerna-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-js-lerna/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-js-lerna.svg)](https://github.com/dependencies-io/collector-js-lerna/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-js-lerna.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-js-lerna)
[![license](https://img.shields.io/github/license/dependencies-io/collector-js-lerna.svg)](https://github.com/dependencies-io/collector-js-lerna/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/) for collecting JS monorepo dependencies that use [Lerna](https://lernajs.io/).

## Usage

The path should be the directory that contains your `lerna.json`.


### dependencies.yml

```yaml
collectors:
- type: js-lerna
  path: /  # directory where lerna.json is located, root of your repo most likely
  settings:
    # please use --concurrency=1 if you provide your own command
    bootstrap_command: lerna bootstrap --concurrency 1  # this is what is used by default
  actors:
  - ...
```

### Works well with

- [js-lerna actor](https://www.dependencies.io/docs/actors/js-lerna/) ([GitHub repo](https://github.com/dependencies-io/actor-js-lerna/))
- [repo-issue actor](https://www.dependencies.io/docs/actors/repo-issue/) ([GitHub repo](https://github.com/dependencies-io/actor-repo-issue/))

## Resources

- https://github.com/lerna/lerna

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-js-lerna/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
