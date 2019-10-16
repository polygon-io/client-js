export { init, IPolygonConfig } from "./config";

export * from "./rest";
import * as REST from "./rest";
export const rest = REST;

export * from "./websockets";
import * as ws from "./websockets";
export const websockets = ws;
