import Ember from 'ember';
import ENV from'web/config/environment';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  errorMessage: null,
  submitted: false,
  instructionsSent: false,

  actions: {
    authenticate() {
      this.set('submitted', true);
      let credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials).catch((res) => {
        if (res.errors[0].details === "Invalid credentials") {
          this.set('errorMessage', "The email address or password is unrecognized.");
        } else {
          this.set('errorMessage', "There was a problem signing you in. Please try again later.");
        }
        this.set('submitted', false);
      });
    },

    sendResetInstructions() {
      this.set('submitted', true);
      let email = this.getProperties('email');
      Ember.$.ajax({ type: 'POST', url: ENV.apiBase + '/users/forgot_password', data: email }).then(() => {
        this.set('submitted', false);
        this.set('instructionsSent', true);
        this.set('errorMessage', null);
      }).fail((error) => {
        this.set('submitted', false);
        this.set('errorMessage', error.responseJSON.errors[0].details);
      });
    }
  }
});
