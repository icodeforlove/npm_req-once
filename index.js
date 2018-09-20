const debug = require('debug')('require-cache');
const cache = global.__REQUIRE_CACHE__ = (global.__REQUIRE_CACHE__ || {});

module.exports = path => {
	if (cache[path]) {
		debug(`loading ${path} from cache`);

		return cache[path];
	} else {
		debug(`loading ${path} from module system`);

		return cache[path] = require(path);
	}
};