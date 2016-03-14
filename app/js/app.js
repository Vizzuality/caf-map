//This is my mediator
define([
  'jquery', 
  'backbone',
  './routers/router',
  './views/mapView',
  './views/dashboardFiltersView',
  './views/dashboardListView',
  './views/dashboardSortingView',
  './views/dashboardCounterView',
  './templates/mapAppTemplate.handlebars'
], function($, Backbone, Router, MapView, DashboardFilterView, DashboardListView, DashboardSortingView, DashboardCounterView,  template) {
  
  'use strict';

  var AppView = Backbone.View.extend({

    el: '#mapApp',

    initialize: function() {
      this.render();

      //Router
      this.router = new Router();
      
      //Map
      this.map = new MapView();
      
      //Dashboard
      this.dashboardFilters = new DashboardFilterView();
      this.dashboardList = new DashboardListView();
      this.dashboardSorting = new DashboardSortingView();
      this.dashboardCounter = new DashboardCounterView();

      this._setListeners();
    },

    _setListeners: function() {
      this._setMapListeners();
      this._setRouterListeners();
      this._setDashboardListeners();
    },

    render: function() {
      this.$el.html( template );

      this._initApp();
    },

    _initApp: function() {
      Backbone.history.start({ pushState: false });
    },

    _setRouterListeners: function() {
      this.listenTo(this.router.state, 'change:params', this._doSomething);
    },

    _setMapListeners: function() {
      this.listenTo(this.map.state, 'change', this._somethingNew);
    },

    _setDashboardListeners: function() {
      //Filters
      this.listenTo(this.dashboardFilters.state, 'change:location', this._setLocation);

      //List

      //Sorting

      //Counter
    },


    _setLocation: function() {
      var location = this.dashboardFilters.state.get('location');
      this.map.state.set('location', location);
    },

    _somethingNew: function() {
      
    },

    _doSomething: function() {

    }
  });

  return AppView;
});

