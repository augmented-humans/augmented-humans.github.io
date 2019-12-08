# GEIST Website

This repository contains the source for the GEIST website which can be accessed at [http://geist.pro](http://geist.pro).

The way to add new content to the sections of the website is described below. 
Please follow the instructions and avoid editing any layout or asset files.
All changes are applied automatically after being committed.

This website uses [Jekyll](https://jekyllrb.com) and is hosted using [GitHub Pages](https://pages.github.com). 
Please refer to the official documentation if you intend to make any changes that go beyond adding new content.

Ask [@kirill](https://geist-hq.slack.com/messages/D3B4S9C2V/team/U3B3VTAU8/) for help when stuck.

# News
To add an article in the News section, add a Markdown file into the *_posts* folder.
The name of the file must follow this pattern: *YYYY-MM-DD-article_name.markdown*

At the top of the file, the block of the following structure must be present:
```yaml
---
layout:     article
title:      Lessons from the Dagstuhl Seminar on Eyewear Computing
date:       2018-03-30 00:00:00
author:     Kai Kunze
---
```

Edit *title*, *date* and *author* as you see fit.

# Research (Projects)
There are two ways to add a new project into the Research section.

## 1. By downloading the source code
```bash
git clone https://github.com/geist-pro/geist-pro.github.io.git
cd geist-pro.github.io
./project
# follow the script instructions
git add .
git commit -m "Added the project (PROJECT_NAME)"
git push origin master
```

## 2. Directly on GitHub
1. First, decide on a short unique alias for the project that will be used in its url (e.g. http://geist.pro/projects/banana). For this example, let's choose *banana* as our alias.
2. Create a /img/projects/banana folder. Upload your images there.
3. Create a /projects/banana.html file with the following content:
  ```yaml
  ---
  layout: project
  project: banana
  ---
  ```
4. Describe your project by adding the following entry to the \_data/projects.yaml file:
  ```yaml
  - id: banana
    title: The Glorious Banana Project
    description: |
      Descibe your bananas here
    date: 2018 - today
    main_image: 
      url: img/projects/banana/main.jpg
      description: Banana in action
      credit: whoever
    featured: 'no'
    featured_description: |
      This text will be shown on front page when the project is featured
    externally_funded: 'no'
    external_url: '#'
    images:
      - url: img/projects/banana/1.jpg
        description: 
        credit:
      - url: img/projects/banana/2.jpg
        description:
        credit:
    videos:
      - https://www.youtube.com/watch?v=sFukyIIM1XI
  ```

## Project attributes
**id**                - Plain text, doesn't contain any spaces or line breaks

**title**             - Plain text, single line

**description:**      - Plain text, can be split into paragraphs

**date**              - Plain text following the "YYYY - YYYY" format

**main_image**        - Local path, use 800x800 resolution for project's main image

**featured**          - yes/no, shows the project on front page when set to *'yes'* (with quotes)

**featured_description** - Plain text, one or two sentences

**externally_funded** - yes/no, shows the project's **external_url** when set to *'yes'* (with quotes)

**external_url**      - URL to the project's funding source

**images**            - List of local paths for images

**videos**            - List of YouTube URLs

## Project pictures
Please optimize your images (reduce quality and size) for the web before including them in the website. Either do it by yourself or use on online tool like [this](http://optimizilla.com/).

Use 800x800 resolution for project's main image.

If you don't have any picture for the project, a variety of colorful placeholders are available in the img/assets/placeholders folder. 

You can use [ImageMagick](http://www.imagemagick.org/script/index.php) to quickly edit your pictures without the graphic editor.

Install ImageMagick using Homebrew (MacOS only):
```bash
brew install imagemagick
```
To cut out a square from the center of the photo:
```bash
convert 'before.jpg' -gravity Center -crop 1600x1600 'after.jpg'
```
To quickly resize the image:
```bash
convert 'before.jpg' -resize 800x800 -quality 100 'after.jpg'
```
To optimize the image for the web (not the best option, but better than nothing):
```bash
convert "before.jpg" -strip -quality 86 "after.jpg"
```

# Other
## Publications, Collaborators, Geist Members, Geist Description
To edit any of the above, modify the corresponding *.yaml file within the *_data* folder.

## Contact Email, Search Meta Tags, Home Page Title, Google Analytics
To edit any of the above, modify the _config.yml file.
