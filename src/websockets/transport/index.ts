import * as WebSocket from "ws";
import { configs } from "../../config";
import EventEmitter = NodeJS.EventEmitter;

export const getWsClient = (url: string): WebSocket => {
  if (!configs.apiKey) {
    throw new Error(
      "api key not provided. set the POLYGON_APIKEY env variable or use the init function"
    );
  }
  const ws = new WebSocket(url);
  ws.on("open", () => {
    ws.send(JSON.stringify({ action: "auth", params: configs.apiKey }));
  });

  return ws;
};
