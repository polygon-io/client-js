const { restClient } = require('@polygon.io/client-js');
const rest = restClient("API KEY", "https://api.polygon.io");

// https://polygon.io/docs/options/get_v1_open-close__optionsticker___date
rest.options.dailyOpenClose("O:SPY251219C00650000", "2023-03-31").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
