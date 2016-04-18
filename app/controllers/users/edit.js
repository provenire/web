import Ember from 'ember';
import notification from 'web/utils/notification';

export default Ember.Controller.extend({
  // Profile Attributes
  name:        Ember.computed.reads('model.name'),
  description: Ember.computed.reads('model.description'),
  company:     Ember.computed.reads('model.company'),
  location:    Ember.computed.reads('model.location'),


  // Actions
  actions: {
    updateProfile() {
      let profileProperties = this.getProperties('name', 'description', 'company', 'location');
      let user = this.get('model');
      user.setProperties(profileProperties);
      user.save().then(() => {
        notification('<b>Success! </b> Your profile has been updated.').show();
      }).catch((error) => {
        Ember.Logger.error(error);
        let message = `<b>Error updating profile:</b> ${error.errors.map((err) => err.detail).join(" ")}`;
        notification(message, { type: 'danger' }).show();
        user.rollbackAttributes();
      });
    },

    updateEmail() {
      // TODO: Implement
      notification('<b>Error:</b> This has not yet been implemented.', { type: 'danger' }).show();
    },

    updatePassword() {
      let newPasswordProperties = this.getProperties('password', 'passwordConfirmation');
      let user = this.get('model');

      user.setProperties(newPasswordProperties);

      user.save().then(() => {
        notification('<b>Success! </b> Your password has been updated.').show();
        this.setProperties({ password: null, passwordConfirmation: null });
      }).catch((error) => {
        Ember.Logger.error(error);
        let message = `<b>Error updating profile:</b> ${error.errors.map((err) => err.detail).join(" ")}`;
        notification(message, { type: 'danger' }).show();
        user.rollbackAttributes();
      });
    }
  }
});
