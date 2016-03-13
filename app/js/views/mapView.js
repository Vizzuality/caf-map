define([
  'jquery', 
  'backbone'
], function($, Backbone) {
  
  'use strict';

  var StateModel = Backbone.Model.extend({});

  var MapView = Backbone.View.extend({

    el: '#map',

    options: {
      container: 'map',
      style: 'mapbox://styles/dhakelila/cillcfizt007fbilxgw2ygr05',
      center: [-3.7, 40.41],
      zoom: 9
    },

    initialize: function() {
      this.state = new StateModel();
      this._createMap();

      this._setListeners();
    },

    _setListeners: function() {
      this.listenTo(this.state, 'change:location', this._moveMap);
    },

    _createMap: function() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGhha2VsaWxhIiwiYSI6InRkODNmdzAifQ.1aPjRitXRLOeocZSZ5jqAw';
      this.map = new mapboxgl.Map( this.options );
    },

    _moveMap: function() {
      var newCenter = this.state.get('location');
      var longitud = newCenter.split(',')[0];
      var latitud = newCenter.split(',')[1];

      this.map.flyTo({
        'center': [ longitud , latitud  ]
      });

    }

  });

  return MapView;
});
