import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

import { referenceClient } from "./index";

describe("[REST] reference", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  const ref = referenceClient("invalid");
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get").returns(Promise.resolve({}));
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("tickers call /v2/reference/tickers", async () => {
    await ref.tickers();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/tickers");
  });

  it("tickerTypes call /v2/reference/types", async () => {
    await ref.tickerTypes();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/types");
  });

  it("tickerDetails call /v1/meta/symbols/{symbol}/company", async () => {
    await ref.tickerDetails("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/meta/symbols/AAPL/company");
  });

  it("tickerNews call /v1/meta/symbols/{symbol}/news", async () => {
    await ref.tickerNews("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/symbols/AAPL/news");
  });

  it("markets call /v2/reference/markets", async () => {
    await ref.markets();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/markets");
  });

  it("locales call /v2/reference/locales", async () => {
    await ref.locales();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/locales");
  });

  it("stockSplits call /v2/reference/splits/{symbol}", async () => {
    await ref.stockSplits("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/splits/AAPL");
  });

  it("stockDividends call /v2/reference/dividends/{symbol}", async () => {
    await ref.stockDividends("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/reference/dividends/AAPL");
  });

  it("stockFinancials call /v2/reference/financials/{symbol}", async () => {
    await ref.stockFinancials("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/reference/financials/AAPL");
  });

  it("marketStatus call /v1/marketstatus/now", async () => {
    await ref.marketStatus();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/marketstatus/now");
  });

  it("marketHolydays call /v1/marketstatus/upcoming", async () => {
    await ref.marketHolydays();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/marketstatus/upcoming");
  });
});
