import Ember from 'ember';
import { Ability } from 'ember-can';

export default Ability.extend({
  session: Ember.inject.service('session'),
  user: Ember.computed.reads('session.currentUser'),
  adminUser: Ember.computed.reads('user.isAdmin')
});
