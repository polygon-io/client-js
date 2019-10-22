import * as sinon from "sinon";
import * as chai from "chai";
import * as request from "../transport/request";
import {
  forexAggregates,
  forexGroupedDaily,
  forexPreviousClose,
  forexSnapshotAllTickers,
  forexSnapshotGainersLosers,
  historicForexTicks,
  lastQuoteForCurrencyPair,
  realTimeCurrencyConversion
} from ".";

describe("[REST] Forex / Currencies", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get");
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("forexPreviousClose call /v2/aggs/ticker/{ticker}/prev", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await forexPreviousClose("EURCHF");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/aggs/ticker/EURCHF/prev");
  });

  it("forexAggregates call /v2/aggs/ticker/{ticker}/range/{multiplier}/{timespan}/{from}/{to}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await forexAggregates("EURCHF", 1, "day", "2019-01-01", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql(
        "/v2/aggs/ticker/EURCHF/range/1/day/2019-01-01/2019-02-01"
      );
  });

  it("forexGroupedDaily call /v2/aggs/grouped/locale/{locale}/market/{market}/{date}", async () => {
    requestStub.restore();
    requestStub = sandbox.stub(request, "get").returns(
      Promise.resolve({
        results: []
      })
    );
    await forexGroupedDaily("US", "FX", "2019-02-01");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/aggs/grouped/locale/US/market/FX/2019-02-01");
  });

  it("historicForexTick call /v1/historic/forex/{from}/{to}/{date}", async () => {
    await historicForexTicks("AUD", "USD", "2019-02-01", { limit: 100 });
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/historic/forex/AUD/USD/2019-02-01");
  });

  it("realTimeCurrencyConversion call /v1/conversion/{from}/{to}", async () => {
    await realTimeCurrencyConversion("AUD", "USD", {
      amount: 100,
      precision: 2
    });
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/conversion/AUD/USD");
  });

  it("lastQuoteForCurrencyPair call /v1/last_quote/currencies/{from}/{to}", async () => {
    await lastQuoteForCurrencyPair("USD", "AUD");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/last_quote/currencies/USD/AUD");
  });

  it("forexSnapshotAllTickers call /v2/snapshot/locale/global/markets/forex/tickers", async () => {
    await forexSnapshotAllTickers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/forex/tickers");
  });

  it("forexSnapshotGainersLosers call /v2/snapshot/locale/global/markets/forex/{direction}", async () => {
    await forexSnapshotGainersLosers();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/snapshot/locale/global/markets/forex/gainers");
  });
});
