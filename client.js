const console = require('./console').console;
const axios = require('axios');

const instance = axios.create({
	baseURL: 'https://api.errortracky.com/' //https://api.wrapkend.com/'
});

module.exports = function client(API_KEY, options = {}) {

	var getHeaders = () => {
		if (typeof window !== 'undefined') {
			return {
				'Authorization': 'Bearer ' + localStorage.getItem('token')
			};
		} else {
			return {};
		}
	}

	if (options.headers && typeof options.headers === 'function') {
		getHeaders = options.headers;
	}

	return function(name, data) {
		return call(name, data);
	}

	function call(name, data) {
		return new Promise((resolve, reject) => {
			const URL = 'client/' + API_KEY
			data = data || {};
			try {
				var headers = getHeaders()
				instance.post(URL, {
					n: name,
					d: data
				}, {
					headers: headers
				}).then(res => {
					if (res.data) {
						let resData = res.data;
						if (resData.err) {
							return reject(new Error(resData.err));
						} else {
							console.log('CALL', name, JSON.stringify(data), 'THEN', resData.data)
							return resolve(resData.data);
						}
					}
				}).catch(onError);

			} catch (err) {
				onError(err);
			}

			function onError(err) {
				if (err.response && err.response.data && err.response.data.err) {
					err = err.response.data.err;
					let msg = err;
					try {
						let json = JSON.parse(msg);
						console.warn(json);
						if (json.message) {
							msg = json.message;
						}
					} catch (err) {}
					console.log('CALL', name, JSON.stringify(data), 'CATCH', msg)
					reject(new Error(msg))
				} else {
					reject(err)
				}
			}
		})
	}
}