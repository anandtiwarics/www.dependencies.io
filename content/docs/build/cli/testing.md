---
date: 2017-09-27T11:10:48-05:00
draft: false
title: Testing
---

Testing is an important aspect of developing dependencies.io components, since
it gives you chance to find issues without needing to run your container on our
production infrastructure. Our CLI provides a useful end-to-end testing
framework to check that the basic input and output of your container works as
expected.

## "dependencies test"

Our CLI provides a helpful `test` command to ease the process of making sure a
collector or actor is compatible. You can think of it as an end-to-end (e2e)
test, which will provide a Dependencies.io JSON schema for input and verify that
the output matches what is expected.

**This is the best and easiest way to test how your collector or actor will run
in production.**

{{< asciinema 139969 >}}

<div class="alert alert-info"><code>dependencies test</code> uses <a
href="https://docs.pytest.org">pytest</a> under the hood. Any options you pass
will be passed on to pytest. The most used options is <code>dependencies test
-s</code> to <a href="https://docs.pytest.org/en/latest/capture.html">show all
output</a>.</div>

#### What it does

The `dependencies test` command will do several things for you:

- read `dependencies_tests.yml` for test instructions
- create a temporary git repo with your test repo files
- start a docker container with CPU and memory restrictions similar to the
production dependencies.io limits
- provide a set of environment variables mirroring those used on dependencies.io
- validate all input and output JSON using
[dependencies-schema](https://github.com/dependencies-io/schema)

##### For collectors

- compare the collected dependencies to those expected (in a `.json` file)
- remove the "available" versions when doing comparision -- otherwise tests
can repeatedly break as the live packages used in your test push new versions

##### For actors

- ensure that the expected number of dependency actions are taken

#### "dependencies_tests.yml"

Pending documentation. See collector example [here](https://github.com/dependencies-io/collector-python-pip/blob/master/dependencies_tests.yml), and an actor example [here](https://github.com/dependencies-io/actor-python-pip/blob/master/dependencies_tests.yml).

## Running tests in CI

For all of our official collectors and actors, we use [Travis
CI](https://travis-ci.org/) to run tests on every commit. The basic setup for
that might look something like this:

```yaml
sudo: required
services:
- docker

language: python
python: 3.6
cache: pip

install: pip install dependencies-cli==0.4.0

script: dependencies test
```

## Unit testing

You are free to write any of your own unit tests against your code as you would
in any other project. They can simply run alongside your
`dependencies_tests.yml`.
