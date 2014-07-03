# ember-cli-jstranform

An [ember-cli](https://github.com/stefanpenner/ember-cli) addon for applying [jstransform](https://github.com/facebook/jstransform) transformations, such as transpiling ES6 to ES5.

## Installation

```bash
npm install --save-dev ember-cli-jstransform
```

## Usage

By default this addon will perform all the included transforms (see the `.transforms` option below).

Or, if you want more control then you can specify options using the `jstranformOptions` config property:

```
var app = new EmberApp({
  ...
  jstransformOptions: {...}
});
```

### Options

* `.transforms` (array): An array of jstransform transformations
  to be performed. Defaults to the full set of transforms included in jstranform.
  Options are:

  es6-arrow-function  
  es6-class  
  es6-destructuring  
  es6-object-concise-method  
  es6-object-short-notation  
  es6-rest-param  
  es6-template  
  es7-spread-property  
* `.visitors`: An array of custom tranforms. If `.transforms` is specified 
  then this option is ignored.
* `.ignoredFiles`: An array of file paths to ignore. These are included
  in the output tree without being transformed. [Glob patterns](https://github.com/isaacs/minimatch) 
  can be used.
* `.extensions`: File extensions to transform. Defaults to '.js'
* `.sourceMap`: Create source maps (experimental)
