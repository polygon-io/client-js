import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { cryptoClient } from "./index";

describe("[REST] Crypto", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  const crypto = cryptoClient("invalid");
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get").returns(Promise.resolve({}));
  });
  afterEach(() => {
    sandbox.restore();
  });

	it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await crypto.aggregates("BTC", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/BTC/range/1/day/2019-01-01/2019-02-01"
      );
  });

	it("aggregates grouped daily call /v2/aggs/grouped/locale/global/market/market/{date}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await crypto.aggregatesGroupedDaily("2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/grouped/locale/global/market/crypto/2019-02-01"
      );
  });

	it("daily open close call /v1/open-close/crypto/{from}/{to}/{date}", async () => {
    await crypto.dailyOpenClose("BTC", "USD", "2019-01-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/open-close/crypto/BTC/USD/2019-01-01");
  });
	
  it("previous close call /v2/aggs/ticker/{ticker}/prev", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await crypto.previousClose("BTC");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/BTC/prev");
  });

	it("historic trades call /v1/historic/crypto/{from}/{to}/{date}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        ticks: []
      })
    );
    await crypto.historicTrades("BTC", "USD", "2019-01-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/historic/crypto/BTC/USD/2019-01-01");
  });

	it("last trade call /v1/last/crypto/{from}/{to}", async () => {
    await crypto.lastTrade("BTC", "ETH");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/last/crypto/BTC/ETH");
  });

  it("snapshot - all tickers call /v2/snapshot/locale/global/markets/crypto/tickers", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        tickers: []
      })
    );
    await crypto.snapshotAllTickers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/crypto/tickers");
  });

	it("snapshot - gainers / losers call /v2/snapshot/locale/global/markets/crypto/{direction}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        tickers: []
      })
    );
    await crypto.snapshotGainersLosers("gainers");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/crypto/gainers");
  });

  it("snapshot - ticker call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        status: "",
        ticker: {
          day: {},
          lastTrade: {},
          min: {},
          prevDay: {}
        }
      })
    );
    await crypto.snapshotTicker("X:BTCUSD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/snapshot/locale/global/markets/crypto/tickers/X:BTCUSD"
      );
  });

  it("snapshot - full book l2 call /v2/snapshot/locale/global/markets/crypto/tickers/{ticker}/book", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        data: {}
      })
    );
    await crypto.snapshotTickerFullBookL2("BTCUSD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/snapshot/locale/global/markets/crypto/tickers/BTCUSD/book"
      );
  });
});
