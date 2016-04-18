import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['doc', 'container-fluid', 'full-height', 'no-padding'],

  didInsertElement() {
    $.Pages.initScrollBarPlugin();
  }
});
