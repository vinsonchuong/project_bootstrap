# ProjectBootstrap
A set of recipes to initialize projects in various frameworks.

## Usage
```bash
bootstrap <recipe> <project_directory>
```

## Recipes
* [`rails`](#rails):
  A [Ruby on Rails](http://rubyonrails.org) JavaScript web application
* [`node`](#node):
  A [Node.js](http://nodejs.org) +  [Gulp](http://gulpjs.com) +
  [Browserify](http://browserify.org) web application
* [`aur`](#aur):
  An [AUR](https://aur.archlinux.org) package

### Rails
A [Ruby on Rails](http://rubyonrails.org) JavaScript web application

```sh
bootstrap rails /path/to/new/app
```

#### Assumptions
* Latest stable version of Ruby installed and on the `PATH`

### Node
A [Node.js](http://nodejs.org) +  [Gulp](http://gulpjs.com) +
[Browserify](http://browserify.org) web application

```sh
bootstrap node /path/to/new/app
```

#### Assumptions
* Latest stable version of Node.js installed with `node` and `npm` the `PATH`

### AUR
An [AUR](https://aur.archlinux.org) package

```sh
bootstrap aur /path/to/new/app
```
