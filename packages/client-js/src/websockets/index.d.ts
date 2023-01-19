export * from './forex';
export * from './stocks';
export * from './crypto';
export interface IWebsocketClient {
    crypto: () => WebSocket;
    forex: () => WebSocket;
    options: () => WebSocket;
    stocks: () => WebSocket;
}
declare const websocketClient: (apiKey: string, apiBase?: string) => IWebsocketClient;
export default websocketClient;
