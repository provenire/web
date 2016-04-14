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

  // Place
  // nothing yet

  // Associations
  affiliations: hasMany('affiliation'),
  picture:      belongsTo('source'),
  events:       hasMany('event'),
  photos:       hasMany('source'),
  sources:      hasMany('source')
});
