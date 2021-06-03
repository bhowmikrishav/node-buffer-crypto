export type EncryptRows = (publicKey: string, bufferList: Buffer[]) => Buffer[]

export type DecryptRows = (privateKey: string, bufferList: Buffer[]) => Buffer[]