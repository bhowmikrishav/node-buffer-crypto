import { encryptBigBuffer, decryptBigBuffer } from "./cryptBigBuffer";
/**
 * ### V8 serialiser (Recommended)
 * - Covers all inbuilt JS data types including Buffer
 * - Fastest among all other Object parsers
 * - Space efficient
 */
declare const v8: {
    encryptBigBuffer: import("./cryptBigBuffer.types").EncryptBigBuffer;
    decryptBigBuffer: import("./cryptBigBuffer.types").DecryptBigBuffer;
};
export { v8, encryptBigBuffer, decryptBigBuffer };
