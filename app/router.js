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
    this.route('show', { path: '/:artifact_id' });
  });
  this.route('people', function() {
    this.route('show', { path: '/:person_id' });
  });
  this.route('places', function() {
    this.route('show', { path: '/:place_id' });
  });
  this.route('sources', function() {
    this.route('show', { path: '/:source_id' });
  });
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
  });
  this.route('affiliations', function() {
    this.route('show', { path: '/:affiliation_id' });
  });
  this.route('events', function() {
    this.route('show', { path: '/:event_id' });
  });
});

export default Router;
