import * as assert from "assert";
import { Base32 } from "../encodings/Base32";

suite("Encoder Base32 Tests", () => {
    let base32 = new Base32();

    test("Encoding test", () => {
        assert.strictEqual(base32.encode("a"), "me======");
        assert.strictEqual(base32.encode("ab"), "mfra====");
        assert.strictEqual(base32.encode("abc"), "mfrgg===");
        assert.strictEqual(base32.encode("abcd"), "mfrggza=");
        assert.strictEqual(base32.encode("abcde"), "mfrggzdf");
    });

    test("Decoding test", () => {
        assert.strictEqual(base32.decode("me======"), "a");
        assert.strictEqual(base32.decode("mfra===="), "ab");
        assert.strictEqual(base32.decode("mfrgg==="), "abc");
        assert.strictEqual(base32.decode("mfrggza="), "abcd");
        assert.strictEqual(base32.decode("mfrggzdf"), "abcde");
    });

    test("Decoding test without padding", () => {
        assert.strictEqual(base32.decode("me"), "a");
        assert.strictEqual(base32.decode("mfra"), "ab");
        assert.strictEqual(base32.decode("mfrgg"), "abc");
        assert.strictEqual(base32.decode("mfrggza"), "abcd");
        assert.strictEqual(base32.decode("mfrggzdf"), "abcde");
        assert.strictEqual(base32.decode("ME"), "a");
        assert.strictEqual(base32.decode("MFRA"), "ab");
        assert.strictEqual(base32.decode("MFRGG"), "abc");
        assert.strictEqual(base32.decode("MFRGGZA"), "abcd");
        assert.strictEqual(base32.decode("MFRGGZDF"), "abcde");
    });
});
