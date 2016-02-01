var path = require("path");

module.exports = {
	//HOME: (process.env.HOME || process.env.USERPROFILE) + "/.shout",
	HOME: process.env.APPLICATION_PERSISTENT_DIRECTORY,
	getConfig: getConfig
};

function getConfig() {
	return require(path.resolve(this.HOME) + "/config");
};
