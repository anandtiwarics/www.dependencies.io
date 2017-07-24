---
date: 2017-07-24T14:49:58.517120
draft: false
title: "Collector: php-wordpress-core"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-collector-3DA4E9.svg)](https://www.dependencies.io/docs/collectors/)
[![Docker](https://img.shields.io/badge/dockerhub-collector--php--wordpress--core-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-php-wordpress-core/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-php-wordpress-core.svg)](https://github.com/dependencies-io/collector-php-wordpress-core/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-php-wordpress-core.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-php-wordpress-core)
[![license](https://img.shields.io/github/license/dependencies-io/collector-php-wordpress-core.svg)](https://github.com/dependencies-io/collector-php-wordpress-core/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/)
that detects what version of WordPress is installed in a directory.

## Usage

This assumes you have all of the WordPress installation files in a directory
in your repo. The `path` should point to that directory.

### dependencies.yml

```yaml
collectors:
- type: php-wordpress-core
  path: /
  actors:
  - ...
```

### Works well with

- [php-wordpress-core actor](https://www.dependencies.io/docs/actors/php-wordpress-core/) ([GitHub repo](https://github.com/dependencies-io/actor-php-wordpress-core/))


## Resources

- https://wordpress.org/download/release-archive/

## Support

Any questions or issues with this specific collector should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-php-wordpress-core/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
