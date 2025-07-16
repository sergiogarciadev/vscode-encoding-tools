export class WritableBitStream {
    private _stream: number[];
    private _byteOffset: number = -1;
    private _bitOffset: number = -1;

    constructor() {
        this._stream = [];
    }

    public getByteAt(offset: number) {
        return this._stream[offset];
    }

    public get stream(): number[] {
        return this._stream;
    }

    public writeBit(bit: boolean) {
        if (this._bitOffset === -1) {
            this._stream.push(0);

            this._bitOffset = 7;
            this._byteOffset++;
        }

        if (bit) {
            this._stream[this._byteOffset] += 1 << this._bitOffset;
        }

        this._bitOffset--;
    }

    public writeBits(bits: number, count: number) {
        while (count--) {
            const mask = 1 << count;
            this.writeBit((bits & mask) === mask);
        }
    }

    public writeByte(byte: number) {
        if (this._bitOffset === -1) {
            this._stream.push(byte & 255);
            this._byteOffset++;
        } else {
            this.writeBits(byte, 8);
        }
    }

    public toString() : string {
      return new TextDecoder().decode(new Uint8Array(this._stream));
    }
}
