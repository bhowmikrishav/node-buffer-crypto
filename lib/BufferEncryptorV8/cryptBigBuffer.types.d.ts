/// <reference types="node" />
export declare type EncryptBigBuffer = (publicKey: string, modLength: number, data: Buffer) => Buffer;
export declare type DecryptBigBuffer = (privateKey: string, data: Buffer) => Buffer;
