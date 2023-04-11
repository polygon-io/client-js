const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/indices/get_v1_open-close__indicesticker___date
rest.indices.dailyOpenClose("I:SPX", "2023-03-31").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
