/// <reference types="node" />
export declare type EncryptRows = (publicKey: string, bufferList: Buffer[]) => Buffer[];
export declare type DecryptRows = (privateKey: string, bufferList: Buffer[]) => Buffer[];
