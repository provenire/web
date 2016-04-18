import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany, belongsTo } from 'ember-data/relationships';
import Entry from 'web/mixins/entry';

export default Model.extend(Entry, {
  // Standard Resource
  uuid:        attr('string'),
  slug:        attr('string'),
  name:        attr('string'),
  description: attr('string'),
  createdAt:   attr('date'),
  updatedAt:   attr('date'),
  modelType:   'Artifact',

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
  sources: hasMany('source'),
  citations: hasMany('citations', { inverse: 'entry' })
});
