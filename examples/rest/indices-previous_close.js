import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/indices/get_v2_aggs_ticker__indicesticker__prev
	rest.indices.previousClose("I:SPX").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});