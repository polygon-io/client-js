# [polygon.io](https://polygon.io)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Upgrading to Version 7

See the [Release Notes](./CHANGELOG.md) for instructions on upgrading to Version 7.

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

- import the rest submodule

```typescript
import { restClient } from "@polygon.io/client-js";

const rest = restClient("API KEY");

rest.forex.previousClose("C:EURUSD").then(/* your success handler */);
```

- import a specific submodule

```typescript
import { referenceClient } from "@polygon.io/client-js";

const reference = referenceClient("API KEY");

reference.tickers().then(/* your success handler */);
reference.conditions({ asset_class: 'stocks', data_type: 'trades', sort: 'id' }).then(/* your success handler */)
```


#### [For Launchpad Examples and Usage, see Polygon Launchpad Examples](examples/rest/launchpad/README.md)

### [Websocket](https://polygon.io/docs/stocks/ws_getting-started)

You can get preauthenticated [websocket clients](https://www.npmjs.com/package/websocket) for the 3 topics.

```typescript
import { websocketClient } from "@polygon.io/client-js";

const stocksWS = websocketClient("API KEY").stocks();

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
