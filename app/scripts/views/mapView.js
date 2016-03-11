define([
  'jquery', 
  'backbone'
], function($, Backbone) {
  
  'use strict';

  var MapView = Backbone.View.extend({

    initialize: function() {
      console.log('hello from map view')
    }

  });

  return MapView;
});
