---
date: 2017-09-27T11:10:48-05:00
draft: false
title: Building collectors
---

Collectors are responsible for discovering what is installed and available, and
reporting that information in this format:

```json
{
    "dependencies": [
        {
            "name": "coverage",
            "installed": {"version": "4.3.4"},
            "available": [
                {"version": "4.4"},
                {"version": "4.3"},
                {"version": "..."}
            ],
            "path": "requirements-dev.txt",
            "source": "pypi"
        }
    ]
}
```

[read more about our JSON schema <span class="fa fa-arrow-right"></span>]({{< relref "docs/build/schema.md" >}})

## Collecting installed versions

The biggest challenge with a collector is determining which version of a package
would be installed. Depending on the tool, there may be different ways to
specify dependencies, using different files, and sometimes using "lock files".
The tools change over time and as such, their behavior can change. Because of
these challenges, collectors usually go one of two ways.

#### 1. Install the dependencies

This is the easiest, and the most CPU/memory intensive route. By using the
native "install" command (e.g. `npm install`, `pip install`, etc.) you can let
the tool itself resolve the dependencies and do exactly the same thing that a
user would do. Once everything is installed, there is usually some command or
way to parse out which version it ended up installing.

###### Pros: easy, less guess-work

###### Cons: slow, expensive

#### 2. Avoid installing the dependencies

Sometimes it is possible to statically parse out _what would be installed_,
without actually installing it (parsing lockfiles, resolving requirements
manually, etc.). Actually, this should almost always be _possible_, but
depending on the tool at-hand can take a lot of work. The best way to do this in
our experience is to use the APIs that are a part of the package you're using --
most of the time these aren't documented, stable, or very user friendly though.

###### Pros: fast! 🐢💨

###### Cons: difficult, less predictable, undocumented APIs

## Finding available versions

Another important job of the collector is to figure out which versions are
available. Again, some tools provide an easy way to do this (e.g. `npm view
react versions --json`) and others don't. Fortunately there is almost always
some kind of JSON API behind these things which can be used in some way.

## Examples

Take a look at the source code for our official collectors to see more implementation details.

{{< btn btn-class="btn-outline-primary" url="https://github.com/search?q=topic%3Adependencies-collector+org%3Adependencies-io&type=Repositories" inner="Official collectors on GitHub <span class='fa fa-chevron-right'></span>" >}}
