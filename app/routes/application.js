import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  title: function(tokens) {
    return (tokens.length ? tokens.reverse().join(' | ') + ' | ' : '') + 'Provenire';
  },

  actions: {
    didTransition() {
      window.scrollTo(0,0);
      return true;
    },

    error(error) {
      if (error) {
        return this.transitionTo('/not-found');
      }
    }
  }
});
