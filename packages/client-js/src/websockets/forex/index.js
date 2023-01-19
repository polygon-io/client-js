import getWsClient from '../transport';
export const getForexWebsocket = (apiKey, apiBase = 'wss://socket.polygon.io') => getWsClient(`${apiBase}/forex`, apiKey);
