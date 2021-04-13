import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as protobuf_infrastructure_pb from '../protobuf/infrastructure_pb';


export class CreateEquipmentRequest extends jspb.Message {
  getType(): string;
  setType(value: string): CreateEquipmentRequest;

  getNumber(): string;
  setNumber(value: string): CreateEquipmentRequest;

  getBrand(): string;
  setBrand(value: string): CreateEquipmentRequest;

  getModelName(): string;
  setModelName(value: string): CreateEquipmentRequest;

  getMemory(): string;
  setMemory(value: string): CreateEquipmentRequest;

  getPurchaseDate(): number;
  setPurchaseDate(value: number): CreateEquipmentRequest;

  getEliminateDate(): number;
  setEliminateDate(value: number): CreateEquipmentRequest;

  getState(): State;
  setState(value: State): CreateEquipmentRequest;

  getUserId(): number;
  setUserId(value: number): CreateEquipmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEquipmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEquipmentRequest): CreateEquipmentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEquipmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEquipmentRequest;
  static deserializeBinaryFromReader(message: CreateEquipmentRequest, reader: jspb.BinaryReader): CreateEquipmentRequest;
}

export namespace CreateEquipmentRequest {
  export type AsObject = {
    type: string,
    number: string,
    brand: string,
    modelName: string,
    memory: string,
    purchaseDate: number,
    eliminateDate: number,
    state: State,
    userId: number,
  }
}

export class UpdateEquipmentRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateEquipmentRequest;

  getType(): string;
  setType(value: string): UpdateEquipmentRequest;

  getNumber(): string;
  setNumber(value: string): UpdateEquipmentRequest;

  getBrand(): string;
  setBrand(value: string): UpdateEquipmentRequest;

  getModelName(): string;
  setModelName(value: string): UpdateEquipmentRequest;

  getMemory(): string;
  setMemory(value: string): UpdateEquipmentRequest;

  getPurchaseDate(): number;
  setPurchaseDate(value: number): UpdateEquipmentRequest;

  getEliminateDate(): number;
  setEliminateDate(value: number): UpdateEquipmentRequest;

  getState(): State;
  setState(value: State): UpdateEquipmentRequest;

  getUserId(): number;
  setUserId(value: number): UpdateEquipmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEquipmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEquipmentRequest): UpdateEquipmentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEquipmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEquipmentRequest;
  static deserializeBinaryFromReader(message: UpdateEquipmentRequest, reader: jspb.BinaryReader): UpdateEquipmentRequest;
}

export namespace UpdateEquipmentRequest {
  export type AsObject = {
    id: number,
    type: string,
    number: string,
    brand: string,
    modelName: string,
    memory: string,
    purchaseDate: number,
    eliminateDate: number,
    state: State,
    userId: number,
  }
}

export class FindEquipmentReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindEquipmentReply;

  getType(): string;
  setType(value: string): FindEquipmentReply;

  getNumber(): string;
  setNumber(value: string): FindEquipmentReply;

  getBrand(): string;
  setBrand(value: string): FindEquipmentReply;

  getModelName(): string;
  setModelName(value: string): FindEquipmentReply;

  getMemory(): string;
  setMemory(value: string): FindEquipmentReply;

  getPurchaseDate(): number;
  setPurchaseDate(value: number): FindEquipmentReply;

  getEliminateDate(): number;
  setEliminateDate(value: number): FindEquipmentReply;

  getState(): State;
  setState(value: State): FindEquipmentReply;

  getUserId(): number;
  setUserId(value: number): FindEquipmentReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindEquipmentReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindEquipmentReply): FindEquipmentReply.AsObject;
  static serializeBinaryToWriter(message: FindEquipmentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindEquipmentReply;
  static deserializeBinaryFromReader(message: FindEquipmentReply, reader: jspb.BinaryReader): FindEquipmentReply;
}

export namespace FindEquipmentReply {
  export type AsObject = {
    id: number,
    type: string,
    number: string,
    brand: string,
    modelName: string,
    memory: string,
    purchaseDate: number,
    eliminateDate: number,
    state: State,
    userId: number,
  }
}

export class QueryEquipmentRequest extends jspb.Message {
  getContains(): string;
  setContains(value: string): QueryEquipmentRequest;

  getOrderRequest(): protobuf_infrastructure_pb.OrderRequest | undefined;
  setOrderRequest(value?: protobuf_infrastructure_pb.OrderRequest): QueryEquipmentRequest;
  hasOrderRequest(): boolean;
  clearOrderRequest(): QueryEquipmentRequest;

  getPageRequest(): protobuf_infrastructure_pb.PageRequest | undefined;
  setPageRequest(value?: protobuf_infrastructure_pb.PageRequest): QueryEquipmentRequest;
  hasPageRequest(): boolean;
  clearPageRequest(): QueryEquipmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEquipmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEquipmentRequest): QueryEquipmentRequest.AsObject;
  static serializeBinaryToWriter(message: QueryEquipmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEquipmentRequest;
  static deserializeBinaryFromReader(message: QueryEquipmentRequest, reader: jspb.BinaryReader): QueryEquipmentRequest;
}

export namespace QueryEquipmentRequest {
  export type AsObject = {
    contains: string,
    orderRequest?: protobuf_infrastructure_pb.OrderRequest.AsObject,
    pageRequest?: protobuf_infrastructure_pb.PageRequest.AsObject,
  }
}

export class QueryEquipmentReply extends jspb.Message {
  getPageResult(): protobuf_infrastructure_pb.PageResult | undefined;
  setPageResult(value?: protobuf_infrastructure_pb.PageResult): QueryEquipmentReply;
  hasPageResult(): boolean;
  clearPageResult(): QueryEquipmentReply;

  getItemsList(): Array<FindEquipmentReply>;
  setItemsList(value: Array<FindEquipmentReply>): QueryEquipmentReply;
  clearItemsList(): QueryEquipmentReply;
  addItems(value?: FindEquipmentReply, index?: number): FindEquipmentReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryEquipmentReply.AsObject;
  static toObject(includeInstance: boolean, msg: QueryEquipmentReply): QueryEquipmentReply.AsObject;
  static serializeBinaryToWriter(message: QueryEquipmentReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryEquipmentReply;
  static deserializeBinaryFromReader(message: QueryEquipmentReply, reader: jspb.BinaryReader): QueryEquipmentReply;
}

export namespace QueryEquipmentReply {
  export type AsObject = {
    pageResult?: protobuf_infrastructure_pb.PageResult.AsObject,
    itemsList: Array<FindEquipmentReply.AsObject>,
  }
}

export enum State { 
  NOTUSED = 0,
  USED = 1,
  ELIMINATE = 2,
}
