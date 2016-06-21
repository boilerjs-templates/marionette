module.exports = {
	'*page404'  : [require('controllers/application').page404, '{{appName}} - 404'],
	''          : [require('controllers/application').home, '{{appName}} - Home']
};