import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'img',
  attributeBindings: ['src', 'width'],
  classNameBindings: ['classes'],

  // Attributes
  src: Ember.computed('img', 'defaultSrc', function() {
    return this.get('img') || this.get('defaultSrc');
  }),
  width: Ember.computed.oneWay('defaultWidth'),
  height: Ember.computed.oneWay('defaultWidth'),
  classes: Ember.computed.oneWay('defaultClasses'),

  // Defaults
  defaultWidth: 100,
  defaultClasses: '',

  defaultSrc: Ember.computed('width', function() {
    if (this.get('width') > 200) {
      return '/assets/antiquarium/no_photo/500@2x.png';
    } else {
      return '/assets/antiquarium/no_photo/100.png';
    }
  })
});
