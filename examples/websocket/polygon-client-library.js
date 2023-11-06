/* 
	This example uses polygon client-js library to connect to the  delayed stocks polygon 
	websocket to subscribe to minute ohlc values for the ticker AAPL.
*/

import { websocketClient } from "@polygon.io/client-js";

// create a websocket client using the polygon client-js library
const ws  = websocketClient('API KEY', 'wss://delayed.polygon.io').stocks(); // 15-min delay websocket
// const ws  = websocketClient('API KEY', 'wss://socket.polygon.io').stocks(); // real-time webscoket

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
		console.log('Subscribing to the minute aggregates channel for ticker AAPL');
		ws.send(JSON.stringify({"action":"subscribe", "params":"AM.AAPL"}));
	}

	console.log('Message received:', parsedMessage);
}
