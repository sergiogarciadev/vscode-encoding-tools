import * as assert from "assert";

import { Base64 } from "../encodings/Base64";
import { Hex } from "../encodings/Hex";

suite("Base64 Tests", () => {
  test("Encoding test", () => {
    assert.strictEqual(Base64.encode("abcdef"), "YWJjZGVm");
    assert.strictEqual(Base64.encode("emoji🔥test"), "ZW1vamnwn5SldGVzdA==");
  });

  test("Decoding test", () => {
    assert.strictEqual(Base64.decode("YWJjZGVm"), "abcdef");
    assert.strictEqual(Base64.decode("ZW1vamnwn5SldGVzdA=="), "emoji🔥test");
  });

  test("Decoding test without padding", () => {
    assert.strictEqual(Base64.decode("YWJjZGVm"), "abcdef");
    assert.strictEqual(Base64.decode("ZW1vamnwn5SldGVzdA"), "emoji🔥test");
  });

  test("Decoding test with extra spacing", () => {
    assert.strictEqual(Base64.decode("YWJ  jZGVm"), "abcdef");
    assert.strictEqual(
      Base64.decode("ZW1\nvam  nwn5\tSldGVzdA"),
      "emoji🔥test"
    );
  });
});

suite("Hex Tests", () => {
  test("Encoding test", () => {
    assert.strictEqual(Hex.encode("abcdef"), "616263646566");
    assert.strictEqual(Hex.encode("emoji🔥test"), "656d6f6a69f09f94a574657374");
  });

  test("Decoding test", () => {
    assert.strictEqual(Hex.decode("616263646566"), "abcdef");
    assert.strictEqual(Hex.decode("656d6f6a69f09f94a574657374"), "emoji🔥test");
  });
});
