import * as assert from "assert";
import { ReadableBitStream } from "../encodings/ReadableBitStream";

suite("ReadableBitStream Read Tests", () => {
  test("Read Bit True tests", () => {
    let bitstream = new ReadableBitStream(new Uint8Array([255]));
    for (let i = 0; i < 8; i++) {
      assert.strictEqual(bitstream.readBit(), true);
    }
  });

  test("Read Bits from 64 tests", () => {
    let bitstream = new ReadableBitStream(new Uint8Array([64]));
    assert.strictEqual(bitstream.readBits(8), 64);
  });

  test("Read Bits from Array tests", () => {
    let bitstream = new ReadableBitStream(new Uint8Array([64, 4, 42]));
    assert.strictEqual(bitstream.readBits(8), 64);
    assert.strictEqual(bitstream.readBits(8), 4);
    assert.strictEqual(bitstream.readBits(8), 42);
  });
});
