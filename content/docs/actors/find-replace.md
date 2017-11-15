---
date: 2017-11-15T15:55:44.236223
draft: false
title: "Actor: find-replace"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-actor-3DA4E9.svg)](https://www.dependencies.io/docs/actors/)
[![Docker](https://img.shields.io/badge/dockerhub-actor--find--replace-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-find-replace/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-find-replace.svg)](https://github.com/dependencies-io/actor-find-replace/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-find-replace.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-find-replace)
[![license](https://img.shields.io/github/license/dependencies-io/actor-find-replace.svg)](https://github.com/dependencies-io/actor-find-replace/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/)
that does a basic text find and replace of versions in repo files, then creates
a pull request.

## Usage

If you want to replace text in specific files, then use the `paths` setting.
Additionally, if you're worried about replacing the wrong strings then you can
use `pattern` to further define the string that is found and replaced using
variables from the dependency.

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: find-replace
    settings:  # all settings are optional
      paths:  # files to do the replacement in (otherwise will use the file the dependency was collected from)
      - README.md
      # pattern that sed will find/replace
      # can use `name`, `version`, `version_clean`, `source`, and `path` of the dependency
      # defaults to {version} to only replace based on the version numbers
      patterns:
      - '{name}: {version}'

      # Settings to configure the PR itself can be found
      # on the dependencies-io/pullrequest repo
      # https://github.com/dependencies-io/pullrequest/tree/0.6.0#dependenciesyml
```

#### Pattern args

- `name` - `dependency.name` name of the dependency
- `version` - version string
- `version_clean` - `version` with leading "v" or "=" removed
- `source` - `dependency.source` (ex. "npm", "pypi", "git", etc.)
- `path` - `dependency.path` path that the collector gave for where this is installed at (ex. `app/package.json`)


### Works well with

- [git-repo collector](https://www.dependencies.io/docs/collectors/git-repo/) ([GitHub repo](https://github.com/dependencies-io/collector-git-repo/))
- [js-npm collector](https://www.dependencies.io/docs/collectors/js-npm/) ([GitHub repo](https://github.com/dependencies-io/collector-js-npm/))
- [python-pip collector](https://www.dependencies.io/docs/collectors/python-pip/) ([GitHub repo](https://github.com/dependencies-io/collector-python-pip/))


## Resources

- https://www.gnu.org/software/sed/manual/sed.html

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-find-replace/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
