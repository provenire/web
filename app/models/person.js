import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // Standard Resource
  uuid:        attr('string'),
  slug:        attr('string'),
  name:        attr('string'),
  description: attr('string'),
  createdAt:   attr('date'),
  updatedAt:   attr('date'),

  // Person
  gender:      attr('string'),
  dateOfBirth: attr('date'),
  dateOfDeath: attr('date'),
  nationality: attr('string'),

  // Associations
  affiliations: hasMany('affiliation'),
  picture:      belongsTo('source'),
  events:       hasMany('event'),
  photos:       hasMany('source'),
  sources:      hasMany('source')
});
