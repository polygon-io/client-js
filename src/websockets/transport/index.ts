import websocket from "websocket";

export const getWsClient = (url: string, apiKey: string): websocket.w3cwebsocket => {
  if (!apiKey) {
    throw new Error("api key not provided.");
  }
  const ws = new websocket.w3cwebsocket(url);

  ws.onopen = () => {
    ws.send(JSON.stringify({ action: "auth", params: apiKey }));
  };

  return ws;
};
