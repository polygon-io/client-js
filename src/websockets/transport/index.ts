import * as WebSocket from "ws";

export const getWsClient = (url: string, apiKey: string): WebSocket => {
  if (!apiKey) {
    throw new Error("api key not provided.");
  }
  const ws = new WebSocket(url);
  ws.on("open", () => {
    ws.send(JSON.stringify({ action: "auth", params: apiKey }));
  });

  return ws;
};
