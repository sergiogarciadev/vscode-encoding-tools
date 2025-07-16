import * as assert from "assert";
import { WritableBitStream } from "../encodings/WritableBitStream";

suite("WritableBitStream Tests", () => {
    test("Write Bit True tests", () => {
        let bitstream = new WritableBitStream();
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 128);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 192);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 224);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 240);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 248);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 252);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 254);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 128);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 192);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 224);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 240);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 248);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 252);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 254);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 255);
        assert.strictEqual(bitstream.getByteAt(1), 255);
    });

    test("Write Bit Alternate tests", () => {
        let bitstream = new WritableBitStream();
        bitstream.writeBit(false);
        assert.strictEqual(bitstream.getByteAt(0), 0);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 64);
        bitstream.writeBit(false);
        assert.strictEqual(bitstream.getByteAt(0), 64);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 80);
        bitstream.writeBit(false);
        assert.strictEqual(bitstream.getByteAt(0), 80);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 84);
        bitstream.writeBit(false);
        assert.strictEqual(bitstream.getByteAt(0), 84);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 85);
        bitstream.writeBit(true);
        assert.strictEqual(bitstream.getByteAt(0), 85);
        assert.strictEqual(bitstream.getByteAt(1), 128);
    });

    test("Write 2 Bits tests", () => {
        let bitstream = new WritableBitStream();

        // byte 0
        bitstream.writeBits(1, 2);
        assert.strictEqual(bitstream.getByteAt(0), 64);
        bitstream.writeBits(1, 2);
        assert.strictEqual(bitstream.getByteAt(0), 80);
        bitstream.writeBits(1, 2);
        assert.strictEqual(bitstream.getByteAt(0), 84);
        bitstream.writeBits(1, 2);
        assert.strictEqual(bitstream.getByteAt(0), 85);

        // byte 1
        bitstream.writeBits(2, 2);
        assert.strictEqual(bitstream.getByteAt(1), 128);
        bitstream.writeBits(2, 2);
        assert.strictEqual(bitstream.getByteAt(1), 160);
        bitstream.writeBits(2, 2);
        assert.strictEqual(bitstream.getByteAt(1), 168);
        bitstream.writeBits(2, 2);
        assert.strictEqual(bitstream.getByteAt(1), 170);
    });

    test("Write 3 Bits tests", () => {
        let bitstream = new WritableBitStream();

        // byte 0
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(0), 32);
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(0), 36);

        // byte 0 and 1
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(0), 36);
        assert.strictEqual(bitstream.getByteAt(1), 128);

        // byte 1
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(1), 144);
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(1), 146);

        // byte 1 and 2
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(1), 146);
        assert.strictEqual(bitstream.getByteAt(2), 64);

        // byte 2
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(2), 72);
        bitstream.writeBits(1, 3);
        assert.strictEqual(bitstream.getByteAt(2), 73);
    });

    test("Write 4 Bits tests", () => {
        let bitstream = new WritableBitStream();

        // byte 0
        bitstream.writeBits(1, 4);
        assert.strictEqual(bitstream.getByteAt(0), 16);
        bitstream.writeBits(1, 4);
        assert.strictEqual(bitstream.getByteAt(0), 17);

        // byte 1
        bitstream.writeBits(2, 4);
        assert.strictEqual(bitstream.getByteAt(1), 32);
        bitstream.writeBits(2, 4);
        assert.strictEqual(bitstream.getByteAt(1), 34);

        // byte 2
        bitstream.writeBits(3, 4);
        assert.strictEqual(bitstream.getByteAt(2), 48);
        bitstream.writeBits(3, 4);
        assert.strictEqual(bitstream.getByteAt(2), 51);

        // byte 3
        bitstream.writeBits(31, 4);
        assert.strictEqual(bitstream.getByteAt(3), 240);
        bitstream.writeBits(31, 4);
        assert.strictEqual(bitstream.getByteAt(3), 255);
    });

    test("Write 5 Bits tests", () => {
        let bitstream = new WritableBitStream();

        // byte 0
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(0), 8);

        // byte 0 and 1
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(0), 8);
        assert.strictEqual(bitstream.getByteAt(1), 64);

        // byte 1
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(1), 66);

        // byte 1 and 2
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(1), 66);
        assert.strictEqual(bitstream.getByteAt(2), 16);

        // byte 2 and 3
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(2), 16);
        assert.strictEqual(bitstream.getByteAt(3), 128);

        // byte 3
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(3), 132);

        // byte 3 and 4
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(3), 132);
        assert.strictEqual(bitstream.getByteAt(4), 32);

        // byte 4
        bitstream.writeBits(1, 5);
        assert.strictEqual(bitstream.getByteAt(4), 33);
    });

    test("Write Byte Aligned tests", () => {
        let bitstream = new WritableBitStream();

        // byte 0
        bitstream.writeByte(1);
        assert.strictEqual(bitstream.getByteAt(0), 1);

        // byte 1
        bitstream.writeByte(42);
        assert.strictEqual(bitstream.getByteAt(1), 42);

        // byte 2
        bitstream.writeByte(4);
        assert.strictEqual(bitstream.getByteAt(2), 4);

        // byte 3
        bitstream.writeByte(255);
        assert.strictEqual(bitstream.getByteAt(3), 255);

        // byte 4
        bitstream.writeByte(256);
        assert.strictEqual(bitstream.getByteAt(4), 0);

        // byte 5
        bitstream.writeByte(257);
        assert.strictEqual(bitstream.getByteAt(5), 1);
    });

    test("Write Byte Unaligned tests", () => {
        let bitstream = new WritableBitStream();

        // Write one bit just to mess with alignment
        bitstream.writeBit(true);

        // byte 0 and 1
        bitstream.writeByte(1);
        assert.strictEqual(bitstream.getByteAt(0), 128);
        assert.strictEqual(bitstream.getByteAt(1), 128);

        // byte 1 and 2
        bitstream.writeByte(42);
        assert.strictEqual(bitstream.getByteAt(1), 149);
        assert.strictEqual(bitstream.getByteAt(2), 0);

        // byte 2 and 3
        bitstream.writeByte(4);
        assert.strictEqual(bitstream.getByteAt(2), 2);
        assert.strictEqual(bitstream.getByteAt(3), 0);

        // byte 3 and 4
        bitstream.writeByte(255);
        assert.strictEqual(bitstream.getByteAt(3), 127);
        assert.strictEqual(bitstream.getByteAt(4), 128);

        // byte 4 and 5
        bitstream.writeByte(256);
        assert.strictEqual(bitstream.getByteAt(4), 128);
        assert.strictEqual(bitstream.getByteAt(5), 0);

        // byte 5 and 6
        bitstream.writeByte(257);
        assert.strictEqual(bitstream.getByteAt(5), 0);
        assert.strictEqual(bitstream.getByteAt(6), 128);
    });
});
