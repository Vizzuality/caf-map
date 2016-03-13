define([
  'jquery', 
  'backbone',
  '../templates/filtersTpl.handlebars'
], function($, Backbone, tpl) {
  
  'use strict';

  var StateModel = Backbone.Model.extend({});

  var DashboardFilterView = Backbone.View.extend({

    el: '#dashBoardFilters',

    events: {
      'change select' : '_setData'
    },

    initialize: function() {
      this.state = new StateModel();
      this.render();
    },

    render: function() {
      this.$el.html(tpl);
    },

    _setData: function(e) {
      var latLong = $(e.currentTarget).val();
      this.state.set('location', latLong);
    }

  });

  return DashboardFilterView;
});