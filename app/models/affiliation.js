import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // Standard Resource
  uuid:        attr('string'),
  slug:        attr('string'),
  name:        attr('string'),
  description: attr('string'),
  createdAt:   attr('date'),
  updatedAt:   attr('date'),

  // Affiliation
  title:     attr('string'),
  startDate: attr('date'),
  endDate:   attr('date'),
  current:   attr('boolean'),

  // Associations
  person: belongsTo('person'),
  place:  belongsTo('place')
});
