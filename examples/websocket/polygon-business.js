import { websocketClient } from "@polygon.io/client-js";

/* 
		This example uses polygon client-js library to connect to the polygon stocks for business 
		websocket to subscribe to the fair market value channel for the ticker AAPL.
*/

// create a websocket client using the polygon client-js library
const ws  = websocketClient('API KEY', 'wss://business.polygon.io').stocks();

// register a handler to log errors
ws.onerror = (err) => console.log('Failed to connect', err);

// register a handler to log info if websocket closes
ws.onclose = (code, reason) => console.log('Connection closed', code, reason);

// register a handler when messages are received
ws.onmessage = (msg) => {
	// parse the data from the message
	const parsedMessage = JSON.parse(msg.data);

	// wait until the message saying authentication was successful, then subscribe to a channel
	if (parsedMessage[0].ev === 'status' && parsedMessage[0].status === 'auth_success') {
		console.log('Subscribing to Fair Market Value channel for ticker AAPL');
		ws.send(JSON.stringify({"action":"subscribe", "params":"FMV.AAPL"}));
	}

	console.log('Message received:', parsedMessage);
}