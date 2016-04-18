import Ember from 'ember';

export default Ember.Controller.extend({
  dontRenderTemplate: Ember.computed.match('currentPath', /login|users\.reset-password|users\.register/),
  fullHeight: Ember.computed('currentPath', function() {
    return (this.get('currentPath') === 'sources.show') ? 'full-height' : '';
  })
});
