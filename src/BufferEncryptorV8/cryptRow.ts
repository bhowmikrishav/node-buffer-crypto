import { privateDecrypt, publicEncrypt } from "crypto";

/**
 * @returns Array of Buffers encrypted with provided public Key
 */
export const encryptRows = (publicKey: string, bufferList: Buffer[]) => (
    bufferList.map(data => (
        publicEncrypt( publicKey, data)
    ))
)

/**
 * @returns Array of Buffers decrypted with provided private Key
 */
export const decryptRows = (privateKey: string, bufferList: Buffer[]) => (
    bufferList.map(data => (
        privateDecrypt(privateKey, data)
    ))
)