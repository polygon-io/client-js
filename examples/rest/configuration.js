const { restClient } = require('@polygon.io/client-js');

// You can pass global options to fetch to add headers or configure requests
const globalFetchOptions = {
	method: 'HEAD'
}
const rest = restClient("API KEY", "https://api.polygon.io", globalFetchOptions);

// You can also pass options to each individual call, each key will override keys from the options also set globally

// The signal option configures a timeout of 8 seconds for this call.
// The method option overrides the one we set globally.
const controller = new AbortController();
const id = setTimeout(() => controller.abort(), 8000);
const overrideFetchOptions = {
	method: 'GET',
	signal: controller.signal
};
rest.forex.previousClose("C:EURUSD", {}, overrideFetchOptions).then((data) => {
	clearTimeout(id);
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e.message);
});