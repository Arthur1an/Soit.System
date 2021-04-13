import * as jspb from 'google-protobuf'



export class LoginReply extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): LoginReply;

  getLegalName(): string;
  setLegalName(value: string): LoginReply;

  getToken(): string;
  setToken(value: string): LoginReply;

  getExpireAt(): number;
  setExpireAt(value: number): LoginReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginReply.AsObject;
  static toObject(includeInstance: boolean, msg: LoginReply): LoginReply.AsObject;
  static serializeBinaryToWriter(message: LoginReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginReply;
  static deserializeBinaryFromReader(message: LoginReply, reader: jspb.BinaryReader): LoginReply;
}

export namespace LoginReply {
  export type AsObject = {
    userId: number,
    legalName: string,
    token: string,
    expireAt: number,
  }
}

export class LoginRequest extends jspb.Message {
  getUserName(): string;
  setUserName(value: string): LoginRequest;

  getCipher(): string;
  setCipher(value: string): LoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
  static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginRequest;
  static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
  export type AsObject = {
    userName: string,
    cipher: string,
  }
}

