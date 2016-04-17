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
    let maxRange = Math.min(buffer * 2, pages);
    let rangeStart = 1;
    let rangeEnd = pages;

    if ((current - buffer) > 1)     { rangeStart = (current - buffer); }
    if ((current + buffer) < pages) { rangeEnd   = (current + buffer); }
    if ((current < buffer) && (maxRange <= pages)) {
      rangeEnd = maxRange;
    }
    if (((rangeEnd - current) < buffer) && (maxRange <= pages)) {
      rangeStart = pages - maxRange;
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
      window.scrollTo(0,0);
    },

    pageClicked(page) {
      this.set('currentPage', page);
      window.scrollTo(0,0);
    }
  }
});
