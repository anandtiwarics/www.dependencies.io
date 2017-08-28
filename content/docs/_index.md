---
date: 2017-05-11T11:10:48-05:00
draft: false
title: Documentation
---

Welcome to the dependencies.io documentation.

{{< btn url="quickstart" inner="Quickstart <span class='fa fa-chevron-right'></span>" >}}

## New to dependencies.io?

If your new or just exploring, you might want to start with one of these:

- [What is dependencies.io and how does it work?]({{< relref "docs/introduction.md" >}})
- [See what a basic `dependencies.yml` file would look like in your repo]({{< relref "docs/configuration.md" >}})
- [Install it on one of your projects]({{< relref "docs/quickstart.md" >}})

## Does it support X?

We support everything that we can through the use of _open-source Docker
containers_.

<div class="row">
    {{< dependency_type_choice "supporting/python.png" "Python" "docs/dependencies/python.md" >}}
    {{< dependency_type_choice "supporting/ruby.svg" "Ruby" "docs/dependencies/ruby.md" >}}
    {{< dependency_type_choice "supporting/docker.png" "Docker" "docs/collectors/dockerfile.md" >}}
    {{< dependency_type_choice "supporting/php.svg" "PHP" "docs/dependencies/php.md" >}}

    {{< dependency_type_choice "supporting/git.png" "Git" "docs/dependencies/git.md" >}}
    {{< dependency_type_choice "supporting/github.png" "GitHub" "docs/dependencies/git.md" >}}
    {{< dependency_type_choice "supporting/gitlab.svg" "GitLab" "docs/dependencies/git.md" >}}

    {{< dependency_type_choice "supporting/javascript.png" "Javascript" "docs/dependencies/js.md" >}}
    {{< dependency_type_choice "supporting/npm.svg" "NPM" "docs/dependencies/js.md" >}}
</div>
