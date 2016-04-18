Foodstagram: An Instagram clone built with Lavaca

This is an Instagram style demo app built with Lavaca V4 utilizing Grunt, webpack, and LESS.

[Startup guide](http://getlavaca.com/#/guide)

```bash
$ cd [step # goes here]
````

__Install Node Packages__
```bash
$ npm install
```
    
__Set Your Path__
```bash
$ source ./set_path.sh
```

4. __Install dev dependencies__
```bash
$ npm install
```

```bash
$ grunt
```

## Grunt Tasks

Below is a list of grunt tasks to aid development and facilitate deployment. [More on Build Configuration](http://getlavaca.com/#/guide/Build-Configuration#@1)

### Server

A task that simply runs a static server for local development and testing. Defaults to run on `localhost:8080` with `src` being the root directory.

- __Run the default static server__

```bash
$ grunt
```

### Build

Precompiles LESS and Dust templates, concats and minifies all CSS and JavaScript files, and builds all related files to `www`, `android/assets/www` and `ios/www` directories. 

- __Build with local config__

```bash
$ grunt build
```

- __Build with staging config__ (a copy of the build will be available in `www` folder)

```bash
$ grunt build:staging
```

- __Build with production config__ (a copy of the build will be available in `www` folder)

```bash
$ grunt build:production
```

