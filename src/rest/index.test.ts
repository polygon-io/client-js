import * as chai from "chai";
import { restClient } from "./index";

describe("[EXPORT] rest endpoints", () => {
  chai.should();
  const rest = restClient("invalid");
  it("> reference", () => {
    rest.should.be.an("object");
    rest.reference.should.be.an("object");
  });
  it("> stocks", () => {
    rest.stocks.should.be.an("object");
  });
  it("> forex", () => {
    rest.forex.should.be.an("object");
  });
  it("> crypto", () => {
    rest.crypto.should.be.an("object");
  });
});
