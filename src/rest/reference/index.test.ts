import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

import {
  tickers,
  tickerTypes,
  tickerDetails,
  tickerNews,
  markets,
  locales,
  stockSplits,
  stockDividends,
  stockFinancials
} from ".";

describe("[REST] reference", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get");
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("tickers call /v2/reference/tickers", async () => {
    await tickers();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/tickers");
  });

  it("tickerTypes call /v2/reference/types", async () => {
    await tickerTypes();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/types");
  });

  it("tickerDetails call /v1/meta/symbols/{symbol}/company", async () => {
    await tickerDetails("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v1/meta/symbols/AAPL/company");
  });

  it("tickerNews call /v1/meta/symbols/{symbol}/news", async () => {
    await tickerNews("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/symbols/AAPL/news");
  });

  it("markets call /v2/reference/markets", async () => {
    await markets();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/markets");
  });

  it("locales call /v2/reference/locales", async () => {
    await locales();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/locales");
  });

  it("stockSplits call /v2/reference/splits/{symbol}", async () => {
    await stockSplits("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/splits/AAPL");
  });

  it("stockDividends call /v2/reference/dividends/{symbol}", async () => {
    await stockDividends("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/reference/dividends/AAPL");
  });

  it("stockFinancials call /v2/reference/financials/{symbol}", async () => {
    await stockFinancials("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v2/reference/financials/AAPL");
  });
});
