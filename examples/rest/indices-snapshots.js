import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);

// https://polygon.io/docs/indices/get_v3_snapshot_indices
rest.indices.snapshotTicker({ "ticker.any_of": "I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
