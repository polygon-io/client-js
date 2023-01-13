import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { optionsClient } from "./index";

describe("[REST] Options", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  const options = optionsClient("invalid");
  beforeEach(() => {
    requestStub = sandbox
      .stub(request, "get")
      .returns(Promise.resolve({ ticks: [], results: [], tickers: [] }));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("aggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: [],
      })
    );
    await options.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
      );
  });

  it("daily open close call /v1/open-close/{symbol}/{date}", async () => {
    await options.dailyOpenClose("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/open-close/AAPL/2018-2-2");
  });

  it("previous close call /v2/aggs/ticker/{optionsTicker}/prev", async () => {
    await options.previousClose("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/AAPL/prev");
  });

  it("trades call /v3/trades/{optionsTicker}", async () => {
    await options.trades("O:TSLA210903C00700000");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/trades/O:TSLA210903C00700000");
  });

  it("last trade call /v2/last/trade/{optionsTicker}", async () => {
    await options.lastTrade("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/last/trade/AAPL");
  });

  it("quotes call /v3/quotes/{optionsTicker}  ", async () => {
    await options.quotes("O:SPY241220P00720000");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/quotes/O:SPY241220P00720000");
  });

  it("snapshot - option contract call /v3/snapshot/options/{underlyingAsset}/{optionContract}", async () => {
    await options.snapshotOptionContract("AAPL", "O:AAPL230616C00150000");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/snapshot/options/AAPL/O:AAPL230616C00150000");
  });

  it("snapshots - option chain /v3/snapshot/options/{underlyingAsset}", async () => {
    await options.snapshotOptionChain("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/snapshot/options/AAPL");
  });

  it("sma call /v1/indicators/sma/{optionTicker}", async () => {
    await options.sma("O:AAPL230616C00150000");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/sma/O:AAPL230616C00150000");
  });

  it("ema call /v1/indicators/ema/{optionTicker}", async () => {
    await options.ema("O:AAPL230616C00150000");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/ema/O:AAPL230616C00150000");
  });

  it("macd call /v1/indicators/macd/{optionTicker}", async () => {
    await options.macd("O:AAPL230616C00150000");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/macd/O:AAPL230616C00150000");
  });

  it("rsi call /v1/indicators/rsi/{optionTicker}", async () => {
    await options.rsi("O:AAPL230616C00150000");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/rsi/O:AAPL230616C00150000");
  });
});
