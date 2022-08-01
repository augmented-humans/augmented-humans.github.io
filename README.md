# Augmented Humans Conference Website
This is the repo for the [Augmented Humans Website](https://augmented-humans.org).
It uses [Jekyll](https://jekyllrb.com) to generate the static sites and deploys/hosts it via [GitHub Pages](https://pages.github.com).
Please refer to the official documentation (linked below) if you intend to make any changes.

## Prerequisites
* Ruby 2.7.3
* RubyGems
* GCC and Make
* Jekyll
* Bundler

For more information, a tutorial on how to install the prerequisites, a quick start guide, and more see the [Jekyll Docs](https://jekyllrb.com/docs/).

## Quick start guide
Assuming that the prequisites are fulfilled, you can start by locally building the current version of the website as follows:
```
git clone git@github.com:augmented-humans/augmented-humans.github.io.git
cd augmented-humans.github.io
bundle install
bundle exec jekyll serve
```

## Updating the site
This repo has two main branches.
The `master`-branch is the default branch.
On this, new versions of the website can be developed without interfering with the currently published site.
Any changes to the `publish`-branch however are detected by Github Pages and the website is updated automatically.
Therefore, a proposed workflow is as follows:
* Make sure you have the most current version of the `master`-branch
* Work on the site as you would with any other repo and commit/push as desired
* As soon as a new version is ready, a pull request from the `master`-branch into the `publish`-branch is done
* The new version is automatically built and deployed, done!

Quick changes can of course always be done directly on the `publish`-branch, but please make sure not to break things.

## DNS
DNS settings for [augmented-humans.org](https://augmented-humans.org) domain are configured via a personal Cloudflare account. 
Ask Kirill (kirill@kmd.keio.ac.jp) if you need assistance with that. 

## Dependency versions
To ensure that the website built on your local device is the same as the one that Github Pages creates, you can compare your current package versions against the current [Github Pages versions](https://pages.github.com/versions/).
