---
date: 2017-08-02T11:10:48-05:00
draft: false
title: GitLab Self-Hosted Setup
---

Our hosted dependencies.io service can work with your self-hosted GitLab
installation. Below are the steps to get it set up.

### Create a GitLab OAuth "Application"

We use this to authenticate your users and verify which projects they have
access to.

<div class="window-frame"><img src="{{< hash_img "docs/setup/gitlab-application.png" >}}" alt="GitLab OAuth Application" /></div>

It should have the `api` and `read_user` scopes, and a redirect URI of `https://manage.dependencies.io/accounts/gitlab_self_hosted/login/callback/`.

### Give us your GitLab information

Use the support chat to give us your information, so that we can set it up to be
used.

- Application ID (from above)
- Secret (from above)
- Location of your GitLab install ("https://gitlab.example.com")

### Connect your GitLab account to dependencies.io

Log in to https://app.dependencies.io with your existing dependencies.io account, then go to `https://manage.dependencies.io/accounts/gitlab_self_hosted/login/?host=https://gitlab.example.com&process=connect`,
using your GitLab location for `host`.

### Add a repo!

You can now add GitLab repos through the usual steps, at https://app.dependencies.io/add-project/gitlab.
