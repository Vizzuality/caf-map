require('./styles.scss');

var App = require('./js/app');

new App();

Backbone.history.start({ pushState: false });
