# grunt-mocha

(package/README format heavily borrowed from [grunt-jasmine-task](https://github.com/jzaefferer/grunt-css) and builtin QUnit task)

[Grunt](https://github.com/cowboy/grunt) plugin for running Mocha browser specs in a headless browser (PhantomJS)

## Getting Started

Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-mocha`

(ie. the plugin is installed locally. If you want to install it globally - which is not recommended - check out the official [grunt documentation][plugin_docs])

Then add this line to your project's `grunt.js` gruntfile at the bottom:

```javascript
grunt.loadNpmTasks('grunt-mocha');
```

Also add this to the ```grunt.initConfig``` object in the same file:

```javascript
mocha: {
  index: ['specs/index.html']
},
```
Replace ```specs/index.html``` with the location of your mocha spec running html file.

Now you can run the mocha task with:

```grunt mocha```

## License
Copyright (c) 2012 Kelly Miyashiro
Licensed under the MIT license.