import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { stocksClient } from "./index";

describe("[REST] Stock / equities", () => {
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

  it("exchanges call /v1/meta/exchanges", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(Promise.resolve([]));
    await stocks.exchanges();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/exchanges");
  });

  it("v1HistoricTrades call /v1/historic/trades/{symbol}/{date}", async () => {
    sandbox.restore();
    requestStub = sandbox
      .stub(request, "get")
      .returns(Promise.resolve({ ticks: [] }));
    await stocks.v1HistoricTrades("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/historic/trades/AAPL/2018-2-2");
  });

  it("v2HistoricTrades call /v2/ticks/stocks/trades/{ticker}/{date}", async () => {
    await stocks.v2HistoricTrades("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/ticks/stocks/trades/AAPL/2018-2-2");
  });

  it("v1HistoricQuotes call /v1/historic/quotes/{symbol}/{date}", async () => {
    sandbox.restore();
    requestStub = sandbox
      .stub(request, "get")
      .returns(Promise.resolve({ ticks: [] }));
    await stocks.v1HistoricQuotes("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/historic/quotes/AAPL/2018-2-2");
  });

  it("v2HistoricQuotes call /v2/ticks/stocks/nbbo/{ticker}/{date}", async () => {
    await stocks.v2HistoricQuotes("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/ticks/stocks/nbbo/AAPL/2018-2-2");
  });

  it("lastTradeForSymbol call /v1/last/stocks/{symbol}", async () => {
    await stocks.lastTradeForSymbol("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/last/stocks/AAPL");
  });

  it("lastQuoteForSymbol call /v1/last_quote/stocks/{symbol}", async () => {
    await stocks.lastQuoteForSymbol("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/last_quote/stocks/AAPL");
  });

  it("dailyOpenClose call /v1/open-close/{symbol}/{date}", async () => {
    await stocks.dailyOpenClose("AAPL", "2018-2-2");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/open-close/AAPL/2018-2-2");
  });

  it("conditionMappings call /v1/meta/conditions/{ticktype}", async () => {
    await stocks.conditionMappings();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/conditions/trades");
  });

  it("snapshotAllTickers call /v2/snapshot/locale/us/markets/stocks/tickers", async () => {
    await stocks.snapshotAllTickers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/us/markets/stocks/tickers");
  });

  it("snapshotSingleTicker call /v2/snapshot/locale/us/markets/stocks/tickers/{ticker}", async () => {
    sandbox.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        ticker: {
          day: {},
          lastTrade: {},
          lastQuote: {},
          min: {},
          prevDay: {}
        }
      })
    );
    await stocks.snapshotSingleTicker("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/us/markets/stocks/tickers/AAPL");
  });

  it("snapshotGainersLosers call /v2/snapshot/locale/us/markets/stocks/{direction}", async () => {
    await stocks.snapshotGainersLosers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/us/markets/stocks/gainers");
  });

  it("stocksPreviousClose call /v2/aggs/ticker/{ticker}/prev", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await stocks.previousClose("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/AAPL/prev");
  });

  it("stocksAggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
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

  it("stocksGroupedDaily call /v2/aggs/grouped/locale/{locale}/market/{market}/{date}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await stocks.groupedDaily("US", "STOCKS", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/grouped/locale/US/market/STOCKS/2019-02-01"
      );
  });
});
