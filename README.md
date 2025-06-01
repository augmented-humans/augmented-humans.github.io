<img src="favicon.ico" align="right" />

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

## Quick Start Guide
Assuming that the prequisites are fulfilled, you can start by locally building the current version of the website as follows:
```
git clone git@github.com:augmented-humans/augmented-humans.github.io.git
cd augmented-humans.github.io
bundle install
bundle exec jekyll serve
```

## Updating the Site
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

## Dependency Versions
To ensure that the website built on your local device is the same as the one that Github Pages creates, you can compare your current package versions against the current [Github Pages versions](https://pages.github.com/versions/).

---
## Current Year (2023) Design Considerations
The header image showing Glasgow can be found on [Unsplash](https://unsplash.com/photos/SbRlwkbVnEY).
New animation parameters were set for the particles effect on the hero image ([particles.js Website](https://vincentgarreau.com/particles.js/)).
A new logo was also designed for the conference, as can be seen at the top of this Readme.
The color palette of the redesign can be seen [here](https://coolors.co/003865-eca400-f5f5f5-fafaff-3aafb9).
The main color is the official color of the University of Glasgow, further colors were chosen by looks alone.
The colors are as follows:
* Prussian Blue - 003865
* Marigold - ECA400
* Cultured - F5F5F5
* Ghost White - FAFAFF
* Verdigris - 3AAFB9

---
## Info on the Directory Structure
The general repository structure is very similar to the usual structure a [normal Jekyll project](https://jekyllrb.com/docs/structure/) has.
The root directory holds the `.html` pages and further data such as the main `config.yml`, the logo, or this Readme.
The `_data` subdirectory holds well-formatted site data (e.g., the actual text) that is used to populate the aforementioned `.html` pages.
The `_includes` and `_layouts` directories are similar in the way that they contain partials and predefined layouts which can be referenced to in the `.html` files as well.
The subdirectories `css`, `js`, and `img` should be self explanatory and `_site` holds the compiled webpage. As this is done on either the local device or by Github pages, this folder should not be committed to the repo.
Much of the rest mostly is old content from earlier years (e.g., the blog).

## Regarding the design of the website
The two most important files are `_sass/base.scss` (containing additional, custom CSS next to the base bootstrap theme) and `css/main.scss` (containing the definitions of the color palette).
Some CSS can still be found directly in the `.html` files and not all colors are correctly parameterized yet.
Most sites make use of the `flip`, `flip1`, and `flip2` classes which works for the most part, but there are some `style` parts in the `.html` files here and there.

---
## Customizing Colors

The website uses a hierarchical color system that can be customized at different levels:

### Global Color Variables
The main color palette is defined in `css/main.scss`:
```scss
// Main theme colors
$theme-background-primary: #0077be; // Primary background (Okinawa ocean blue)
$theme-primary: #ff6b35; // Accent color (Coral orange)
$theme-tertiary: #4ecdc4; // Hover color (Emerald green)
$hyperlinks: #0077be; // Link color (Ocean blue)
$color-highlight: #0077be; // Highlight color (Ocean blue)
```

### Element-Specific Colors
Individual elements are styled in `_sass/_base.scss`:
- **Text colors**: Lines 49-54 (links), 1008, 1021 (headings)
- **Border colors**: Line 997 (heading underlines), 1095-1115 (section borders)
- **Table colors**: Lines 1765-1785 (deadlines table)

### Inline Colors
Some colors are defined directly in YAML data files:
- `_data/calls-for-participation.yaml` - Button and link colors
- `_data/attending.yaml` - Registration button colors
- `_data/travel.yaml` - Link colors

### How to Change Colors
1. **For global changes**: Modify the variables in `css/main.scss`
2. **For specific elements**: Find the relevant selector in `_sass/_base.scss`
3. **For inline elements**: Update the color values in the respective YAML files

### Current Color Palette (Okinawa Theme)
- Ocean Blue: `#0077be` - Primary color for backgrounds, links, and highlights
- Coral Orange: `#ff6b35` - Accent color for buttons and important elements
- Emerald Green: `#4ecdc4` - Hover states and secondary highlights
- Sand Beige: `#fff8dc` - Light backgrounds
- Sky Blue: `#f0f8ff` - Section backgrounds
