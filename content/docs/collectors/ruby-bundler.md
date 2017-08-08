---
date: 2017-08-08T13:41:42.145451
draft: false
title: "Collector: ruby-bundler"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-collector-3DA4E9.svg)](https://www.dependencies.io/docs/collectors/)
[![Docker](https://img.shields.io/badge/dockerhub-collector--ruby--bundler-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-ruby-bundler/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-ruby-bundler.svg)](https://github.com/dependencies-io/collector-ruby-bundler/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-ruby-bundler.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-ruby-bundler)
[![license](https://img.shields.io/github/license/dependencies-io/collector-ruby-bundler.svg)](https://github.com/dependencies-io/collector-ruby-bundler/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/)
that collects Ruby gems by using Bundler.

## Usage

Requires `Gemfile.lock` to be present.

### dependencies.yml

```yaml
collectors:
- type: ruby-bundler
  path: /
  actors:
  - ...
```

## Resources

- http://guides.rubygems.org/rubygems-org-api/#gem-version-methods

## Support

Any questions or issues with this specific collector should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-ruby-bundler/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
