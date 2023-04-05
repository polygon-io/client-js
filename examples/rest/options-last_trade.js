import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v2_last_trade__optionsticker
	rest.options.lastTrade("O:TSLA210903C00700000").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});