---
date: 2017-05-11T11:10:48-05:00
draft: false
title: Version filtering
---

With a [custom version-filtering
syntax](http://github.com/dropseed/version-filter), you can flexibly decide
exactly which versions you want to be acted on.

For SemVer compliant versioning, you can use our semver filtering, and for
anything else you can use regular expressions.

## Why?

###### One filter for a group of dependencies

Our `L` (version lock) syntax allows you to filter versions based on what you
_currently have installed_. This makes it easy to get all patches to your
installed version of every dependency (e.g. `L.L.Y`), whereas with most semver
syntaxes you'd have to manually enter the major and minor range for each
dependency (e.g. `3.1.x`, `4.0.x`, etc.).

###### New behavior for `x`/`*`

In some semver libraries (ex.
[node-semver](https://github.com/npm/node-semver)), everything after a `x` or `*`
wildcard range will match. This makes it impossible to get all minor updates
_without_ also getting their patches. Our `Y` (yes) syntax defaults to `0` for
everything after it. So to get minor updates without also getting patches, just
use `L.Y.0`. Combine that with OR and you can now get notified about new minor updates to your
version, as well as patches to _your_ minor version: `L.Y.0 || L.L.Y`

## Syntax overview

##### L (version "lock")

Lock this "slot" (major/minor/patch/prerelease) to what you have installed. Lets
you quickly filter down to updates to your installed version.

##### Y ("yes")

Anything in this "slot" (major/minor/patch/prerelease) will match. Slots after it
default to `0`.

##### Regular expressions

Not everything follows semantic versioning. If that's the case, you can still
filter the versions that you want by using regular expressions. Just use the
`versions_regex` field instead of `versions` in your dependencies.yml.

## Examples

###### Patches to my installed version

```yaml
versions: "L.L.Y"
```

###### New minor updates to my major version

```yaml
versions: "L.Y"
# or
versions: "L.Y.0"
```

###### New minor updates to my major version and patches to my installed minor version

```yaml
versions: "L.Y.0 || L.L.Y"
```

###### New major releases only

```yaml
versions: "Y"
# which is the same as
versions: "Y.0.0"
```

###### All major, minor, patch, and prerelease versions

```yaml
versions: "Y.Y.Y-Y"
```

###### "nightly" releases

```yaml
versions_regex: "nightly"
```
