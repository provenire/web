import Ember from 'ember';

export default Ember.Controller.extend({
  loginPath: Ember.computed.match('currentPath', /login/)
});
