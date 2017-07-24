from os import path
import datetime
import requests
import difflib


repos = (
    ('collector', 'python-pip'),
    ('collector', 'js-npm'),
    ('collector', 'git-repo'),
    ('collector', 'php-composer'),
    ('collector', 'dockerfile'),
    ('collector', 'php-wordpress-core'),
    ('collector', 'php-wordpress-plugin'),
    ('actor', 'python-pip'),
    ('actor', 'js-npm'),
    ('actor', 'repo-issue'),
    ('actor', 'find-replace'),
    ('actor', 'php-composer'),
    ('actor', 'slack'),
    ('actor', 'php-wordpress-core'),
    ('actor', 'php-wordpress-plugin'),
)


def get_readme_for_repo(type, repo):
    url = 'https://raw.githubusercontent.com/dependencies-io/{}-{}/master/README.md'.format(type, repo)
    response = requests.get(url)
    return response.text.encode('utf-8')


def get_path_for_repo(type, repo):
    p = path.join('content/docs', type + 's', repo + '.md')
    return p


date = datetime.datetime.now().isoformat()

for type, repo in repos:
    print(type, repo)

    readme = get_readme_for_repo(type, repo)
    file_path = get_path_for_repo(type, repo)

    # strip first line (heading) off of readme
    readme = '\n'.join(readme.splitlines()[1:])

    title = '{}: {}'.format(type.capitalize(), repo)

    file_contents = """---
date: {date}
draft: false
title: "{title}"
---

{readme}
""".format(date=date, title=title, readme=readme)

    print 'Comparing old contents to new'
    with open(file_path, 'r') as f:
        old_contents = f.read()

    differ = difflib.Differ()
    diff_results = list(differ.compare(old_contents.splitlines(), file_contents.splitlines()))
    lines_minus = [x for x in diff_results if x.startswith('-')]
    if len(lines_minus) < 2:
        print 'Skipping {}'.format(file_path)
        # if only 1 line changed (date line) then don't write the results
        continue

    print 'Writing {}'.format(file_path)

    with open(file_path, 'w+') as f:
        f.write(file_contents)
