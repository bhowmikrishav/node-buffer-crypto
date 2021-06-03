import { encryptBigBuffer, decryptBigBuffer } from "./cryptBigBuffer"

/**
 * ### V8 serialiser (Recommended)
 * - Covers all inbuilt JS data types including Buffer
 * - Fastest among all other Object parsers
 * - Space efficient
 */
const v8 = {
    encryptBigBuffer,
    decryptBigBuffer
}

export {
    v8,
    encryptBigBuffer,
    decryptBigBuffer
}