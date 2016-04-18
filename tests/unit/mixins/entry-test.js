import Ember from 'ember';
import EntryMixin from 'web/mixins/entry';
import { module, test } from 'qunit';

module('Unit | Mixin | entry');

// Replace this with your real tests.
test('it works', function(assert) {
  let EntryObject = Ember.Object.extend(EntryMixin);
  let subject = EntryObject.create();
  assert.ok(subject);
});
