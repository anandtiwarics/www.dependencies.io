---
date: 2017-07-24T14:49:58.517120
draft: false
title: "Actor: repo-issue"
---

[![dependencies.io](https://img.shields.io/badge/dependencies.io-actor-3DA4E9.svg)](https://www.dependencies.io/docs/actors/)
[![Docker](https://img.shields.io/badge/dockerhub-actor--repo--issue-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-repo-issue/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-repo-issue.svg)](https://github.com/dependencies-io/actor-repo-issue/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-repo-issue.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-repo-issue)
[![license](https://img.shields.io/github/license/dependencies-io/actor-repo-issue.svg)](https://github.com/dependencies-io/actor-repo-issue/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/) creates GitHub issues to notify
you of new versions.

## Usage

For each dependency, it will create 1 issue and list out all of the new versions
that are available for it and any additional information about them.

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: repo-issue
    versions: "L.Y.Y"
    settings:  # all settings are optional
      # github options
      github_labels:  # list of label names
      - bug
      github_assignees:  # list of usernames
      - davegaeddert
      github_milestone: 3  # milestone number

      # gitlab options
      # Set an issue to be confidential. Default is false.
      gitlab_confidential: true  
      # The ID of a user to assign issue
      gitlab_assignee_ids:
      - 1
      # The ID of a milestone to assign issue
      gitlab_milestone_id: 0
      # Label names for an issue
      gitlab_labels:
      - discussion
      # Date time string, ISO 8601 formatted, e.g. 2016-03-11T03:45:40Z (requires admin or project owner rights)
      gitlab_created_at: '2016-03-11T03:45:40Z'
      # Date time string in the format YEAR-MONTH-DAY, e.g. 2016-03-11
      gitlab_due_date: '2016-03-11'
      # The IID of a merge request in which to resolve all issues. This will fill the issue with a default description and mark all discussions as resolved. When passing a description or title, these values will take precedence over the default values.
      gitlab_merge_request_to_resolve_discussions_of: 0  
      # The ID of a discussion to resolve. This will fill in the issue with a default description and mark the discussion as resolved. Use in combination with merge_request_to_resolve_discussions_of.
      gitlab_discussion_to_resolve: 0
      # The weight of the issue in range 0 to 9
      gitlab_weight: 3
```

### Works well with

- [python-pip collector](https://www.dependencies.io/docs/collectors/python-pip/) ([GitHub repo](https://github.com/dependencies-io/collector-python-pip/))
- [js-npm collector](https://www.dependencies.io/docs/collectors/js-npm/) ([GitHub repo](https://github.com/dependencies-io/collector-js-npm/))
- [git-repo collector](https://www.dependencies.io/docs/collectors/git-repo/) ([GitHub repo](https://github.com/dependencies-io/collector-git-repo/))


## Resources

- https://developer.github.com/v3/issues/#create-an-issue
- https://docs.gitlab.com/ee/api/issues.html#new-issue

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-repo-issue/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
