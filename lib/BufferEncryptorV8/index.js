"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptBigBuffer = exports.encryptBigBuffer = exports.v8 = void 0;
const cryptBigBuffer_1 = require("./cryptBigBuffer");
Object.defineProperty(exports, "encryptBigBuffer", { enumerable: true, get: function () { return cryptBigBuffer_1.encryptBigBuffer; } });
Object.defineProperty(exports, "decryptBigBuffer", { enumerable: true, get: function () { return cryptBigBuffer_1.decryptBigBuffer; } });
/**
 * ### V8 serialiser (Recommended)
 * - Covers all inbuilt JS data types including Buffer
 * - Fastest among all other Object parsers
 * - Space efficient
 */
const v8 = {
    encryptBigBuffer: cryptBigBuffer_1.encryptBigBuffer,
    decryptBigBuffer: cryptBigBuffer_1.decryptBigBuffer
};
exports.v8 = v8;
