---
date: 2017-09-27T11:10:48-05:00
draft: false
title: Where to Start
---

Dependencies.io is made up of two types of components. We call them "collectors"
and "actors". Understanding what role each plays, and how they work together
is the key to building new components which run on our platform. In the end,
collectors and actors are just docker containers that follow an
established pattern.

<img src="{{< hash_img "docs/collector-schema-actor.png" >}}" alt="Overview diagram" style="max-width: 100%;" />

## Collectors

The role of a collector is to figure out which packages are installed. Depending
on the tools available, this can be straightforward or take a little extra work.

{{< btn btn-class="btn-outline-primary" url="/docs/build/collectors" inner="More about collectors <span class='fa fa-chevron-right'></span>" >}}

## Actors

An actor is given a JSON of collected dependencies, and does something with
them! Most often this means performing an update and using git +
[pullrequest](https://github.com/dependencies-io/pullrequest) to send it back to
the user (that's what the majority of our actors do).

{{< btn btn-class="btn-outline-primary" url="/docs/build/actors/" inner="More about actors <span class='fa fa-chevron-right'></span>" >}}

## JSON schema

Collectors and actors communicate to each other, and the rest of the
dependencies.io system, using a [JSON schema](http://json-schema.org/). Our JSON
schema describes a format for listing "dependencies" with their location in the
repo, the version that is installed, and the versions that are available. It can
also contain version "content" which usually consists of release notes or
changelogs that pertain to a particular release.

When a collector reports what it found, it does that using the JSON schema. An
actor is given dependencies in that same schema, and once it has acted on them,
it reports that by outputting the same JSON schema.

{{< btn btn-class="btn-outline-primary" url="/docs/build/schema/" inner="More about our JSON schema <span class='fa fa-chevron-right'></span>" >}}

## dependencies-cli

In order to bring all these concepts together and make the development process
as easy as possible, we built
[dependencies-cli](https://github.com/dependencies-io/cli). It is the tool we
use ourselves for developing our official collectors and actors, and provides a
helpful test framework.

{{< btn btn-class="btn-outline-primary" url="/docs/build/cli/" inner="More about dependencies-cli <span class='fa fa-chevron-right'></span>" >}}
