/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  /**
   * CSS
   */
  // Pages Plugins
  app.import('vendor/assets/plugins/pace/pace-theme-flash.css');
  app.import('vendor/assets/plugins/boostrapv3/css/bootstrap.min.css');
  app.import('vendor/assets/plugins/font-awesome/css/font-awesome.css');
  app.import('vendor/assets/plugins/jquery-scrollbar/jquery.scrollbar.css');
  app.import('vendor/assets/plugins/bootstrap-select2/select2.css');
  app.import('vendor/assets/plugins/switchery/css/switchery.min.css');
  app.import('vendor/assets/plugins/nvd3/nv.d3.min.css');
  app.import('vendor/assets/plugins/mapplic/css/mapplic.css');
  app.import('vendor/assets/plugins/rickshaw/rickshaw.min.css');
  app.import('vendor/assets/plugins/bootstrap-datepicker/css/datepicker3.css');
  app.import('vendor/assets/plugins/jquery-metrojs/MetroJs.css');

  // Pages
  app.import('vendor/pages/css/pages-icons.css');
  app.import('vendor/pages/css/pages.css');



  /**
   * JS
   */
  // Pages Plugins
  app.import('vendor/assets/plugins/pace/pace.min.js');
  app.import('vendor/assets/plugins/jquery/jquery-1.11.1.min.js');
  app.import('vendor/assets/plugins/modernizr.custom.js');
  app.import('vendor/assets/plugins/jquery-ui/jquery-ui.min.js');
  app.import('vendor/assets/plugins/boostrapv3/js/bootstrap.min.js');
  app.import('vendor/assets/plugins/jquery/jquery-easy.js');
  app.import('vendor/assets/plugins/jquery-unveil/jquery.unveil.min.js');
  app.import('vendor/assets/plugins/jquery-bez/jquery.bez.min.js');
  app.import('vendor/assets/plugins/jquery-ios-list/jquery.ioslist.min.js');
  app.import('vendor/assets/plugins/jquery-actual/jquery.actual.min.js');
  app.import('vendor/assets/plugins/jquery-scrollbar/jquery.scrollbar.min.js');
  app.import('vendor/assets/plugins/bootstrap-select2/select2.min.js');
  app.import('vendor/assets/plugins/classie/classie.js');
  app.import('vendor/assets/plugins/switchery/js/switchery.min.js');
  app.import('vendor/assets/plugins/nvd3/lib/d3.v3.js');
  app.import('vendor/assets/plugins/nvd3/nv.d3.min.js');
  app.import('vendor/assets/plugins/nvd3/src/utils.js');
  app.import('vendor/assets/plugins/nvd3/src/tooltip.js');
  app.import('vendor/assets/plugins/nvd3/src/interactiveLayer.js');
  app.import('vendor/assets/plugins/nvd3/src/models/axis.js');
  app.import('vendor/assets/plugins/nvd3/src/models/line.js');
  app.import('vendor/assets/plugins/nvd3/src/models/lineWithFocusChart.js');
  app.import('vendor/assets/plugins/mapplic/js/hammer.js');
  app.import('vendor/assets/plugins/mapplic/js/jquery.mousewheel.js');
  app.import('vendor/assets/plugins/mapplic/js/mapplic.js');
  app.import('vendor/assets/plugins/rickshaw/rickshaw.min.js');
  app.import('vendor/assets/plugins/jquery-metrojs/MetroJs.min.js');
  app.import('vendor/assets/plugins/jquery-sparkline/jquery.sparkline.min.js');
  app.import('vendor/assets/plugins/skycons/skycons.js');
  app.import('vendor/assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.js');

  // Plugins
  // app.import('bower_components/holderjs/holder.js');

  // Pages
  app.import('vendor/pages/js/pages.js');



  /**
   * Assets
   */
  var assets = [
    new Funnel('vendor/assets/plugins/font-awesome', {
      srcDir:  '/fonts', destDir: '/fonts', include: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff', '**/*.woff2']
    }),
    // new Funnel('vendor/assets/plugins/boostrapv3', {
    //   srcDir:  '/fonts', destDir: '/assets/fonts', include: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff']
    // }),
    new Funnel('vendor/pages/fonts', {
      srcDir:  '/pages-icon', destDir: '/fonts/pages-icon', include: ['**/*.eot','**/*.svg','**/*.ttf','**/*.woff']
    }),
    // new Funnel('vendor/pages/fonts', {
    //   srcDir:  '/montserrat', destDir: '/fonts/montserrat', include: ['**/*.svg','**/*.ttf']
    // }),
    // new Funnel('vendor/assets/plugins/mapplic', {
    //   srcDir:  '/css/images', destDir: '/assets/images', include: ['**/*.cur','**/*.png','**/*.gif']
    // }),
    // new Funnel('vendor/assets/plugins/jquery-metrojs', {
    //   srcDir:  '/images', destDir: '/assets/images', include: ['**/*.jpg','**/*.gif']
    // }),
    // new Funnel('vendor/assets/plugins/jquery-ui', {
    //   srcDir:  '/images', destDir: '/assets/images', include: ['**/*.png','**/*.gif']
    // }),
    // new Funnel('vendor/assets/plugins/bootstrap-select2', {
    //   srcDir:  '/', destDir: '/assets', include: ['*.png','*.gif']
    // }),
    new Funnel('vendor/pages', {
      srcDir:  '/img', destDir: '/img', include: ['**/*.svg','**/*.png','**/*.jpg','**/*.gif']
    })
  ];




  /** Export */
  return app.toTree(assets);
};
