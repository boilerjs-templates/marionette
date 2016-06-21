var Handlebars = require('handlebars/runtime');

Handlebars.registerHelper('config', function(value) {
	if(value === 'ENV') {
		return new Handlebars.SafeString('<span style="color:tomato;">' + Config[value] + '</span>');
	} else {
		return Config[value];
	}
});