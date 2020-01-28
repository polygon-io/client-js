import { w3cwebsocket as Websocket } from "websocket";

export const getWsClient = (url: string, apiKey: string): Websocket => {
  if (!apiKey) {
    throw new Error("api key not provided.");
  }

  const ws = new Websocket(url);

  ws.onopen = () => {
    ws.send(JSON.stringify({ action: "auth", params: apiKey }));
  };

  return ws;
};
