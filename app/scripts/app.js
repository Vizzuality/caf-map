//This is my mediator
define([
  'jquery', 
  'backbone'
], function($, Backbone) {
  
  'use strict';

  var AppView = Backbone.View.extend({

    initialize: function() {
      console.log('hello from app.js')
    }

  });

  return AppView;
});
