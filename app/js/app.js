//This is my mediator
define([
  'jquery', 
  'backbone',
  './routers/router',
  './views/mapView',
  './views/dashboardFiltersView'
], function($, Backbone, Router, MapView, DashboardFilterView) {
  
  'use strict';

  var AppView = Backbone.View.extend({

    initialize: function() {
      this.router = new Router();
      this.map = new MapView();
      this.filters = new DashboardFilterView();

      this._setMapListeners();
      this._setRouterListeners();
      this._setDashboardListeners();

      this._initApp();
    },

    _initApp: function() {
      Backbone.history.start({ pushState: false });
    },

    _setRouterListeners: function() {
      
    },

    _setMapListeners: function() {
      this.listenTo(this.map.state, 'change', this._somethingNew);
    },

    _setDashboardListeners: function() {
      this.listenTo(this.filters.state, 'change:location', this._setLocation);
    },


    _setLocation: function() {
      var location = this.filters.state.get('location');
      this.map.state.set('location', location);
    },

    _somethingNew: function() {
      
    }
  });

  return AppView;
});

