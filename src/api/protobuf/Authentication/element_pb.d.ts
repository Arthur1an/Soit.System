import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';


export class CreateElementRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): CreateElementRequest;

  getKey(): string;
  setKey(value: string): CreateElementRequest;

  getName(): string;
  setName(value: string): CreateElementRequest;

  getType(): protobuf_infrastructure_pb.ElementTypes;
  setType(value: protobuf_infrastructure_pb.ElementTypes): CreateElementRequest;

  getStyle(): string;
  setStyle(value: string): CreateElementRequest;

  getIcon(): string;
  setIcon(value: string): CreateElementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateElementRequest): CreateElementRequest.AsObject;
  static serializeBinaryToWriter(message: CreateElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateElementRequest;
  static deserializeBinaryFromReader(message: CreateElementRequest, reader: jspb.BinaryReader): CreateElementRequest;
}

export namespace CreateElementRequest {
  export type AsObject = {
    pageId: number,
    key: string,
    name: string,
    type: protobuf_infrastructure_pb.ElementTypes,
    style: string,
    icon: string,
  }
}

export class FindElementReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindElementReply;

  getPage(): protobuf_infrastructure_pb.NamedIdentify | undefined;
  setPage(value?: protobuf_infrastructure_pb.NamedIdentify): FindElementReply;
  hasPage(): boolean;
  clearPage(): FindElementReply;

  getKey(): string;
  setKey(value: string): FindElementReply;

  getName(): string;
  setName(value: string): FindElementReply;

  getType(): protobuf_infrastructure_pb.ElementTypes;
  setType(value: protobuf_infrastructure_pb.ElementTypes): FindElementReply;

  getStyle(): string;
  setStyle(value: string): FindElementReply;

  getIcon(): string;
  setIcon(value: string): FindElementReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindElementReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindElementReply): FindElementReply.AsObject;
  static serializeBinaryToWriter(message: FindElementReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindElementReply;
  static deserializeBinaryFromReader(message: FindElementReply, reader: jspb.BinaryReader): FindElementReply;
}

export namespace FindElementReply {
  export type AsObject = {
    id: number,
    page?: protobuf_infrastructure_pb.NamedIdentify.AsObject,
    key: string,
    name: string,
    type: protobuf_infrastructure_pb.ElementTypes,
    style: string,
    icon: string,
  }
}

export class UpdateElementRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateElementRequest;

  getPageId(): number;
  setPageId(value: number): UpdateElementRequest;

  getKey(): string;
  setKey(value: string): UpdateElementRequest;

  getName(): string;
  setName(value: string): UpdateElementRequest;

  getType(): protobuf_infrastructure_pb.ElementTypes;
  setType(value: protobuf_infrastructure_pb.ElementTypes): UpdateElementRequest;

  getStyle(): string;
  setStyle(value: string): UpdateElementRequest;

  getIcon(): string;
  setIcon(value: string): UpdateElementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateElementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateElementRequest): UpdateElementRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateElementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateElementRequest;
  static deserializeBinaryFromReader(message: UpdateElementRequest, reader: jspb.BinaryReader): UpdateElementRequest;
}

export namespace UpdateElementRequest {
  export type AsObject = {
    id: number,
    pageId: number,
    key: string,
    name: string,
    type: protobuf_infrastructure_pb.ElementTypes,
    style: string,
    icon: string,
  }
}

