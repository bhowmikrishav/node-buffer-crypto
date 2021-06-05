/// <reference types="node" />
/**
 * @returns Array of Buffers encrypted with provided public Key
 */
export declare const encryptRows: (publicKey: string, bufferList: Buffer[]) => Buffer[];
/**
 * @returns Array of Buffers decrypted with provided private Key
 */
export declare const decryptRows: (privateKey: string, bufferList: Buffer[]) => Buffer[];
