// Forex QUOTE:
import { getWsClient } from "../transport";
import * as WebSocket from "ws";

export interface IQuoteForexEvent {
  ev: string; // Event Type
  p: string; // Currency Pair
  x: string; // FX Exchange ID
  a: number; // Ask Price
  b: number; // Bid Price
  t: number; // Quote Timestamp ( Unix MS )
}

// Forex Aggregate:
export interface IAggegateForexEvent {
  ev: string; // Event Type
  pair: string; // Currency Pair
  o: number; // Open Price
  c: number; // Close Price
  h: number; // High Price
  l: number; // Low Price
  v: number; // Volume ( Quotes during this duration )
  s: number; // Tick Start Timestamp
}

export const getForexWebsocket = (apiKey: string): WebSocket =>
  getWsClient("wss://socket.polygon.io/forex", apiKey);
