require('./styles.scss');

var App = require('./scripts/app');

new App();

Backbone.history.start({ pushState: false });
