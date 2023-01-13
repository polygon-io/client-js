import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { stocksClient } from "./index";

describe("[REST] Stocks", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  const stocks = stocksClient("invalid");
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
    await stocks.aggregates("AAPL", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/AAPL/range/1/day/2019-01-01/2019-02-01"
      );
  });

  it("aggregatesGroupedDaily call /v2/aggs/grouped/locale/us/market/stocks/{date}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: [],
      })
    );
    await stocks.aggregatesGroupedDaily("2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/grouped/locale/us/market/stocks/2019-02-01"
      );
  });

  it("dailyOpenClose call /v1/open-close/{symbol}/{date}", async () => {
    await stocks.dailyOpenClose("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/open-close/AAPL/2018-2-2");
  });

  it("last quote call /v2/last/nbbo/{stocksTicker}", async () => {
    await stocks.lastQuote("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/last/nbbo/AAPL");
  });

  it("last trade call /v2/last/trade/{stocksTicker}", async () => {
    await stocks.lastTrade("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/last/trade/AAPL");
  });

  it("previous close call /v2/aggs/ticker/{stocksTicker}/prev", async () => {
    await stocks.previousClose("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/AAPL/prev");
  });

  it("quotes call /v3/quotes/{stockTicker}  ", async () => {
    await stocks.quotes("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/quotes/AAPL");
  });

  it("snapshot - all tickers call /v2/snapshot/locale/us/markets/stocks/tickers", async () => {
    await stocks.snapshotAllTickers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/us/markets/stocks/tickers");
  });

  it("snapshot - gainers / losers call /v2/snapshot/locale/us/markets/stocks/{direction}", async () => {
    await stocks.snapshotGainersLosers("gainers");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/us/markets/stocks/gainers");
  });

  it("snapshot ticker call /v2/snapshot/locale/us/markets/stocks/tickers/{ticker}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        ticker: {
          day: {},
          lastTrade: {},
          lastQuote: {},
          min: {},
          prevDay: {},
        },
      })
    );
    await stocks.snapshotTicker("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/us/markets/stocks/tickers/AAPL");
  });

  it("sma call /v1/indicators/sma/{stockTicker}", async () => {
    await stocks.sma("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/sma/AAPL");
  });

  it("ema call /v1/indicators/ema/{stockTicker}", async () => {
    await stocks.ema("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/ema/AAPL");
  });

  it("macd call /v1/indicators/macd/{stockTicker}", async () => {
    await stocks.macd("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/macd/AAPL");
  });

  it("rsi call /v1/indicators/rsi/{stockTicker}", async () => {
    await stocks.rsi("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/indicators/rsi/AAPL");
  });

  it("trades call /v3/trades/{stockTicker}", async () => {
    await stocks.trades("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/trades/AAPL");
  });
});
