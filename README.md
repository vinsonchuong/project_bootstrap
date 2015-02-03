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
* [`gem`](#gem):
  A [RubyGem](https://rubygems.org)
* [`npm`](#npm):
  An [npm](https://www.npmjs.org) package
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
* Latest stable version of Node.js and npm installed and on the `PATH`

### RubyGem
A [RubyGem](https://rubygems.org)

```sh
bootstrap gem /path/to/new/gem
```

#### Assumptions
* Latest stable version of Ruby installed and on the `PATH`

### NPM
An [npm](https://www.npmjs.org) package

```sh
bootstrap npm /path/to/new/package
```

#### Assumptions
* Latest stable version of Node.js and npm installed and on the `PATH`

### AUR
An [AUR](https://aur.archlinux.org) package

```sh
bootstrap aur /path/to/new/package
```

#### Assumptions
* Arch Linux with
  [`base-devel`](https://www.archlinux.org/groups/x86_64/base-devel/) installed
