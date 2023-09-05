# Polygon JS Client

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

Welcome to the official JS client library for the [Polygon](https://polygon.io/) REST and WebSocket API. To get started, please see the [Getting Started](https://polygon.io/docs/stocks/getting-started) section in our documentation, view the [examples](./examples/) directory for code snippets, or the [blog post](https://polygon.io/blog/javascript-stock-market-data/) with video tutorials to learn more. To generate the package documentation please run `npm run generate-doc`.

For upgrade instructions please see the [Release Notes](./CHANGELOG.md).

## Getting the client

To get started, you'll need to install the client library:

```bash
npm install --save @polygon.io/client-js
```

Next, create a new client with your [API key](https://polygon.io/dashboard/signup).

```javascript
import { restClient } from '@polygon.io/client-js';
const rest = restClient(process.env.POLY_API_KEY);
```

## Using the client

After creating the client, making calls to the Polygon API is easy. For example, here's how to get aggregates (bars):

```javascript
rest.stocks.aggregates("AAPL", 1, "day", "2023-01-01", "2023-04-14").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
```

Or, maybe you want to get the last trades or quotes for a ticker:

```javascript
// last trade
rest.stocks.lastTrade("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});

// last quote (NBBO)
rest.stocks.lastQuote("AAPL").then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
```

Finally, maybe you want a market-wide snapshot of all tickers:

```javascript
rest.stocks.snapshotAllTickers().then((data) => {
	console.log(data);
}).catch(e => {
	console.error('An error happened:', e);
});
```

See [full examples](./examples/rest/) for more details on how to use this client effectively. 
To run these examples from the command line, first check out this project and run ```npm i``` in the root directory to install dependencies, then run ```POLY_API_KEY=yourAPIKey node examples/rest/crypto-aggregates_bars.js```, replacing yourAPIKey with your Polygon API Key. 

## Pagination

The client can handle pagination for you through the `globalFetchOptions` by turning on the `pagination: true` option. The feature will automatically fetch all `next_url` pages of data when the API response indicates more data is available.

```javascript
import('@polygon.io/client-js').then(({ restClient }) => {
	const globalFetchOptions = {
		pagination: true,
	};
	const rest = restClient("XXXX", "https://api.polygon.io", globalFetchOptions);
	rest.stocks.aggregates("TSLA", 1, "minute", "2022-01-01", "2023-08-31", { limit: 50000 }).then((data) => {
	    const resultCount = data.length;
	    console.log("Result count:", resultCount);
	}).catch(e => {
		console.error('An error happened:', e);
	});
});
```

If there is a `next_url` field in the API response, the client will recursively fetch the next page for you, and then pass along the accumulated data.

## Debugging

Sometimes you may find it useful to see the actual request and response details while working with the API. The client allows for this through the `globalFetchOptions` by turning on the `trace: true` option.

### How to Enable Debug Mode

You can activate the debug mode as follows:

```javascript
import('@polygon.io/client-js').then(({ restClient }) => {
	const globalFetchOptions = {
		trace: true,
	};
	const rest = restClient("XXXX", "https://api.polygon.io", globalFetchOptions);
	rest.stocks.aggregates("TSLA", 1, "minute", "2023-08-01", "2023-08-01", { limit: 50000 }).then((data) => {
	    const resultCount = data.length;
	    console.log("Result count:", resultCount);
	}).catch(e => {
		console.error('An error happened:', e);
	});
});
```

### What Does Debug Mode Do?

When debug mode is enabled, the client will print out useful debugging information for each API request. This includes: the request URL, the headers sent in the request, and the headers received in the response.

### Example Output

For instance, if you made a request for `TSLA` data for the date `2023-08-01`, you would see debug output similar to the following:

```
Request URL:  https://api.polygon.io/v2/aggs/ticker/TSLA/range/1/minute/2023-08-01/2023-08-01?limit=50000
Request Headers:  { Authorization: 'Bearer REDACTED' }
Response Headers:  Headers {
  [Symbol(map)]: [Object: null prototype] {
    server: [ 'nginx/1.19.2' ],
    date: [ 'Thu, 06 Jul 2023 18:34:27 GMT' ],
    'content-type': [ 'application/json' ],
    'transfer-encoding': [ 'chunked' ],
    connection: [ 'close' ],
    'content-encoding': [ 'gzip' ],
    vary: [ 'Accept-Encoding' ],
    'x-request-id': [ '06dc97920681d8335c0451894aa1f79f' ],
    'strict-transport-security': [ 'max-age=15724800; includeSubDomains' ]
  }
}
```

This can be an invaluable tool for debugging issues or understanding how the client interacts with the API.

## Launchpad Usage

Users of the Launchpad product will need to pass in certain headers in order to make API requests. Example can be found [here](./examples/rest/launchpad/README.md).

## WebSocket Client

Import the [Websocket](https://polygon.io/docs/stocks/ws_getting-started) client and models packages to get started. You can get preauthenticated [websocket clients](https://www.npmjs.com/package/websocket) for the 3 topics.

```javascript
import { websocketClient } from "@polygon.io/client-js";
const stocksWS = websocketClient(process.env.POLY_API_KEY).stocks();

stocksWS.onmessage = ({data}) => {
  const [message] = JSON.parse(data);

  stocksWS.send('{"action":"subscribe", "params":"AM.MSFT,A.MSFT"}');

  switch (message.ev) {
    case "AM":
      // your trade message handler
      break;
    case "A":
      // your trade message handler
      break;
  }
};

stocksWS.send({ action: "subscribe", params: "T.MSFT" });
```
See [full examples](./examples/websocket/) for more details on how to use this client effectively.

## Contributing

If you found a bug or have an idea for a new feature, please first discuss it with us by [submitting a new issue](https://github.com/polygon-io/client-js/issues/new/choose). We will respond to issues within at most 3 weeks. We're also open to volunteers if you want to submit a PR for any open issues but please discuss it with us beforehand. PRs that aren't linked to an existing issue or discussed with us ahead of time will generally be declined. If you have more general feedback or want to discuss using this client with other users, feel free to reach out on our [Slack channel](https://polygon-io.slack.com/archives/C03FCSBSAFL).
