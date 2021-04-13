import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protobuf_infrastructure_pb from '../protobuf/infrastructure_pb';


export class CreateAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateAccountRequest;

  getCipher(): string;
  setCipher(value: string): CreateAccountRequest;

  getLegalName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLegalName(value?: google_protobuf_wrappers_pb.StringValue): CreateAccountRequest;
  hasLegalName(): boolean;
  clearLegalName(): CreateAccountRequest;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): CreateAccountRequest;
  hasDescription(): boolean;
  clearDescription(): CreateAccountRequest;

  getMobile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobile(value?: google_protobuf_wrappers_pb.StringValue): CreateAccountRequest;
  hasMobile(): boolean;
  clearMobile(): CreateAccountRequest;

  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): CreateAccountRequest;
  hasEmail(): boolean;
  clearEmail(): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    name: string,
    cipher: string,
    legalName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mobile?: google_protobuf_wrappers_pb.StringValue.AsObject,
    email?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class UpdateAccountRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateAccountRequest;

  getName(): string;
  setName(value: string): UpdateAccountRequest;

  getCipher(): string;
  setCipher(value: string): UpdateAccountRequest;

  getLegalName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLegalName(value?: google_protobuf_wrappers_pb.StringValue): UpdateAccountRequest;
  hasLegalName(): boolean;
  clearLegalName(): UpdateAccountRequest;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): UpdateAccountRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateAccountRequest;

  getMobile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobile(value?: google_protobuf_wrappers_pb.StringValue): UpdateAccountRequest;
  hasMobile(): boolean;
  clearMobile(): UpdateAccountRequest;

  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): UpdateAccountRequest;
  hasEmail(): boolean;
  clearEmail(): UpdateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
    id: number,
    name: string,
    cipher: string,
    legalName?: google_protobuf_wrappers_pb.StringValue.AsObject,
    description?: google_protobuf_wrappers_pb.StringValue.AsObject,
    mobile?: google_protobuf_wrappers_pb.StringValue.AsObject,
    email?: google_protobuf_wrappers_pb.StringValue.AsObject,
  }
}

export class FindAccountReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindAccountReply;

  getName(): string;
  setName(value: string): FindAccountReply;

  getCipher(): string;
  setCipher(value: string): FindAccountReply;

  getLegalName(): google_protobuf_wrappers_pb.StringValue | undefined;
  setLegalName(value?: google_protobuf_wrappers_pb.StringValue): FindAccountReply;
  hasLegalName(): boolean;
  clearLegalName(): FindAccountReply;

  getDescription(): google_protobuf_wrappers_pb.StringValue | undefined;
  setDescription(value?: google_protobuf_wrappers_pb.StringValue): FindAccountReply;
  hasDescription(): boolean;
  clearDescription(): FindAccountReply;

  getMobile(): google_protobuf_wrappers_pb.StringValue | undefined;
  setMobile(value?: google_protobuf_wrappers_pb.StringValue): FindAccountReply;
  hasMobile(): boolean;
  clearMobile(): FindAccountReply;

  getEmail(): google_protobuf_wrappers_pb.StringValue | undefined;
  setEmail(value?: google_protobuf_wrappers_pb.StringValue): FindAccountReply;
  hasEmail(): boolean;
  clearEmail(): FindAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindAccountReply): FindAccountReply.AsObject;
  static serializeBinaryToWriter(message: FindAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindAccountReply;
  static deserializeBinaryFromReader(message: FindAccountReply, reader: jspb.BinaryReader): FindAccountReply;
}

export namespace FindAccountReply {
  export type AsObject = {
    id: number,
    name: string,
    cipher: string,
    legalName?: string,
    description?: string,
    mobile?: string,
    email?: string,
  }
}

export class QueryAccountRequest extends jspb.Message {
  getContains(): string;
  setContains(value: string): QueryAccountRequest;

  getOrderRequest(): protobuf_infrastructure_pb.OrderRequest | undefined;
  setOrderRequest(value?: protobuf_infrastructure_pb.OrderRequest): QueryAccountRequest;
  hasOrderRequest(): boolean;
  clearOrderRequest(): QueryAccountRequest;

  getPageRequest(): protobuf_infrastructure_pb.PageRequest | undefined;
  setPageRequest(value?: protobuf_infrastructure_pb.PageRequest): QueryAccountRequest;
  hasPageRequest(): boolean;
  clearPageRequest(): QueryAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountRequest): QueryAccountRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountRequest;
  static deserializeBinaryFromReader(message: QueryAccountRequest, reader: jspb.BinaryReader): QueryAccountRequest;
}

export namespace QueryAccountRequest {
  export type AsObject = {
    contains: string,
    orderRequest?: protobuf_infrastructure_pb.OrderRequest.AsObject,
    pageRequest?: protobuf_infrastructure_pb.PageRequest.AsObject,
  }
}

export class QueryAccountReply extends jspb.Message {
  getPageResult(): protobuf_infrastructure_pb.PageResult | undefined;
  setPageResult(value?: protobuf_infrastructure_pb.PageResult): QueryAccountReply;
  hasPageResult(): boolean;
  clearPageResult(): QueryAccountReply;

  getItemsList(): Array<FindAccountReply>;
  setItemsList(value: Array<FindAccountReply>): QueryAccountReply;
  clearItemsList(): QueryAccountReply;
  addItems(value?: FindAccountReply, index?: number): FindAccountReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAccountReply.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAccountReply): QueryAccountReply.AsObject;
  static serializeBinaryToWriter(message: QueryAccountReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAccountReply;
  static deserializeBinaryFromReader(message: QueryAccountReply, reader: jspb.BinaryReader): QueryAccountReply;
}

export namespace QueryAccountReply {
  export type AsObject = {
    pageResult?: protobuf_infrastructure_pb.PageResult.AsObject,
    itemsList: Array<FindAccountReply.AsObject>,
  }
}

