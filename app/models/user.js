import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  // Standard Resource
  uuid:        attr('string'),
  slug:        attr('string'),
  name:        attr('string'),
  description: attr('string'),
  createdAt:   attr('date'),
  updatedAt:   attr('date'),

  // User
  email:    attr('string'),
  company:  attr('string'),
  location: attr('string')
});
