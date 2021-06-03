import { publicKey, privateKey } from "./certificates/ppp.key"
import { decryptBigBuffer, encryptBigBuffer } from "../src/BufferEncryptorv8"
import { deserialize, serialize } from "v8";
import { deepStrictEqual } from "assert";

describe("BigBuffer", function () {
    
    const obj = [
        Buffer.alloc(1000).toJSON().data.map(() => (Date.now())),
        Buffer.alloc(1000).toJSON().data.map(() => (Date.now().toString())),
        Buffer.alloc(100).toJSON().data.map(() => ({ where: "else", should: { we: "go" } }))
    ]

    var enc: Buffer | undefined
    it("encryptBigBuffer", async () => {
        enc = encryptBigBuffer(
            publicKey,
            64,
            serialize(obj)
        )
    })
    it("decryptBigBuffer", async () => {
        if (enc === undefined) return
        const res = decryptBigBuffer(
            privateKey,
            enc
        )
        const resObj = deserialize(res)
        deepStrictEqual(resObj, obj)
    })
})