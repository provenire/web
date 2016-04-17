import Ember from 'ember';

export default Ember.Controller.extend({
  firstArtifact: Ember.computed('model.artifacts.@each.firstObject', function() {
    return this.get('model.artifacts').get('firstObject');
  })
});
