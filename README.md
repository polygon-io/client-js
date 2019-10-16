# [polygon.io](https://polygon.io)

[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![CircleCI](https://circleci.com/gh/bassochette/polygon.io.svg?style=svg)](https://circleci.com/gh/bassochette/polygon.io)

## Install

```bash
npm install --save polygon.io
```

## usage

### Authentication

- setup you api key in the en variable `POLYGON_API_KEY` (dotenv supported)
- call the init method before using any client calls

```typescript
import { init } from "polygon.io";

init({
  apiKey: "your apiKey"
});

// you can use the api now
```

### [REST API](https://polygon.io/docs/#getting-started)

Their is three way to use the functions:

- import all the rest submodule

```typescript
import { rest } from "polygon.io";

rest.forex.forexPreviousClose().then(/* your success handler */);
```

- import a specific submodule

```typescript
import { reference } from "polygon.io";

reference.tickers.then(/* your success handler */);
```

- import single function

```typescript
import { init, exchanges } from "polygon.io";

init({ apiKey: "XXXX" });

exchanges().then(/* you success handler */);
```

### [Websocket](https://polygon.io/sockets)

You can get preauthenticated [websocket clients](https://www.npmjs.com/package/ws) for the 3 topics.

```typescript
import { init, websockets } from "polygon.io";

init({ apiKey: "XXXX" });

const stocksWS = websockets.getStocksWebsocket();

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
