import type { EncryptBigBuffer, DecryptBigBuffer } from "./cryptBigBuffer.types";
/**
 * ### BigBuffer encrypter with v8 serializer
 * @param publicKey Public Key as string
 * @param modLength Maximum length of each chunk encrypted individually
 * @param data Data to encrypt
 * @returns Encrypted data
 */
export declare const encryptBigBuffer: EncryptBigBuffer;
/**
 * ### BigBuffer encrypter for v8 serializer data
 * @param privateKey Private Key as string
 * @param data Encrypted data to decrypt
 * @returns Decrypted data
 */
export declare const decryptBigBuffer: DecryptBigBuffer;
