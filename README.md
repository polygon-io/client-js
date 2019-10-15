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

### [Websocket](https://polygon.io/sockets)
