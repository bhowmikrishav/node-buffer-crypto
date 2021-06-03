# Node Crypto Buffer

NPM package to Encrypt data of unlimited size with any public/private encryption key of a known mod-length.

`crypto` is amazing package for encrypting and decrypting your data, but encrypting Public/Private keys has its hassles.

## Usage

```js
const { decryptBigBuffer, encryptBigBuffer } = require("node-buffer-crypto")
const { publicKey, privateKey } = require("./keypair.json")
const MOD_LENGTH = 64

const sample = Buffer.from("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

// encrypt data with public key
const enc = encryptBigBuffer(publicKey, MOD_LENGTH, sample)

// decrypt data with private key
const dec = decryptBigBuffer(privateKey, enc)
```

## How `crypto` works with Public-Private key pair? (For Crypto Noobies)

*Don't take `Noobies` as offensive, I just don't want to be absurd while giving some very basic docs*

### Public Key and Private Key

**Public key** is used to ***encrypt*** a given data and can be shared with anyone who needs to encrypt the data.
`{data}` ---> `encryptor(publicKey, {data})` ---> `encryptedBuffer<xyz...>`

**Private key** is used to ***decrypt*** a the data encrypted with its ***Public key pair***.
`encryptedBuffer<xyz...>` ---> `decryptor(privateKey, encryptedBuffer)`--->`{data}` 

The data once encrypted with Public key can not be decrypted back without the Private key. Not even with the public key itself.

### Creating a Public Private key pair

We will use `openssl` 

Make one **private key** into a file named `enc.key `

```sh
openssl genrsa -out enc.key 1028
```
> `1028` is padding, which means our mod length will be approximate `90`,  we may consider our mod length as `64` to keep our code fail-safe.

Make one **public key** from the new private key into a file named `enc.pub`

```sh
openssl rsa -in enc.key -out enc.pub -pubout -outform PEM
```

### Using Node JS `crypto` 

**`example: noob1`**

```js
const { publicEncrypt, privateDecrypt } = require("crypto")
const { readFileSync } = require("fs")
const { strictEqual }

const publicKey = readFileSync("./enc.pub")
const privateKey = readFileSync("./enc.pub")

const sampleData = Buffer.from("Sample to encrypt")

const encryptedData = publicEncrypt(publicKey, sampleData)

const decryptedData = privateDecrypt(privateKey, encryptedData)

strictEqual(decryptedData, sampleData)
```

### Why do you need `node-buffer-crypto` ?

In the above example, our sample data was only 17 bytes long, which is less than our safe mod length of 64 bytes.

If we try to encrypt bigger data the encryption will fail.

So to encrypt bigger data we need to encrypt them into smaller chunks. And `node-buffer-crypto` will just do that.

It will

- split the given data into smaller chunks of given modLength
- encrypt each chunk with publicKey
- Map/Concat the encrypted chunks

Check the Usage Above