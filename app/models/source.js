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

  // Source
  kind:        attr('string'),
  authors:     attr('string'),
  dateCreated: attr('date'),
  attribution: attr('string'),
  identifier:  attr('string'),
  image:       attr(),
  document:    attr('string'),

  // Associations
  pages: hasMany('page')
});
