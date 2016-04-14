import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  // Standard Resource
  uuid:        attr('string'),
  slug:        attr('string'),
  name:        attr('string'),
  description: attr('string'),
  createdAt:   attr('date'),
  updatedAt:   attr('date'),

  // Event
  date:          attr('date'),
  status:        attr('string'),
  failed:        attr('boolean'),
  priceCents:    attr('number'),
  priceCurrency: attr('string'),

  // Associations
  artifacts: hasMany('artifact'),
  sources:   hasMany('source')
});
