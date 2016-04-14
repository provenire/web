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

  // Artifact
  alternateNames: attr(),
  artist:         attr('string'),
  dimensions:     attr('string'),
  date_created:   attr('string'),
  group:          attr('boolean'),

  // Associations
  picture: belongsTo('source'),
  events:  hasMany('event'),
  photos:  hasMany('source'),
  sources: hasMany('source')
});
