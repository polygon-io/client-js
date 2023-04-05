import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/indices/get_v3_snapshot_indices
	rest.indices.snapshotTicker({ "ticker.any_of": "I:SPX" }).then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
