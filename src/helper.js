var path = require("path");

module.exports = {
        // For Cozy
        HOME: '/usr/local/cozy/apps/shout/.shout',
	//HOME: (process.env.HOME || process.env.USERPROFILE) + "/.shout",
	getConfig: getConfig
};

function getConfig() {
	return require(path.resolve(this.HOME) + "/config");
};
