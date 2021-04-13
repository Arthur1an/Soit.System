// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import JSEncrypt from "jsencrypt/bin/jsencrypt";

const publicKey = `-----BEGIN PUBLIC KEY-----
  MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC2Iia57vDtbc/eVZ5hgddFe8Ng
  x+SpBfESg9D/MtMjaYT1WLbKdWBRONHNisKUq+sjVLJHgVK0yQDewnZ53o4aC+bq
  RBzYVsIIAvrHarq7A6eBtTJNxG3hEd6mebjUncaah1qAB7mj+CWC4PJQ8os7tVCI
  9keRE+x6xcaEV7N7sQIDAQAB
  -----END PUBLIC KEY-----`;

const privateKey =
  "MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEA0vfvyTdGJkdbHkB8\n" +
  "mp0f3FE0GYP3AYPaJF7jUd1M0XxFSE2ceK3k2kw20YvQ09NJKk+OMjWQl9WitG9p\n" +
  "B6tSCQIDAQABAkA2SimBrWC2/wvauBuYqjCFwLvYiRYqZKThUS3MZlebXJiLB+Ue\n" +
  "/gUifAAKIg1avttUZsHBHrop4qfJCwAI0+YRAiEA+W3NK/RaXtnRqmoUUkb59zsZ\n" +
  "UBLpvZgQPfj1MhyHDz0CIQDYhsAhPJ3mgS64NbUZmGWuuNKp5coY2GIj/zYDMJp6\n" +
  "vQIgUueLFXv/eZ1ekgz2Oi67MNCk5jeTF2BurZqNLR3MSmUCIFT3Q6uHMtsB9Eha\n" +
  "4u7hS31tj1UWE+D+ADzp59MGnoftAiBeHT7gDMuqeJHPL4b+kC+gzV4FGTfhR9q3\n" +
  "tTbklZkD2A==";

// 加密
export function encrypt(txt: string): string {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // 设置公钥
  return encryptor.encrypt(txt); // 对需要加密的数据进行加密
}

// 解密
export function decrypt(txt: string): string {
  const encryptor = new JSEncrypt();
  encryptor.setPrivateKey(privateKey);
  return encryptor.decrypt(txt);
}
