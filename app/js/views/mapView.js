define([
  'jquery', 
  'backbone'
], function($, Backbone) {
  
  'use strict';

  var MapView = Backbone.View.extend({

    el: '#map',

    options: {
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [-74.50, 40],
      zoom: 9
    },

    initialize: function() {
      this.createMap();
    },

    createMap: function() {
      this.map = new mapboxgl.Map( this.options );
    }

  });

  return MapView;
});
