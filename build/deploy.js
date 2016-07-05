var path = require('path');

module.exports = function (fse, chalk, inquirer) {
	var APP_NAME = path.basename(path.resolve(__dirname, '../'));
	var DIST_FOLDER = path.resolve(__dirname, '../dist');
	var DESTINATION_ROOT = path.resolve(__dirname, '../temp');
	var DESTINATION_FOLDER = path.join(DESTINATION_ROOT, APP_NAME);

	fse.emptyDirSync(DESTINATION_FOLDER);
	fse.copySync(DIST_FOLDER, DESTINATION_FOLDER);

	console.log(chalk.green('?'), chalk.bold('Deploy:'), chalk.cyan('SUCCESS :)'));
};