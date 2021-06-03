import { privateDecrypt, publicEncrypt } from "crypto";
import type { EncryptRows, DecryptRows } from "./cryptRow.types";

/**
 * @returns Array of Buffers encrypted with provided public Key
 */
export const encryptRows: EncryptRows = (publicKey: string, bufferList: Buffer[]) => (
    bufferList.map(data => (
        publicEncrypt( publicKey, data)
    ))
)

/**
 * @returns Array of Buffers decrypted with provided private Key
 */
export const decryptRows: DecryptRows = (privateKey: string, bufferList: Buffer[]) => (
    bufferList.map(data => (
        privateDecrypt(privateKey, data)
    ))
)