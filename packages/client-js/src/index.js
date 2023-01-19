import restClient from './rest';
import websocketClient from './websockets';
export * from './rest';
export * from './websockets';
export const polygonClient = (apiKey, restApiBase, websocketApiBase) => ({
    rest: restClient(apiKey, restApiBase),
    websockets: websocketClient(apiKey, websocketApiBase)
});
export default polygonClient;
