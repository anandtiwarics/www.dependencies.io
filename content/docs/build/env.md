---
date: 2017-09-27T11:10:48-05:00
draft: false
title: Container environment
---

Collectors and actors are run with a few assumptions. You can read more about
them below, but sometimes the best place to start is by using `dependencies
create` or looking at our official collectors and actors which are [all
open-source](https://github.com/dependencies-io).

## Git repo

Each collector and actor has a copy of the user's repo mounted at `/repo` in the
container. It will be checked out at the branch/commit on which the build
originally ran. The `/repo` directory will be read-only or read-write, depending
on what the collector or actor needs.

## Environment variables

All the necessary data is given to the collector/actor in the form of
environment variables. Strings are given as strings, and anything else is given
as a JSON-encoded string. Most languages provide easy access to env variables
and also have a JSON library, so parsing these out shouldn't be too much work.

#### Collector environment variables

- `DEPENDENCIES_ENV=production` - in development this will be "test"
- `COLLECTOR_ID=144.0` - the first number is the build number, the second is the index of the collector in the user's config

#### Actor environment variables

- `DEPENDENCIES_ENV=production` - in development this will be "test"
- `ACTOR_ID=144.0.2` - the first number is the build number, the second is the index of the collector in the user's config, the third is the index of the actor in the collector that ran it
- `BUILD_NUMBER=144` - *deprecated*, use `ACTOR_ID` instead
- `GIT_SHA=125d650755f2dae16084732190f439e6b4d72c76` - sha for the git commit which the build is running on
- `GIT_BRANCH=master` - git branch that the build is running on
- `DEPENDENCIES='{"dependencies":[...]}'` - JSON-encoded string of [dependencies schema]({{< relref "schema.md" >}})
- `GIT_HOST=github` - "github" or "gitlab"
- `GITHUB_API_TOKEN=xyz` - GitHub API access token for our GitHub App
- `GITHUB_REPO_ID=32455` - the ID of your repo in GitHub (can be useful for some API calls)
- `GITHUB_REPO_FULL_NAME=dependencies-io/cli` - the slug path for your repo
- `GITLAB_API_TOKEN=xyz` - the API token you provided for interacting with the GitLab API
- `GITLAB_REPO_ID=539870` - the ID of your repo in GitLab
- `GITLAB_REPO_FULL_NAME=dependencies-io/cli` - the slug path for your repo
- `GITLAB_API_URL=https://gitlab.com/api/v4/projects/...` - full URL endpoint for your project in the GitLab API

## Container limits

In order to safely allow containers to run on our platform, there are limits on
the amount of CPU and memory that you can use. Currently each container can use
up to **756 mb of memory** and 500m CPU. Our `dependencies test` command tries to
simulate these limits in development. Certain actions are obviously more memory
and CPU intensive than others, so you'll need to be aware of these limits and do
things as efficiently as possible, much like you would in a system like
[Heroku](https://devcenter.heroku.com/articles/limits#dynos).

There is also a **20 minute time limit** on each container, which is subject to
change.

## Container rules

The other main restriction to running containers in dependencies.io is that it
must run as a non-root user. Specifically, the user ID and group ID should be
set to `9000` and the root filesystem will be read-only. You can look at our
official collectors and actors for examples of this, but usually looks something
like this in your `Dockerfile`:
```sh
FROM python:3.6

# add a non-root user and give them ownership
RUN useradd -u 9000 app && \
    # user home directory
    mkdir /home/app && \
    chown -R app:app /home/app && \
    # repo
    mkdir /repo && \
    chown -R app:app /repo && \
    # actor code
    mkdir /usr/src/actor && \
    chown -R app:app /usr/src/actor
```
