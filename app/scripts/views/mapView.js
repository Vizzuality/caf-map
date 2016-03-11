define([
  'jquery', 
  'backbone'
], function($, Backbone, mapboxgl) {
  
  'use strict';

  var MapView = Backbone.View.extend({

    el: '#map',

    initialize: function() {
      this.createMap();
    },

    createMap: function() {

    }

  });

  return MapView;
});
