---
date: 2017-07-24T14:49:58.517120
draft: false
title: "Collector: php-wordpress-plugin"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-collector-3DA4E9.svg)](https://www.dependencies.io/docs/collectors/)
[![Docker](https://img.shields.io/badge/dockerhub-collector--php--wordpress--plugin-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-php-wordpress-plugin/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-php-wordpress-plugin.svg)](https://github.com/dependencies-io/collector-php-wordpress-plugin/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-php-wordpress-plugin.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-php-wordpress-plugin)
[![license](https://img.shields.io/github/license/dependencies-io/collector-php-wordpress-plugin.svg)](https://github.com/dependencies-io/collector-php-wordpress-plugin/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/)
that finds WordPress plugins installed in a directory.

## Usage

### dependencies.yml

```yaml
collectors:
- type: php-wordpress-plugin
  path: site/wp-content/plugins
  actors:
  - ...
```

### Works well with

- [php-wordpress-plugin actor](https://www.dependencies.io/docs/actors/php-wordpress-plugin/) ([GitHub repo](https://github.com/dependencies-io/actor-php-wordpress-plugin/))


## Resources

- https://codex.wordpress.org/WordPress.org_API

## Support

Any questions or issues with this specific collector should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-php-wordpress-plugin/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
