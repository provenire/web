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
      user.save().then((user) => {
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
      // TODO: Implement
      notification('<b>Error:</b> This has not yet been implemented.', { type: 'danger' }).show();
    }
  }
});
