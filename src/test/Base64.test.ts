import * as assert from "assert";

import { Base64 } from "../encodings/Base64";

suite("Encoder Base64 Tests", () => {
  let base64 = new Base64();

  test("Encoding test", () => {
    assert.strictEqual(base64.encode("a"), "YQ==");
    assert.strictEqual(base64.encode("ab"), "YWI=");
    assert.strictEqual(base64.encode("abc"), "YWJj");
    assert.strictEqual(base64.encode("abcd"), "YWJjZA==");
    assert.strictEqual(base64.encode("abcde"), "YWJjZGU=");
    assert.strictEqual(base64.encode("abcdef"), "YWJjZGVm");
    assert.strictEqual(base64.encode("emoji🔥test"), "ZW1vamnwn5SldGVzdA==");
  });

  test("Decoding test", () => {
    assert.strictEqual(base64.decode("YQ=="), "a");
    assert.strictEqual(base64.decode("YWI="), "ab");
    assert.strictEqual(base64.decode("YWJj"), "abc");
    assert.strictEqual(base64.decode("YWJjZA=="), "abcd");
    assert.strictEqual(base64.decode("YWJjZGU="), "abcde");
    assert.strictEqual(base64.decode("YWJjZGVm"), "abcdef");
    assert.strictEqual(base64.decode("ZW1vamnwn5SldGVzdA=="), "emoji🔥test");
  });

  test("Decoding test without padding", () => {
    assert.strictEqual(base64.decode("YWJjZGVm"), "abcdef");
    assert.strictEqual(base64.decode("ZW1vamnwn5SldGVzdA"), "emoji🔥test");
  });

  test("Decoding test with extra spacing", () => {
    assert.strictEqual(base64.decode("YWJ  jZGVm"), "abcdef");
    assert.strictEqual(
      base64.decode("ZW1\nvam  nwn5\tSldGVzdA"),
      "emoji🔥test",
    );
  });
});
