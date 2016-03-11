//This is my mediator
define([
  'jquery', 
  'backbone',
  './routers/router',
  './views/mapView'
], function($, Backbone, Router, MapView) {
  
  'use strict';

  var AppView = Backbone.View.extend({

    initialize: function() {
      this.router = new Router();

      this._setRouterListeners();
      this._setMapListeners();
      this._setDashboardListeners();
    },

    _setRouterListeners: function() {
      this.listenTo(this.router.state, "change:init", this._init);
    },

    _setMapListeners: function() {

    },

    _setDashboardListeners: function() {

    },

    _init: function() {
      this.map = new MapView();
    }
  });

  return AppView;
});

