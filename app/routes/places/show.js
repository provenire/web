import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('place', params.place_id);
  },

  titleToken(model) {
    return model.get('name');
  }
});
