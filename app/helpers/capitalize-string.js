import Ember from 'ember';

export function capitalizeString(str) {
  return String(str).capitalize();
}

export default Ember.Helper.helper(capitalizeString);
