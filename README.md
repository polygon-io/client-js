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
