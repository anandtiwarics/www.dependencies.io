---
date: 2017-09-27T11:10:48-05:00
draft: false
title: Building Actors
---

Actors are extremely flexible. The most common task for an actor is to create a
new git branch, update a dependency, git commit and push, and then open a pull
request. If that's not the way that you work, you can use actors for sending
other kinds of lightweight or team-wide notifications like email, Slack, issue
trackers, or whatever your team uses to communicate.

Once your actor has done it's thing, all it needs to do is send the same [JSON
schema]({{< relref "schema.md" >}}) to stdout so that dependencies.io knows it
was successful. This way we can save that action in our database and won't ask
you to do it again.

## "pullrequest"

Because sending a pull request (or "merge request" on GitLab) is so common,
we've pulled that functionality out into a small Go program that you can easily
install in your container and use. It's made to work with dependencies.io (the
[environment variables]({{< relref "env.md" >}}) in particular) and we use it in all of our official
actors.

**If you're building an actor that sends pull requests or merge requests, we
highly recommend that you make use of it.**

{{< btn btn-class="btn-outline-primary" url="https://github.com/dependencies-io/pullrequest" inner="dependencies-io/pullrequest on GitHub <span class='fa fa-chevron-right'></span>" >}}

## Examples

Take a look at the source code for our official actors to see more implementation details.

{{< btn btn-class="btn-outline-primary" url="https://github.com/search?q=topic%3Adependencies-actor+org%3Adependencies-io&type=Repositories" inner="Official actors on GitHub <span class='fa fa-chevron-right'></span>" >}}
