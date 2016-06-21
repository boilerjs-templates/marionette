var Marionette = require('backbone.marionette');

module.exports = Marionette.ItemView.extend({
	template: require('templates/error.tpl'),

	events: {
		'click .btn-close': 'destroy'
	}
});