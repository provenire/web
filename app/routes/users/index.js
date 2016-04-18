import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model() {
    return this.store.query('user', { page: this.get('page'), size: this.get('pageSize') });
  },

  page: 1,
  pageSize: 10
});
