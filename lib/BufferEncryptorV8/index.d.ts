/// <reference types="node" />
import { encryptBigBuffer, decryptBigBuffer } from "./cryptBigBuffer";
/**
 * ### V8 serialiser (Recommended)
 * - Covers all inbuilt JS data types including Buffer
 * - Fastest among all other Object parsers
 * - Space efficient
 */
declare const v8: {
    encryptBigBuffer: (publicKey: string, modLength: number, data: Buffer) => Buffer;
    decryptBigBuffer: (privateKey: string, data: Buffer) => Buffer;
};
export { v8, encryptBigBuffer, decryptBigBuffer };
