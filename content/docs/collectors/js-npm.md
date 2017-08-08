---
date: 2017-08-08T13:39:43.618458
draft: false
title: "Collector: js-npm"
---

[![Docker](https://img.shields.io/badge/dockerhub-collector--js--npm-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-js-npm/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-js-npm.svg)](https://github.com/dependencies-io/collector-js-npm/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-js-npm.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-js-npm)
[![license](https://img.shields.io/github/license/dependencies-io/collector-js-npm.svg)](https://github.com/dependencies-io/collector-js-npm/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/) for collecting npm
dependencies using `npm` or `yarn`.

## Usage

Use the collector `path` to indicate which directory your npm files are located.
Works with either npm or yarn depending on whether there is a `yarn.lock` file.
Runs npm@5 so it also supports `package-lock.json`. `npm shrinkwrap` is not
currently supported.

If you don't use `package-lock.json` or `yarn.lock`, then it is recommended that you
`--save-exact` versions of your dependencies. Otherwise every time this runs,
it will simply install the new available versions in your range instead of
reporting them back as newer versions than what you have installed currently
(which could then be given to [actors](https://www.dependencies.io/docs/actors/)).

### dependencies.yml

```yaml
collectors:
- type: js-npm
  path: /  # directory where package.json / yarn.lock / package-lock.json are located
  settings:
    node_env: production  # if you only care about production dependencies
  actors:
  - ...
```

### Works well with

- [js-npm actor](https://www.dependencies.io/docs/actors/js-npm/) ([GitHub repo](https://github.com/dependencies-io/actor-js-npm/))
- [repo-issue actor](https://www.dependencies.io/docs/actors/repo-issue/) ([GitHub repo](https://github.com/dependencies-io/actor-repo-issue/))

## Resources

- https://devcenter.heroku.com/articles/node-best-practices

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-js-npm/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
