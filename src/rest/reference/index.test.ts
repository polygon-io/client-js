import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

import { tickers, tickerTypes } from ".";

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
});
