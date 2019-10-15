import * as sinon from "sinon";
import * as chai from "chai";

import * as request from "../transport/request";

describe("[REST] Crypto", () => {
  chai.should();
  let requestStub;
  const sandbox = sinon.createSandbox();
  beforeEach(() => {
    requestStub = sandbox.stub(request, "get");
  });
  afterEach(() => {
    sandbox.restore();
  });
});
