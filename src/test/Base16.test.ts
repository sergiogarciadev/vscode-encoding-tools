import * as assert from "assert";
import { Base16 } from "../encodings/Base16";

suite("Encode Base16 Tests", () => {
  let hex = new Base16();

  test("Encoding test", () => {
    assert.strictEqual(hex.encode("abcdef"), "616263646566");
    assert.strictEqual(hex.encode("emoji🔥test"), "656d6f6a69f09f94a574657374");
  });

  test("Decoding test", () => {
    assert.strictEqual(hex.decode("616263646566"), "abcdef");
    assert.strictEqual(hex.decode("616263646566"), "abcdef");
    assert.strictEqual(hex.decode("656d6f6a69f09f94a574657374"), "emoji🔥test");
    assert.strictEqual(hex.decode("656D6F6A69F09F94A574657374"), "emoji🔥test");
  });
});
