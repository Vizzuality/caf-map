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
      style: 'mapbox://styles/dhakelila/cillcfizt007fbilxgw2ygr05',
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
      this.listenTo(this.state, 'change:location', this._moveMap);
    },

    _createMap: function() {
      mapboxgl.accessToken = 'pk.eyJ1IjoiZGhha2VsaWxhIiwiYSI6InRkODNmdzAifQ.1aPjRitXRLOeocZSZ5jqAw';
      this.map = new mapboxgl.Map( this.options );

      // Add zoom and rotation controls to the map.
      this.map.addControl(new mapboxgl.Navigation());

      this._addData();
    },

    _addData: function() {
      this.map.on('style.load', _.bind(function () {
      
                // add geojson data as a new source
                this.map.addSource("symbols", {
                    "type": "geojson",
                    "data": {
                        "type": "FeatureCollection",
                        "features": [
                            {
                                "type": "Feature",
                                "properties": {},
                                "geometry": {
                                    "type": "Point",
                                    "coordinates": [-3.7, 40.41]
                                }
                            }
                        ]
                    }
                });
      
                // add source as a layer and apply some styles
                this.map.addLayer({
                    "id": "symbols",
                    "interactive": true,
                    "type": "symbol",
                    "source": "symbols",
                    "layout": {
                        "icon-image": "marker-15"
                    },
                    "paint": {}
                });
            }, this));
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
