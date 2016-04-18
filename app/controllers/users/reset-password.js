import Ember from 'ember';
import ENV from 'web/config/environment';

export default Ember.Controller.extend({
  queryParams: ['token'],
  token: null,
  submitted: false,
  passwordReset: false,
  errorMessage: null,

  actions: {
    resetPassword() {
      this.set('submitted', true);
      let properties = this.getProperties('token', 'password', 'password_confirmation');
      Ember.$.ajax({ type: 'PATCH', url: ENV.apiBase + '/users/reset_password', data: { user: properties } }).then(() => {
        this.set('submitted', false);
        this.set('errorMessage', null);
        this.set('passwordReset', true);
      }).fail((error) => {
        this.set('submitted', false);
        this.set('errorMessage', error.responseJSON.errors[0].details);
      });
    }
  }
});
