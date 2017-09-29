---
date: 2017-09-27T11:10:48-05:00
draft: false
title: dependencies-cli
---

Our command line tool, "dependencies-cli", is a Python package that aims to ease
the development process for collectors and actors. The most helpful part of that
is the `test` command -- which simulates the dependencies.io environment and
runs an end-to-end test to ensure the container is compatible with our system
and collects/acts on the right dependencies.

{{< btn btn-class="btn-outline-primary" url="https://github.com/dependencies-io/cli" inner="dependencies-io/cli on GitHub <span class='fa fa-chevron-right'></span>" >}}

## Installation

The easiest way to install dependencies-cli is by using `pip install
dependencies-cli`. If you're not a regular Python user, that's ok -- this is the
only tool we'll ask you to install and we promise it's worth it.

> It is not __required__ that you use dependencies-cli, but it is highly recommended.

{{< asciinema 139968 >}}
