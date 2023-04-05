import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/forex/get_v3_reference_conditions
	rest.reference.conditions({ asset_class: "fx", limit: 1000 }).then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});
