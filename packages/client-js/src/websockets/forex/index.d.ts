import { w3cwebsocket as Websocket } from 'websocket';
export interface IAggegateForexEvent {
    ev: string;
    pair: string;
    o: number;
    c: number;
    h: number;
    l: number;
    v: number;
    s: number;
    e: number;
}
export interface IQuoteForexEvent {
    ev: string;
    p: string;
    x: string;
    a: number;
    b: number;
    t: number;
}
export declare const getForexWebsocket: (apiKey: string, apiBase?: string) => Websocket;
