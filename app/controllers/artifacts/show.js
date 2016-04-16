import Ember from 'ember';

export default Ember.Controller.extend({
  names: Ember.computed('model.alternateNames', function() {
    return this.get('model.alternateNames').join(', <br/>').htmlSafe();
  })
});
