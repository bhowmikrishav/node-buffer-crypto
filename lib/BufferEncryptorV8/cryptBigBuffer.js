"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptBigBuffer = exports.encryptBigBuffer = void 0;
const v8_1 = require("v8");
const cryptRow_1 = require("./cryptRow");
/**
 * @description BigBuffer encrypter with v8 serializer
 * @param publicKey Public Key as string
 * @param modLength Maximum length of each chunk encrypted individually
 * @param data Data to encrypt
 * @returns Encrypted data
 */
const encryptBigBuffer = (publicKey, modLength, data) => {
    var bufferList = [];
    for (var i = 0; i < data.length; i += modLength)
        bufferList.push(data.slice(i, i + modLength));
    const encryptedBufferList = cryptRow_1.encryptRows(publicKey, bufferList);
    return v8_1.serialize(encryptedBufferList);
};
exports.encryptBigBuffer = encryptBigBuffer;
/**
 * @description BigBuffer encrypter for v8 serializer data
 * @param privateKey Private Key as string
 * @param data Encrypted data to decrypt
 * @returns Decrypted data
 */
const decryptBigBuffer = (privateKey, data) => {
    const encryptedBufferList = v8_1.deserialize(data);
    const bufferList = cryptRow_1.decryptRows(privateKey, encryptedBufferList);
    return Buffer.concat(bufferList);
};
exports.decryptBigBuffer = decryptBigBuffer;
