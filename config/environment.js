'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'adn-central',
    environment,
    rootURL: '/',
    locationType: 'auto',
    torii: {
    sessionServiceName: 'session'},
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true

      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.firebase={
      apiKey: "AIzaSyCImjD67U5oAmEI_aqeTRjVOuNzGr50ZxI",
      authDomain: "guha-dev.firebaseapp.com",
      databaseURL: "https://guha-dev.firebaseio.com",
      projectId: "guha-dev",
      storageBucket: "guha-dev.appspot.com",
      messagingSenderId: "637932129887"
    },
    ENV['ember-google-maps'] = {
  key: 'AIzaSyDJDgTus64NJBRupZGptXAeL3ku2g1rRD8', // Using .env files in this example
  language: 'es',
  region: 'MX',
  protocol: 'http',
  version: '3.31',
  libraries: ['geometry', 'places']
  // client: undefined,
  // channel: undefined,
  // baseUrl: '//maps.googleapis.com/maps/api/js'
}

  }

  if (environment === 'test') {
    // Testem prefers this...

    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
