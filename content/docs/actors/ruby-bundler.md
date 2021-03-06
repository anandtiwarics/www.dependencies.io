---
date: 2017-11-15T15:55:44.236223
draft: false
title: "Actor: ruby-bundler"
---

[![Docker](https://img.shields.io/badge/dockerhub-actor--ruby--bundler-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-ruby-bundler/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-ruby-bundler.svg)](https://github.com/dependencies-io/actor-ruby-bundler/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-ruby-bundler.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-ruby-bundler)
[![license](https://img.shields.io/github/license/dependencies-io/actor-ruby-bundler.svg)](https://github.com/dependencies-io/actor-ruby-bundler/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/) that updates Gemfile
dependencies in using git branches and pull requests.

## Usage

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: ruby-bundler
    versions: "L.Y.Y"
    settings:  # all settings are optional
      # Settings to configure the PR itself can be found
      # on the dependencies-io/pullrequest repo
      # https://github.com/dependencies-io/pullrequest/tree/0.6.0#dependenciesyml
```

### Works well with

- [ruby-bundler collector](https://www.dependencies.io/docs/collectors/ruby-bundler/) ([GitHub repo](https://github.com/dependencies-io/collector-ruby-bundler/))


## Resources

- http://bundler.io/

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-ruby-bundler/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
