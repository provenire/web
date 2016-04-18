import Ember from 'ember';
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
  modelType:   'Source',

  // Source
  kind:        attr('string'),
  authors:     attr('string'),
  dateCreated: attr('date'),
  attribution: attr('string'),
  identifier:  attr('string'),
  image:       attr(),
  document:    attr('string'),

  // Associations
  pages: hasMany('page'),
  citations: hasMany('citations'),

  // Helpers
  artifactCitations: Ember.computed.filterBy('citations.@each.entry', 'entry.modelType', 'Artifact'),
  eventCitations: Ember.computed.filterBy('citations.@each.entry', 'entry.modelType', 'Event'),
  peopleCitations: Ember.computed.filterBy('citations.@each.entry', 'entry.modelType', 'Person'),
  placeCitations: Ember.computed.filterBy('citations.@each.entry', 'entry.modelType', 'Place'),
});
