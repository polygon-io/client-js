//const { restClient } = require('@polygon.io/client-js');
import { restClient } from '@polygon.io/client-js';

const rest = restClient("RBJ0Ht1tFlIvWS8whTB6R6CAEl0bY5fT", "https://api.polygon.io");

// https://polygon.io/docs/indices/get_v3_snapshot_indices
rest.reference.universalSnapshot({ "ticker.any_of": "NCLH,O:SPY250321C00380000,C:EURUSD,X:BTCUSD,I:SPX" }).then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});