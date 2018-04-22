const debug = require('debug')('wrapkend-cli:log');
const debugError = require('debug')('wrapkend-cli:error');
const debugInfo = require('debug')('wrapkend-cli:info');
const debugWarn = require('debug')('wrapkend-cli:warn');
const console = {
  log: debug,
  info:debugInfo,
  error: debugError,
  warn:debugWarn
};

module.exports = {
	console:console
};