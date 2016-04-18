import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
import { CanMixin } from 'ember-can';

export default Ember.Route.extend(AuthenticatedRouteMixin, CanMixin, {
  model(params) {
    return this.store.findRecord('user', params.user_id);
  },

  titleToken(model) {
    return model.get('name');
  },

  beforeModel() {
    if (this.cannot('edit user')) {
      this.transitionTo('dashboard');
    }
  }
});
