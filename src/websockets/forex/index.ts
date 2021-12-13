import { getWsClient } from "../transport";
import { w3cwebsocket as Websocket } from "websocket";

// Forex Aggregate:
export interface IAggegateForexEvent {
  ev: string; // Event Type
  pair: string; // Currency Pair
  o: number; // Open Price
  c: number; // Close Price
  h: number; // High Price
  l: number; // Low Price
  v: number; // Volume ( Quotes during this duration )
  s: number; // Start time ( Unix MS )
  e: number; // End time ( Unix MS )
}

export interface IQuoteForexEvent {
  ev: string; // Event Type
  p: string; // Currency Pair
  x: string; // FX Exchange ID
  a: number; // Ask Price
  b: number; // Bid Price
  t: number; // Quote Timestamp ( Unix MS )
}

export const getForexWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.polygon.io"
): Websocket => getWsClient(`${apiBase}/forex`, apiKey);
