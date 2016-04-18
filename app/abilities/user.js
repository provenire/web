import Ember from 'ember';
import BaseAbility from 'web/abilities/base';

export default BaseAbility.extend({
  canEdit: Ember.computed('adminUser', 'user', 'model.id', function() {
    return this.get('adminUser') || this.get('user.id') === this.get('model.id');
  })
});
