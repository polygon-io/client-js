import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/stocks/get_v3_reference_conditions
rest.reference.conditions({ asset_class: "stocks", limit: 1000 }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
