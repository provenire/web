import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'nav',
  classNames: ['page-sidebar'],
  attributeBindings: ['dataPages:data-pages'],
  dataPages: 'sidebar',

  // Active route highlighting
  activeRoute: null,

  dashboardRoute: Ember.computed.match('activeRoute', /dashboard/),
  exploreRoute:   Ember.computed.match('activeRoute', /artifacts|people|places|sources|events|affiliations/),
  artifactsRoute: Ember.computed.match('activeRoute', /artifacts/),
  peopleRoute:    Ember.computed.match('activeRoute', /people/),
  placesRoute:    Ember.computed.match('activeRoute', /places/),
  sourcesRoute:   Ember.computed.match('activeRoute', /sources/),


  // TODO: Figure out a more universal place for this
  didInsertElement() {
    $.Pages.init();

    // Close the sidebar on mobile
    if ($.Pages.isVisibleXs() || $.Pages.isVisibleSm()) {
      this.$('.sidebar-menu li a').click(() => {
        $('[data-pages="sidebar"]').data()['pg.sidebar'].toggleSidebar();
      });
    }
  }
});
