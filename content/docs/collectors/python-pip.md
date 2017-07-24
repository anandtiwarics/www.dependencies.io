---
date: 2017-07-24T14:50:32.371681
draft: false
title: "Collector: python-pip"
---

[![Docker](https://img.shields.io/badge/dockerhub-collector--python--pip-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-python-pip/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-python-pip.svg)](https://github.com/dependencies-io/collector-python-pip/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-python-pip.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-python-pip)
[![license](https://img.shields.io/github/license/dependencies-io/collector-python-pip.svg)](https://github.com/dependencies-io/collector-python-pip/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/) that finds
dependencies in python requirements files.

## Usage

Does a `pip install -r` of your specified file and then figures out which
versions of each dependency got installed. It **does not** report back
all of the dependencies that your dependencies required, only the ones that
you specified in your requirements file.

### dependencies.yml

```yaml
collectors:
- type: python-pip
  path: path/to/your/requirements.txt
  actors:
  - ...
```

### Works well with

- [python-pip actor](https://www.dependencies.io/docs/actors/python-pip/) ([GitHub repo](https://github.com/dependencies-io/actor-python-pip/))

## Resources

- https://www.kennethreitz.org/essays/a-better-pip-workflow
- https://devcenter.heroku.com/articles/python-pip

## Support

Any questions or issues with this specific collector should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-python-pip/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
