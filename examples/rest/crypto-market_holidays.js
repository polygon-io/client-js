import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/crypto/get_v1_marketstatus_upcoming
rest.reference.marketHolidays().then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
