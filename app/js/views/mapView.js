define([
  'jquery', 
  'underscore',
  'backbone',
  '../services/mapService'
], function($, _, Backbone, MapService) {
  
  'use strict';

  var StateModel = Backbone.Model.extend({});

  var MapView = Backbone.View.extend({

    el: '#map',

    options: {
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v8',
      center: [-3.7, 40.41],
      zoom: 3
    },

    initialize: function() {
      this.state = new StateModel();
      this.collection = new MapService();
      this.collection.fetch().done(_.bind(function() {
        this._createMap();
      }, this));

      this._setListeners();
    },

    _setListeners: function() {
      this.listenTo(this.state, 'change:filter', this._filterCollection);
    },

    _createMap: function() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGhha2VsaWxhIiwiYSI6InRkODNmdzAifQ.1aPjRitXRLOeocZSZ5jqAw';

      this.map = new mapboxgl.Map( this.options );

      // Add zoom and rotation controls to the map.
      this.map.addControl(new mapboxgl.Navigation());

      this.map.on('style.load', _.bind(this._addMarkers, this));
    },

    _addMarkers: function() {
      this.markers = this.collection.getMarkers(this.filteredCollection);

      // Add marker data as a new GeoJSON source.
      this.map.addSource("markers", {
        "type": "geojson",
        "data": this.markers
      });

      // Add a layer showing the markers.
      this.map.addLayer({
        "id": "markers",
        "interactive": true,
        "type": "symbol",
        "source": "markers",
        "layout": {
          "icon-image": "marker-15",
          "icon-allow-overlap": true
        }
      });
    },

    _filterCollection: function() {
      var filter = this.state.get('filter');
      this.filteredCollection = this.collection.where(filter);
    }

  });

  return MapView;
});
