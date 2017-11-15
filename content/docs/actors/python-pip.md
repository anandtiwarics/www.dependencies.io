---
date: 2017-11-15T15:55:44.236223
draft: false
title: "Actor: python-pip"
---

[![Docker](https://img.shields.io/badge/dockerhub-actor--python--pip-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-python-pip/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-python-pip.svg)](https://github.com/dependencies-io/actor-python-pip/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-python-pip.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-python-pip)
[![license](https://img.shields.io/github/license/dependencies-io/actor-python-pip.svg)](https://github.com/dependencies-io/actor-python-pip/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/) that updates python pip
dependencies in using git branches and pull requests.

## Usage

For the dependency.path, does a basic replacement of `{name}=={installed}` to
`{name}=={new_version}`. **You must (and should anyway) be pinning the exact
version of your dependencies for this to work.** If given a `pip_freeze_target`,
then also does a fresh `pip install -r` and `pip freeze` to a specified path to
save all dependency versions.

For each dependency, it will get the **highest** version and create a single
branch/PR that updates all the way to that version (skipping/including any
versions in between).

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: python-pip
    versions: "L.Y.Y"
    settings:  # all settings are optional
      pip_freeze_target: path/to/frozen/requirements.txt  # path to `pip freeze > path`

      # Settings to configure the PR itself can be found
      # on the dependencies-io/pullrequest repo
      # https://github.com/dependencies-io/pullrequest/tree/0.6.0#dependenciesyml
```

### Works well with

- [python-pip collector](https://www.dependencies.io/docs/collectors/python-pip/) ([GitHub repo](https://github.com/dependencies-io/collector-python-pip/))


## Resources

- https://www.kennethreitz.org/essays/a-better-pip-workflow
- https://devcenter.heroku.com/articles/python-pip
- https://docs.gitlab.com/ce/api/merge_requests.html#create-mr

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-python-pip/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
