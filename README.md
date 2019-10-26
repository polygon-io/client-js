# [polygon.io](https://polygon.io)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/bassochette/polygon.io.svg?style=svg)](https://circleci.com/gh/bassochette/polygon.io)

## Install

```bash
npm install --save polygon.io
```

## usage

### Authentication

- call the desired client with your api key to initialize it

```typescript
import { polygonClient, restClient, websocketClient } from "polygon.io";
const rest = restClient("API KEY");

// you can use the api now

rest.forex
  .previousClose()
  .then(/* your success handler */)
  .catch(/* your error handler*/);
```

### [REST API](https://polygon.io/docs/#getting-started)

- import all the rest submodule

```typescript
import { restClient } from "polygon.io";

const rest = restClient("api key");

rest.forex.previousClose().then(/* your success handler */);
```

- import a specific submodule

```typescript
import { referenceClient } from "polygon.io";

const reference = referenceClient("api key");

reference.tickers.then(/* your success handler */);
```

### [Websocket](https://polygon.io/sockets)

You can get preauthenticated [websocket clients](https://www.npmjs.com/package/ws) for the 3 topics.

```typescript
import { websocketClient } from "polygon.io";

const stocksWS = websocketClient("api key").getStocksWebsocket();

stocksWs.on("message", raw => {
  const message = JSON.parse(raw);
  switch (message.ev) {
    case "T":
      // your trade message handler
      break;
  }
});

stocksWS.send({ action: "subscribe", params: "T.MSFT" });
```

### [documentation](https://bassochette.github.io/polygon.io/index.html)

- Generate the package documentation

```bash
npm run generate-documentation
```
