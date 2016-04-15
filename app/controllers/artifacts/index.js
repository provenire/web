import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],

  page: 1,
  size: 10,
  total: Ember.computed.alias('model.meta.record-count'),

  startEntry: Ember.computed('page', 'size', function() {
    let size = this.get('size');
    return this.get('page') * size - (size - 1);
  }),
  endEntry: Ember.computed('page', 'size', 'total', function() {
    let end = this.get('page') * this.get('size');
    return (end > this.get('total') ? this.get('total') : end);
  })
});
