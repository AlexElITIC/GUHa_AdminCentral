'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-google-maps': {
      only: ['marker', 'info-window']
      // exclude: ['overlay']
    }
  });
  app.import('bower_components/materialize/dist/js/materialize.js')
    app.import('bower_components/materialize/dist/css/materialize.css')
  return app.toTree();
};
