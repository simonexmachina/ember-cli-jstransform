'use strict';

var jstransform = require('broccoli-jstransform');

module.exports = {
  name: 'ember-cli-jstransform',
  included: function(app) {
    this._super.included.apply(this, arguments);

    app.registry.add('js', {
      name: 'ember-cli-jstransform',
      ext: 'js',
      toTree: function(tree) {
        return jstransform(tree, app.options.jstransformOptions);
      }
    });
  }
};
