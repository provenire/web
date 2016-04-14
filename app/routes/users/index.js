import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.query('user', { page: this.get('page'), size: this.get('pageSize') });
  },

  page: 1,
  pageSize: 10
});