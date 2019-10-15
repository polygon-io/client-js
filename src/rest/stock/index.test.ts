import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";
import { exchanges } from ".";

describe("[REST] Stock / equities", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get");
  });
  afterEach(() => {
    sandbox.restore();
  });

  it("exchanges call /v1/meta/exchanges", async () => {
    await exchanges();
    requestStub.callCount.should.eql(1);
    requestStub.getCalls()[0].args[0].should.eql("/v1/meta/exchanges");
  });
});
