define([
  'jquery', 
  'underscore',
  'backbone',
  '../services/dashboardService',
  '../templates/dashboardListTpl.handlebars'
], function($, _, Backbone, DashboardService, tpl) {
  
  'use strict';

  var StateModel = Backbone.Model.extend({});

  var DashboardListView = Backbone.View.extend({

    el: '#dashboardList',

    events: {
    },

    initialize: function() {
      this.state = new StateModel();

      this.collection = new DashboardService();
      this.collection.fetch().done(_.bind(function() {
        this.render();
      }, this));

      this._setListeners();
    },

    _setListeners: function() {
      this.listenTo(this.state, 'change:filter', this._filterProjects);
    },

    render: function() {
      this.$el.html(tpl({ 'projects': this.collection.toJSON() }));
    },

    _filterProjects: function() {
      this.state.get('filter');
    }



  });

  return DashboardListView;
});
