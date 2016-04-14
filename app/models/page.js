import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  createdAt: attr('date'),
  updatedAt: attr('date'),

  number: attr('number'),
  text:   attr('string'),
  image:  attr('string'),

  // Associations
  source: belongsTo('source')
});
