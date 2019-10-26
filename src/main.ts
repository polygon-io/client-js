export * from "./rest";
export * from "./websockets";

import restClient from "./rest";
import websocketClient from "./websockets";

export const polygonClient = (apiKey: string) => ({
  rest: restClient(apiKey),
  websockers: websocketClient(apiKey)
});

export default polygonClient;
