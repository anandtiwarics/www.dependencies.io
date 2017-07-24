---
date: 2017-07-24T14:49:58.517120
draft: false
title: "Collector: git-repo"
---

[![Docker](https://img.shields.io/badge/dockerhub-collector--git--repo-22B8EB.svg)](https://hub.docker.com/r/dependencies/collector-git-repo/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/collector-git-repo.svg)](https://github.com/dependencies-io/collector-git-repo/releases)
[![Build Status](https://travis-ci.org/dependencies-io/collector-git-repo.svg?branch=master)](https://travis-ci.org/dependencies-io/collector-git-repo)
[![license](https://img.shields.io/github/license/dependencies-io/collector-git-repo.svg)](https://github.com/dependencies-io/collector-git-repo/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[collector](https://www.dependencies.io/docs/collectors/) for detecting versions of
a git repo by using git tags.

Runs and parses `git ls-remote --tags https://github.com/kubernetes/minikube.git`.

## Usage

Use a YAML file to list the git repos you depend on, and the version of them
that you are using currently.

```yaml
repos:
- url: https://github.com/kubernetes/minikube.git
  installed: v0.19.0
```

### dependencies.yml

```yaml
collectors:
- type: git-repo
  path: path/to/your/git_repo_dependencies.yml  # name does not matter
  actors:
  - ...
```

### Works well with

- [repo-issue actor](https://www.dependencies.io/docs/actors/repo-issue/) ([GitHub repo](https://github.com/dependencies-io/actor-repo-issue/))

## Resources

- https://git-scm.com/docs/git-ls-remote.html
- https://stackoverflow.com/questions/15472107/when-listing-git-ls-remote-why-theres-after-the-tag-name/15472310

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/collector-git-repo/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
