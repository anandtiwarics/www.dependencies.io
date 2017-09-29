---
date: 2017-09-28T11:10:48-05:00
draft: false
title: Dependency filtering
---

Another useful way to specify how your actors should work is to filter
dependencies based on their name. We use regular expression fields to allow for
both simple and complex filters.

## "dependencies"

Use the `dependencies` field on an actor to filter by name.

```yaml
collector:
- ...
  actors:
  - type: python-pip
    dependencies: "^django-.*"  # get packages starting with "django-"
```

```yaml
collector:
- ...
  actors:
  - type: js-npm
    dependencies: "^react$"  # match "react" exactly
```

## "dependencies_not_matching"

The `dependencies_not_matching` field allows you to write simple regular
expressions, but filter out dependencies that don't match (which can otherwise
be painful in regular expression syntax).

```yaml
collector:
- ...
  actors:
  - type: python-pip
    dependencies_not_matching: "^django-.*"  # ignore packages starting with "django-"
```

```yaml
collector:
- ...
  actors:
  - type: js-npm
    dependencies_not_matching: "^react$"  # match everything except "react"
```

## Combining with "versions" filters

By combining a `dependencies` filter with a `versions` filter, you can specify
exactly which kinds of updates you want for different groups of packages. For example, if you wanted every update to your third-party Django apps, but minor and patch updates to everything else:

```yaml
collector:
- ...
  actors:
  - type: python-pip
    dependencies: "^django-.*"  # packages starting with "django-"
    versions: "Y.Y.Y"  # major, minor, and patch
  - type: python-pip
    dependencies_not_matching: "^django-.*"  # everything except those starting with "django-"
    versions: "L.Y.Y"  # minor and patch updates only
```
