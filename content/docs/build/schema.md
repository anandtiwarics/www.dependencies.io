---
date: 2017-09-27T11:10:48-05:00
draft: false
title: JSON schema
---

We use a [JSON schema](http://json-schema.org/) for passing dependency
information throughout the system. You can take a look at the actual implementation
of our schema in the [dependencies-io/schema GitHub repo](https://github.com/dependencies-io/schema).

Using [dependencies-cli]({{< relref "docs/build/cli/index.md" >}}) in development will
automatically validate your usage of the JSON schema during testing.

At minimum, our schema looks like this and requires these fields:

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

After the collector runs, we supplement the version objects in the JSON schema
with any release "content" that we're able to find. This way, when the schema is
handed to the actor, it will have any release notes or changelogs and can use
them in notifications.

The `content` field is optional. A final JSON schema to be sent to an actor may
look more like this:

```json
{
    "dependencies": [
        {
            "name": "coverage",
            "installed": {"version": "4.3.4", "content": "(4.3.4 release notes here...)"},
            "available": [
                {"version": "4.4"},
                {"version": "4.3", "content": "(4.3 release notes here...)"},
                {"version": "..."}
            ],
            "path": "requirements-dev.txt",
            "source": "pypi"
        }
    ]
}
```
