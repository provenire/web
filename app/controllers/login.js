import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  errorMessage: null,
  submitted: false,

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
    }
  }
});
