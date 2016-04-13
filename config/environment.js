/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'web',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {},

    // Fonts
    googleFonts: [
      'Montserrat:400,700'
    ],

    // Settings
    apiBase: 'https://api2.antiquarium.io',
    authorizer: 'authorizer:token'
  };

  if (environment === 'development') {
    ENV.apiBase = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }


  // Simple Auth
  ENV['ember-simple-auth'] = {
    authenticationRoute: 'login',
    // routeAfterAuthentication: 'dashboard',
    // routeIfAlreadyAuthenticated: 'dashboard'
  }

  ENV['ember-simple-auth-token'] = {
    serverTokenEndpoint: ENV.apiBase + '/users/token_auth',
    identificationField: 'email',
    passwordField: 'password',
    tokenPropertyName: 'token',
    tokenExpireName: 'exp',
    authorizationPrefix: 'Bearer ',
    authorizationHeaderName: 'Authorization',
    refreshAccessTokens: true,
    serverTokenRefreshEndpoint: ENV.apiBase + '/users/token_refresh',
    refreshLeeway: 300,
    timeFactor: 1
  }


  // Export
  return ENV;
};
