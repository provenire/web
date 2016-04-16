import Ember from 'ember';

export function attributeWithDefault(params) {
  return (typeof params[0] === 'string' && params[0].length) ? params[0] : '<em>Unknown</em>'.htmlSafe();
}

export default Ember.Helper.helper(attributeWithDefault);
