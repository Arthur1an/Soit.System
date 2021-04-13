import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protobuf_infrastructure_pb from '../protobuf/infrastructure_pb';


export class CreateUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateUserRequest;

  getEntryDate(): number;
  setEntryDate(value: number): CreateUserRequest;

  getDepartureDate(): number;
  setDepartureDate(value: number): CreateUserRequest;

  getMobile(): string;
  setMobile(value: string): CreateUserRequest;

  getIdcard(): string;
  setIdcard(value: string): CreateUserRequest;

  getJob(): string;
  setJob(value: string): CreateUserRequest;

  getComputerIdsList(): Array<number>;
  setComputerIdsList(value: Array<number>): CreateUserRequest;
  clearComputerIdsList(): CreateUserRequest;
  addComputerIds(value: number, index?: number): CreateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateUserRequest): CreateUserRequest.AsObject;
  static serializeBinaryToWriter(message: CreateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateUserRequest;
  static deserializeBinaryFromReader(message: CreateUserRequest, reader: jspb.BinaryReader): CreateUserRequest;
}

export namespace CreateUserRequest {
  export type AsObject = {
    name: string,
    entryDate: number,
    departureDate: number,
    mobile: string,
    idcard: string,
    job: string,
    computerIdsList: Array<number>,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateUserRequest;

  getName(): string;
  setName(value: string): UpdateUserRequest;

  getEntryDate(): number;
  setEntryDate(value: number): UpdateUserRequest;

  getDepartureDate(): number;
  setDepartureDate(value: number): UpdateUserRequest;

  getMobile(): string;
  setMobile(value: string): UpdateUserRequest;

  getIdcard(): string;
  setIdcard(value: string): UpdateUserRequest;

  getJob(): string;
  setJob(value: string): UpdateUserRequest;

  getComputerIdsList(): Array<number>;
  setComputerIdsList(value: Array<number>): UpdateUserRequest;
  clearComputerIdsList(): UpdateUserRequest;
  addComputerIds(value: number, index?: number): UpdateUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRequest): UpdateUserRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRequest;
  static deserializeBinaryFromReader(message: UpdateUserRequest, reader: jspb.BinaryReader): UpdateUserRequest;
}

export namespace UpdateUserRequest {
  export type AsObject = {
    id: number,
    name: string,
    entryDate: number,
    departureDate: number,
    mobile: string,
    idcard: string,
    job: string,
    computerIdsList: Array<number>,
  }
}

export class FindUserReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindUserReply;

  getName(): string;
  setName(value: string): FindUserReply;

  getEntryDate(): number;
  setEntryDate(value: number): FindUserReply;

  getDepartureDate(): number;
  setDepartureDate(value: number): FindUserReply;

  getMobile(): string;
  setMobile(value: string): FindUserReply;

  getIdcard(): string;
  setIdcard(value: string): FindUserReply;

  getJob(): string;
  setJob(value: string): FindUserReply;

  getComputerIdsList(): Array<protobuf_infrastructure_pb.NamedIdentify>;
  setComputerIdsList(value: Array<protobuf_infrastructure_pb.NamedIdentify>): FindUserReply;
  clearComputerIdsList(): FindUserReply;
  addComputerIds(value?: protobuf_infrastructure_pb.NamedIdentify, index?: number): protobuf_infrastructure_pb.NamedIdentify;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindUserReply): FindUserReply.AsObject;
  static serializeBinaryToWriter(message: FindUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindUserReply;
  static deserializeBinaryFromReader(message: FindUserReply, reader: jspb.BinaryReader): FindUserReply;
}

export namespace FindUserReply {
  export type AsObject = {
    id: number,
    name: string,
    entryDate: number,
    departureDate: number,
    mobile: string,
    idcard: string,
    job: string,
    computerIdsList: Array<protobuf_infrastructure_pb.NamedIdentify.AsObject>,
  }
}

export class QueryUserRequest extends jspb.Message {
  getContains(): string;
  setContains(value: string): QueryUserRequest;

  getOrderRequest(): protobuf_infrastructure_pb.OrderRequest | undefined;
  setOrderRequest(value?: protobuf_infrastructure_pb.OrderRequest): QueryUserRequest;
  hasOrderRequest(): boolean;
  clearOrderRequest(): QueryUserRequest;

  getPageRequest(): protobuf_infrastructure_pb.PageRequest | undefined;
  setPageRequest(value?: protobuf_infrastructure_pb.PageRequest): QueryUserRequest;
  hasPageRequest(): boolean;
  clearPageRequest(): QueryUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserRequest): QueryUserRequest.AsObject;
  static serializeBinaryToWriter(message: QueryUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserRequest;
  static deserializeBinaryFromReader(message: QueryUserRequest, reader: jspb.BinaryReader): QueryUserRequest;
}

export namespace QueryUserRequest {
  export type AsObject = {
    contains: string,
    orderRequest?: protobuf_infrastructure_pb.OrderRequest.AsObject,
    pageRequest?: protobuf_infrastructure_pb.PageRequest.AsObject,
  }
}

export class QueryUserReply extends jspb.Message {
  getPageResult(): protobuf_infrastructure_pb.PageResult | undefined;
  setPageResult(value?: protobuf_infrastructure_pb.PageResult): QueryUserReply;
  hasPageResult(): boolean;
  clearPageResult(): QueryUserReply;

  getItemsList(): Array<FindUserReply>;
  setItemsList(value: Array<FindUserReply>): QueryUserReply;
  clearItemsList(): QueryUserReply;
  addItems(value?: FindUserReply, index?: number): FindUserReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryUserReply.AsObject;
  static toObject(includeInstance: boolean, msg: QueryUserReply): QueryUserReply.AsObject;
  static serializeBinaryToWriter(message: QueryUserReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryUserReply;
  static deserializeBinaryFromReader(message: QueryUserReply, reader: jspb.BinaryReader): QueryUserReply;
}

export namespace QueryUserReply {
  export type AsObject = {
    pageResult?: protobuf_infrastructure_pb.PageResult.AsObject,
    itemsList: Array<FindUserReply.AsObject>,
  }
}

