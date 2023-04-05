import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v2_aggs_ticker__optionsticker__prev
	rest.options.previousClose("O:SPY251219C00650000").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});