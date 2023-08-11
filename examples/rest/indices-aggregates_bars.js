import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/indices/get_v2_aggs_ticker__indicesticker__range__multiplier___timespan___from___to
rest.indices.aggregates("I:SPX", 1, "day", "2023-03-10", "2023-03-10").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
