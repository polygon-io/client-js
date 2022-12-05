# [polygon.io](https://polygon.io)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Install

```bash
npm install --save @polygon.io/client-js
```

## usage

### Authentication

- call the desired client with your api key to initialize it

```typescript
import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
const rest = restClient("API KEY");

// you can use the api now

rest.forex
  .previousClose("C:EURUSD")
  .then(/* your success handler */)
  .catch(/* your error handler*/);
```

### [REST API](https://polygon.io/docs/stocks/getting-started)

- import all the rest submodule

```typescript
import { restClient } from "@polygon.io/client-js";

const rest = restClient("api key");

rest.forex.previousClose("C:EURUSD").then(/* your success handler */);
```

- import a specific submodule

```typescript
import { referenceClient } from "@polygon.io/client-js";

const reference = referenceClient("api key");

reference.tickers().then(/* your success handler */);
```

### [Launchpad REST API](https://polygon.io/docs/stocks/launchpad/getting-started)

- import all the rest submodule or a specific submodule

```typescript
// The entire rest submodule
import { restClient } from "@polygon.io/client-js";
// A specific submodule, in this instance the reference client
import { referenceClient } from "@polygon.io/client-js";

// Headers required to use the Launchpad product.
const edgeHeaders = {
  // X-Polygon-Edge-ID is a required Launchpad header. It identifies the Edge User requesting data.
  'X-Polygon-Edge-ID': sampleEdgeID,
  // X-Polygon-Edge-IP-Address is a required Launchpad header. It denotes the originating IP Address of the Edge User requesting data.
  'X-Polygon-Edge-IP-Address': 192.0.2.1,
  // X-Polygon-Edge-User-Agent is an optional Launchpad header. It denotes the originating UserAgent of the Edge User requesting data.
  'X-Polygon-Edge-User-Agent': useragent
}

const rest = restClient("api key", _, edgeHeaders);
rest.forex.previousClose("C:EURUSD").then(/* your success handler */);

const reference = referenceClient("api key", _, edgeHeaders);
reference.tickers().then(/* your success handler */);
```

### [Websocket](https://polygon.io/docs/stocks/ws_getting-started)

You can get preauthenticated [websocket clients](https://www.npmjs.com/package/websocket) for the 3 topics.

```typescript
import { websocketClient } from "@polygon.io/client-js";

const stocksWS = websocketClient("api key").stocks();

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

### documentation

- Generate the package documentation

```bash
npm run generate-doc
```
