import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/options/get_v3_reference_exchanges
	rest.reference.exchanges({ asset_class: "options", limit: 1000 }).then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});