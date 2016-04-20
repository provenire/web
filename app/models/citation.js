import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  // Standard Resource
  createdAt: attr('date'),
  updatedAt: attr('date'),
  modelType: 'Citation',

  // Citations
  number:  attr('number'),
  content: attr('string'),

  // Associations
  source: belongsTo('source'),
  entry: belongsTo('entry', { polymorphic: true })
});
