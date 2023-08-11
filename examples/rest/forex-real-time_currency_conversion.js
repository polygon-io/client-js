import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/forex/get_v1_conversion__from___to
rest.forex.conversion("AUD", "USD").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
