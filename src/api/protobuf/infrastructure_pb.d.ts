import * as jspb from 'google-protobuf'



export class Identify extends jspb.Message {
  getId(): number;
  setId(value: number): Identify;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Identify.AsObject;
  static toObject(includeInstance: boolean, msg: Identify): Identify.AsObject;
  static serializeBinaryToWriter(message: Identify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Identify;
  static deserializeBinaryFromReader(message: Identify, reader: jspb.BinaryReader): Identify;
}

export namespace Identify {
  export type AsObject = {
    id: number,
  }
}

export class IdentifyArray extends jspb.Message {
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): IdentifyArray;
  clearIdsList(): IdentifyArray;
  addIds(value: number, index?: number): IdentifyArray;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentifyArray.AsObject;
  static toObject(includeInstance: boolean, msg: IdentifyArray): IdentifyArray.AsObject;
  static serializeBinaryToWriter(message: IdentifyArray, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentifyArray;
  static deserializeBinaryFromReader(message: IdentifyArray, reader: jspb.BinaryReader): IdentifyArray;
}

export namespace IdentifyArray {
  export type AsObject = {
    idsList: Array<number>,
  }
}

export class NamedIdentify extends jspb.Message {
  getId(): number;
  setId(value: number): NamedIdentify;

  getName(): string;
  setName(value: string): NamedIdentify;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NamedIdentify.AsObject;
  static toObject(includeInstance: boolean, msg: NamedIdentify): NamedIdentify.AsObject;
  static serializeBinaryToWriter(message: NamedIdentify, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NamedIdentify;
  static deserializeBinaryFromReader(message: NamedIdentify, reader: jspb.BinaryReader): NamedIdentify;
}

export namespace NamedIdentify {
  export type AsObject = {
    id: number,
    name: string,
  }
}

export class OrderRequest extends jspb.Message {
  getOrderBy(): string;
  setOrderBy(value: string): OrderRequest;

  getDescending(): boolean;
  setDescending(value: boolean): OrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderRequest): OrderRequest.AsObject;
  static serializeBinaryToWriter(message: OrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderRequest;
  static deserializeBinaryFromReader(message: OrderRequest, reader: jspb.BinaryReader): OrderRequest;
}

export namespace OrderRequest {
  export type AsObject = {
    orderBy: string,
    descending: boolean,
  }
}

export class PageRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): PageRequest;

  getPageSize(): number;
  setPageSize(value: number): PageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageRequest): PageRequest.AsObject;
  static serializeBinaryToWriter(message: PageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageRequest;
  static deserializeBinaryFromReader(message: PageRequest, reader: jspb.BinaryReader): PageRequest;
}

export namespace PageRequest {
  export type AsObject = {
    page: number,
    pageSize: number,
  }
}

export class PageResult extends jspb.Message {
  getPage(): number;
  setPage(value: number): PageResult;

  getPageSize(): number;
  setPageSize(value: number): PageResult;

  getPageCount(): number;
  setPageCount(value: number): PageResult;

  getRowCount(): number;
  setRowCount(value: number): PageResult;

  getFirstRow(): number;
  setFirstRow(value: number): PageResult;

  getLastRow(): number;
  setLastRow(value: number): PageResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageResult.AsObject;
  static toObject(includeInstance: boolean, msg: PageResult): PageResult.AsObject;
  static serializeBinaryToWriter(message: PageResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageResult;
  static deserializeBinaryFromReader(message: PageResult, reader: jspb.BinaryReader): PageResult;
}

export namespace PageResult {
  export type AsObject = {
    page: number,
    pageSize: number,
    pageCount: number,
    rowCount: number,
    firstRow: number,
    lastRow: number,
  }
}

export enum EntityStates { 
  ENABLE = 0,
  DISABLE = 1,
}
export enum ElementTypes { 
  BUTTON = 0,
  MENU = 1,
}
