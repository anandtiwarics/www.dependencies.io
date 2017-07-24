---
date: 2017-07-24T14:49:58.517120
draft: false
title: "Actor: slack"
---


[![dependencies.io](https://img.shields.io/badge/dependencies.io-actor-3DA4E9.svg)](https://www.dependencies.io/docs/actors/)
[![Docker](https://img.shields.io/badge/dockerhub-actor--slack-22B8EB.svg)](https://hub.docker.com/r/dependencies/actor-slack/)
[![GitHub release](https://img.shields.io/github/release/dependencies-io/actor-slack.svg)](https://github.com/dependencies-io/actor-slack/releases)
[![Build Status](https://travis-ci.org/dependencies-io/actor-slack.svg?branch=master)](https://travis-ci.org/dependencies-io/actor-slack)
[![license](https://img.shields.io/github/license/dependencies-io/actor-slack.svg)](https://github.com/dependencies-io/actor-slack/blob/master/LICENSE)

A [dependencies.io](https://www.dependencies.io)
[actor](https://www.dependencies.io/docs/actors/)
that sends new releases to a Slack webhook.

## Usage

The `slack_webhook_url` setting is **required**.

### dependencies.yml

```yaml
collectors:
- ...
  actors:
  - type: slack
    versions: "L.Y.Y"
    settings:
      slack_webhook_url: https://hooks.slack.com/services/...
```

## Resources

- https://api.slack.com/docs/message-attachments

## Support

Any questions or issues with this specific actor should be discussed in [GitHub
issues](https://github.com/dependencies-io/actor-slack/issues). If there is
private information which needs to be shared then you can instead use the
[dependencies.io support](https://app.dependencies.io/support).
