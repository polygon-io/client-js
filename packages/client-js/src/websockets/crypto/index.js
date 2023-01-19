import getWsClient from '../transport';
export const getCryptoWebsocket = (apiKey, apiBase = 'wss://socket.polygon.io') => getWsClient(`${apiBase}/crypto`, apiKey);
