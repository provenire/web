import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'ul',


  // Attributes
  recordCount: 0,
  pageSize: 10,
  currentPage: 1,
  visiblePageBuffer: 5,


  // Helpers
  totalPages: Ember.computed('recordCount', 'pageSize', function() {
    let pageSize = this.get('pageSize') || 1; // Don't divide by zero
    return Math.round(this.get('recordCount') / pageSize) || 1;
  }),

  canStepBackward: Ember.computed.gt('currentPage', 1),
  canStepForward: Ember.computed('currentPage', 'totalPages', function() {
    return this.get('currentPage') < this.get('totalPages');
  }),

  pageArray: Ember.computed('totalPages', 'currentPage', 'visiblePageBuffer', function() {
    let pages = this.get('totalPages');
    let buffer = this.get('visiblePageBuffer');
    let current = this.get('currentPage');
    let rangeStart = 1;
    let rangeEnd = pages;

    if ((current - buffer) > 1)     { rangeStart = (current - buffer); }
    if ((current + buffer) < pages) { rangeEnd   = (current + buffer); }
    if ((current < buffer) && ((buffer * 2) < pages)) {
      rangeEnd = buffer * 2;
    }
    if (((rangeEnd - current) < buffer) && (buffer * 2) < pages) {
      rangeStart = pages - (buffer * 2);
    }

    let range = new Array(rangeEnd - rangeStart);
    for (let i = (rangeStart - 1); i < rangeEnd; i += 1) {
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
