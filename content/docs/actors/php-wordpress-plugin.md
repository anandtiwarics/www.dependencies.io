---
date: 2017-08-10T13:44:01.523136
draft: false
title: "Actor: php-wordpress-plugin"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-actor-3DA4E9.svg)](https://www.dependencies.io/docs/actors/)
[![Docker](https://img.shields.io/badge/dockerhub-actor--php--wordpress--plugin-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-php-wordpress-plugin/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-php-wordpress-plugin.svg)](https://github.com/dependencies-io/actor-php-wordpress-plugin/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-php-wordpress-plugin.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-php-wordpress-plugin)
[![license](https://img.shields.io/github/license/dependencies-io/actor-php-wordpress-plugin.svg)](https://github.com/dependencies-io/actor-php-wordpress-plugin/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/)
that finds WordPress plugins installed in a directory.

## Usage

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: php-wordpress-plugin
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

- [php-wordpress-plugin collector](https://www.dependencies.io/docs/collectors/php-wordpress-plugin/) ([GitHub repo](https://github.com/dependencies-io/collector-php-wordpress-plugin/))


## Resources

- https://www.wordfence.com/learn/how-to-manually-upgrade-wordpress-themes-and-plugins/
- https://codex.wordpress.org/WordPress.org_API

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-php-wordpress-plugin/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
