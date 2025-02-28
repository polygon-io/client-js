import * as websocket from "websocket";
import { getWsClient } from "../transport/index.js";

// Futures Trade Event
export interface IFuturesTradeEvent {
  ev: string; // e.g., "T"
  sym: string; // Symbol (e.g., "F:ESZ4")
  p: number; // Price
  s: number; // Size
  t: number; // Timestamp (Unix MS)
  c?: number[]; // Conditions
  x?: number; // Exchange ID
}

// Futures Quote Event
export interface IFuturesQuoteEvent {
  ev: string; // e.g., "Q"
  sym: string; // Symbol
  bp: number; // Bid Price
  bs: number; // Bid Size
  ap: number; // Ask Price
  as: number; // Ask Size
  t: number; // Timestamp (Unix MS)
  x?: number; // Exchange ID
}

// Futures Aggregate Event
export interface IFuturesAggregateEvent {
  ev: string; // e.g., "A" (second) or "AM" (minute)
  sym: string; // Symbol
  o: number; // Open Price
  c: number; // Close Price
  h: number; // High Price
  l: number; // Low Price
  v: number; // Volume
  s: number; // Start Timestamp (Unix MS)
  e: number; // End Timestamp (Unix MS)
}

export const getFuturesWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.polygon.io"
): websocket.w3cwebsocket => getWsClient(`${apiBase}/futures`, apiKey);

export default getFuturesWebsocket;
