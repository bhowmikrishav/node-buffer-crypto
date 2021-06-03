import { deserialize, serialize } from "v8";
import type { EncryptBigBuffer, DecryptBigBuffer } from "./cryptBigBuffer.types";
import { decryptRows, encryptRows } from "./cryptRow";

/**
 * ### BigBuffer encrypter with v8 serializer
 * @param publicKey Public Key as string
 * @param modLength Maximum length of each chunk encrypted individually
 * @param data Data to encrypt
 * @returns Encrypted data
 */
export const encryptBigBuffer: EncryptBigBuffer = (publicKey: string, modLength: number, data: Buffer) => {
    var bufferList: Buffer[] = []
    for (var i = 0; i < data.length; i += modLength)
        bufferList.push(
            data.slice(i, i + modLength)
        )
    const encryptedBufferList = encryptRows(publicKey, bufferList)
    return serialize(encryptedBufferList)
}

/**
 * ### BigBuffer encrypter for v8 serializer data
 * @param privateKey Private Key as string
 * @param data Encrypted data to decrypt
 * @returns Decrypted data
 */
export const decryptBigBuffer: DecryptBigBuffer = (privateKey: string, data: Buffer) => {
    const encryptedBufferList: Buffer[] = deserialize(data)
    const bufferList = decryptRows(privateKey, encryptedBufferList)
    return Buffer.concat(bufferList)
}