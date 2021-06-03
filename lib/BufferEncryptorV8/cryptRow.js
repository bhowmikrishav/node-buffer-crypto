"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptRows = exports.encryptRows = void 0;
const crypto_1 = require("crypto");
/**
 * @returns Array of Buffers encrypted with provided public Key
 */
const encryptRows = (publicKey, bufferList) => (bufferList.map(data => (crypto_1.publicEncrypt(publicKey, data))));
exports.encryptRows = encryptRows;
/**
 * @returns Array of Buffers decrypted with provided private Key
 */
const decryptRows = (privateKey, bufferList) => (bufferList.map(data => (crypto_1.privateDecrypt(privateKey, data))));
exports.decryptRows = decryptRows;
