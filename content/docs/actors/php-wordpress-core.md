---
date: 2017-08-10T13:44:01.523136
draft: false
title: "Actor: php-wordpress-core"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-actor-3DA4E9.svg)](https://www.dependencies.io/docs/actors/)
[![Docker](https://img.shields.io/badge/dockerhub-actor--php--wordpress--core-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-php-wordpress-core/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-php-wordpress-core.svg)](https://github.com/dependencies-io/actor-php-wordpress-core/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-php-wordpress-core.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-php-wordpress-core)
[![license](https://img.shields.io/github/license/dependencies-io/actor-php-wordpress-core.svg)](https://github.com/dependencies-io/actor-php-wordpress-core/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/)
that manually updates the WordPress core files.

## Usage

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: php-wordpress-core
    versions: "L.Y.Y"
    settings:  # all settings are optional
      # github options
      github_labels:  # list of label names
      - bug
      github_assignees:  # list of usernames
      - davegaeddert
      github_milestone: 3  # milestone number
      github_base_branch: develop  # branch to make PR against (if something other than your default branch)

      # gitlab options
      gitlab_assignee_id: 1  # assignee user ID
      gitlab_labels:  # labels for MR as a list of strings
      - dependencies
      - update
      gitlab_milestone_id: 1  # the ID of a milestone
      gitlab_target_project_id: 1  # The target project (numeric id)
      gitlab_remove_source_branch: true  # flag indicating if a merge request should remove the source branch when merging
      gitlab_target_branch: develop  # branch to make PR against (if something other than your default branch)
```

### Works well with

- [php-wordpress-core collector](https://www.dependencies.io/docs/collectors/php-wordpress-core/) ([GitHub repo](https://github.com/dependencies-io/collector-php-wordpress-core/))


## Resources

- https://codex.wordpress.org/Updating_WordPress

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-php-wordpress-core/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
