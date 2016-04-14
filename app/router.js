import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('dashboard');
  this.route('artifacts', function() {
    this.route('show');
  });
  this.route('people', function() {
    this.route('show');
  });
  this.route('places', function() {
    this.route('show');
  });
  this.route('sources', function() {
    this.route('show');
  });
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('affiliations', function() {
    this.route('show');
  });
  this.route('events', function() {
    this.route('show');
  });
});

export default Router;
