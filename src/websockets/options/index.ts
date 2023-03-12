import { getWsClient } from "../transport/index.js";
import { WebSocket } from 'ws'

// Options Aggregate:
export interface IAggregateOptionsEvent {
  ev: string; // Event Type ( A = Second Agg, AM = Minute Agg )
  sym: string; // Symbol Ticker
  v: number; // Tick Volume
  av: number; // Accumulated Volume ( Today )
  op: number; // Todays official opening price
  vw: number; // VWAP (Volume Weighted Average Price)
  o: number; // Tick Open Price
  c: number; // Tick Close Price
  h: number; // Tick High Price
  l: number; // Tick Low Price
  a: number; // Tick Average / VWAP Price
  z: number; // Tick Average Trade Size
  s: number; // Tick Start Timestamp ( Unix MS )
  e: number; // Tick End Timestamp ( Unix MS )
}

export interface ITradeOptionsEvent {
  ev: string; // Event Type
  sym: string; // Symbol Ticker
  x: string; // Exchange ID
  p: number; // Price
  s: number; // Trade Size
  c: number[]; // Trade Conditions
  t: number; // Trade Timestamp ( Unix MS )
}

export const getOptionsWebsocket = (
  apiKey: string,
  apiBase = "wss://socket.polygon.io"
): WebSocket => getWsClient(`${apiBase}/options`, apiKey);
