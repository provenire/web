import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',


  // Attributes
  recordCount: 0,
  pageSize: 10,
  currentPage: 1,
  maxVisiblePages: 10,

  totalPages: Ember.computed('recordCount', 'pageSize', function() {
    let pageSize = this.get('pageSize') || 1; // Don't divide by zero
    return Math.round(this.get('recordCount') / pageSize) || 1;
  }),

  canStepBackward: Ember.computed.gt('currentPage', 1),
  canStepForward: Ember.computed('currentPage', 'totalPages', function() {
    return this.get('currentPage') < this.get('totalPages');
  }),

  pageArray: Ember.computed('totalPages', function() {
    let range = new Array(this.get('totalPages'));
    for (let i = 0; i < range.length; i += 1) {
      range[i] = i+1;
    }
    return range;
  }),


  // Actions
  actions: {
    incrementPage(amount) {
      this.set('currentPage', this.get('currentPage') + amount);
    },

    pageClicked(page) {
      this.set('currentPage', page);
    }
  }
});
