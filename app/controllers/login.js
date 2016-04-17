import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
  errorMessage: null,

  actions: {
    authenticate() {
      let credentials = this.getProperties('identification', 'password');
      this.get('session').authenticate('authenticator:jwt', credentials).catch((res) => {
        if (res.errors[0].details === "Invalid credentials") {
          this.set('errorMessage', "The email address or password is unrecognized.");
        } else {
          this.set('errorMessage', "There was a problem signing you in. Please try again later.");
        }
      });
    }
  }
});
