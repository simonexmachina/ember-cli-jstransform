var JSTransform = require('broccoli-jstransform');

function JSTransformPlugin(options) {
  this.name = 'ember-cli-jstransform';
  this.ext = 'js';
  this.options = options || {};
}

JSTransformPlugin.prototype.toTree = function(tree) {
  return new JSTransform(tree, this.options);
};

function EmberCLIJSTransform(project) {
  this.project = project;
  this.name    = 'Ember CLI JSTransform';
}

EmberCLIJSTransform.prototype.treeFor = function treeFor() {
};

EmberCLIJSTransform.prototype.included = function included(app) {
  this.app = app;
  app.registry.add('js', new JSTransformPlugin(this.app.options.jstransformOptions));
};

module.exports = EmberCLIJSTransform;
