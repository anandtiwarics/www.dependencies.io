---
date: 2017-05-11T11:10:48-05:00
draft: false
title: Collectors
---

Collectors are responsible for finding and gathering your dependencies. You tell
them where to look, and they will do the work of figuring out which version you
have installed, and which versions are available.

Each collector runs in its own docker container, which means that they can use
the exact same tools that you would use when working with your dependencies.

### Official collectors

- [python-pip](python-pip)
- [js-npm](js-npm)
- [js-lerna](js-lerna)
- [ruby-bundler](ruby-bundler)
- [git-repo](git-repo)
- [php-composer](php-composer)
- [php-wordpress-core](php-wordpress-core)
- [php-wordpress-plugin](php-wordpress-plugin)
- [dockerfile](dockerfile)

## dependencies.yml

Only three fields are required for each collector: `type`, `path`, `actors`

```yaml
- type: python-pip  # one of the official collectors
  path: app/requirements.txt  # path to the file this collector should use
  actors:
  - ...
```
