import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

import { referenceClient } from "./index";

describe("[REST] Reference", () => {
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

  it("conditions call /v3/reference/conditions", async () => {
    await ref.conditions();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/reference/conditions");
  });

  it("exchanges call /v3/reference/exchanges", async () => {
    await ref.exchanges();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/reference/exchanges");
  });

  it("market holidays call /v1/marketstatus/upcoming", async () => {
    await ref.marketHolidays();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/marketstatus/upcoming");
  });

  it("market status call /v1/marketstatus/now", async () => {
    await ref.marketStatus();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/marketstatus/now");
  });

  it("options contract call /v3/reference/options/contracts/{options_ticker}", async () => {
    await ref.optionsContract("O:EVRI240119C00002500");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/reference/options/contracts/O:EVRI240119C00002500");
  });

  it("options contracts call /v3/reference/options/contracts", async () => {
    await ref.optionsContracts();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/reference/options/contracts");
  });

  it("stock dividends call /v3/reference/dividends", async () => {
    await ref.dividends();
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/reference/dividends");
  });

  it("stock splits call /v3/reference/splits", async () => {
    await ref.stockSplits();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/reference/splits");
  });

  it("ticker details call /v3/reference/tickers/{ticker}", async () => {
    await ref.tickerDetails("AAPL");
    requestStub.callCount.should.eql(1);
    requestStub
      .getCalls()[0]
      .args[0].should.eql("/v3/reference/tickers/AAPL");
  });

  it("ticker news call /v2/reference/news", async () => {
    await ref.tickerNews();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v2/reference/news");
  });

  it("tickers call /v2/reference/tickers", async () => {
    await ref.tickers();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/reference/tickers");
  });

  it("ticker types call /v3/reference/tickers/types", async () => {
    await ref.tickerTypes();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v3/reference/tickers/types");
  });
});
