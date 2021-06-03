export type EncryptBigBuffer = (publicKey: string, modLength: number, data: Buffer) => Buffer

export type DecryptBigBuffer = (privateKey: string, data: Buffer) => Buffer