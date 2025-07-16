export class ReadableBitStream {
  private stream: Uint8Array;
  private byteOffset: number = 0;
  private bitOffset: number = 7;

  constructor(stream: Uint8Array) {
    this.stream = stream;
  }

  public static fromString(str: string): ReadableBitStream {
    const stream = new TextEncoder().encode(str);
    return new ReadableBitStream(stream);
  }

  public getByteAt(offset: number) {
    return this.stream[offset];
  }

  public get eof(): boolean {
    return this.byteOffset >= this.stream.length;
  }

  public readBit(): boolean {
    let mask = 1 << this.bitOffset;
    let bit = (this.stream[this.byteOffset] & mask) === mask;

    this.bitOffset--;

    if (this.bitOffset === -1) {
      this.bitOffset = 7;
      this.byteOffset++;
    }

    return bit;
  }

  public readBits(count: number): number {
    let value = 0;

    while (count--) {
      const mask = 1 << count;
      if (this.readBit()) {
        value += mask;
      }
    }

    return value;
  }
}
