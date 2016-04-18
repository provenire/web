import Ember from 'ember';

export default Ember.Route.extend({
  queryParams: {
    page: { refreshModel: true },
    size: { refreshModel: true }
  },

  model(params) {
    return this.store.query('source', {
      page: params.page,
      size: params.size,
      sort: 'name',
      include: 'citations,citations.entry'
    });
  }
});
