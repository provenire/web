import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('dashboard');
  this.route('artifacts', function() {});
  this.route('people', function() {});
  this.route('places', function() {});
  this.route('sources', function() {});
  this.route('users', function() {
    this.route('show', { path: '/:user_id' });
    this.route('edit', { path: '/:user_id/edit' });
  });
});

export default Router;
