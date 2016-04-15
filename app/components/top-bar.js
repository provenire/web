import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),

  didInsertElement() {
    this.$('.profile-dropdown a').click(() => {
      this.$('.dropdown').removeClass('open');
    });
  }
});
