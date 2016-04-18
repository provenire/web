import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('artifact', params.artifact_id, { include: 'citations' });
  },

  titleToken(model) {
    return model.get('name');
  }
});
