/**
 * ### BigBuffer encrypter with v8 serializer
 * @param publicKey Public Key as string
 * @param modLength Maximum length of each chunk encrypted individually
 * @param data Data to encrypt
 * @returns Encrypted data
 */
export type EncryptBigBuffer = (publicKey: string, modLength: number, data: Buffer) => Buffer

/**
 * ### BigBuffer encrypter for v8 serializer data
 * @param privateKey Private Key as string
 * @param data Encrypted data to decrypt
 * @returns Decrypted data
 */
export type DecryptBigBuffer = (privateKey: string, data: Buffer) => Buffer