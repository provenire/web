import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('source', params.source_id, { include: 'pages' });
  },

  titleToken(model) {
    return model.get('name');
  }
});
