import { restClient } from "@polygon.io/client-js";
import { referenceClient } from "@polygon.io/client-js";

// Headers required to use the Launchpad product.
const edgeHeaders = {
  // X-Polygon-Edge-ID is a required Launchpad header. It identifies the Edge User requesting data.
  'X-Polygon-Edge-ID': 'sampleEdgeID',
  // X-Polygon-Edge-IP-Address is a required Launchpad header. It denotes the originating IP Address of the Edge User requesting data.
  'X-Polygon-Edge-IP-Address': '192.0.2.1',
  // X-Polygon-Edge-User-Agent is an optional Launchpad header. It denotes the originating UserAgent of the Edge User requesting data.
  'X-Polygon-Edge-User-Agent': 'useragent'
}

const rest = restClient("api key", "https://api.polygon.io", edgeHeaders);
rest.forex.previousClose("C:EURUSD").then(/* your success handler */);

const reference = referenceClient("api key", "https://api.polygon.io", edgeHeaders);
reference.tickers().then(/* your success handler */);