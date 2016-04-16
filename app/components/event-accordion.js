import Ember from 'ember';

export default Ember.Component.extend({
  event: null,

  uuidHref: Ember.computed('event.uuid', function() {
    return '#' + this.get('event.uuid');
  })
});
