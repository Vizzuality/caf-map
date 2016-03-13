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

      this._setRouterListeners();
    },

    _setRouterListeners: function() {
      this.listenTo(this.router.state, 'change:init', this._init);
    },

    _setMapListeners: function() {
      this.listenTo(this.map.state, 'change', this._somethingNew);
    },

    _setDashboardListeners: function() {
      this.listenTo(this.filters.state, 'change:location', this._setLocation);
    },

    _init: function() {
      this.map = new MapView();
      this.filters = new DashboardFilterView();

      this._setMapListeners();
      this._setDashboardListeners();
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

