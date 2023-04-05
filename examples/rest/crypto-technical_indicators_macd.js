import('@polygon.io/client-js').then(({ restClient }) => {
  const rest = restClient('API KEY', 'https://api.polygon.io');

	// https://polygon.io/docs/crypto/get_v1_indicators_macd__cryptoticker
	rest.crypto.macd("X:BTCUSD").then((data) => {
		console.log(data);
	}).catch(e => {
		console.error('An error happened:', e);
	});

});