require('./styles.scss');

var $ = require('jquery');
var _ = require('underscore');
var backbone = require('backbone');

var app = require('./scripts/app');

$(function() {
  var App = new app();
});



