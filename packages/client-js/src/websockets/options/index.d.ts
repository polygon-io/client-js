import { w3cwebsocket as Websocket } from 'websocket';
export interface IAggregateOptionsEvent {
    ev: string;
    sym: string;
    v: number;
    av: number;
    op: number;
    vw: number;
    o: number;
    c: number;
    h: number;
    l: number;
    a: number;
    z: number;
    s: number;
    e: number;
}
export interface ITradeOptionsEvent {
    ev: string;
    sym: string;
    x: string;
    p: number;
    s: number;
    c: number[];
    t: number;
}
export declare const getOptionsWebsocket: (apiKey: string, apiBase?: string) => Websocket;
