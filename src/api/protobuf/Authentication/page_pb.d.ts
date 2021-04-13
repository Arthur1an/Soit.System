import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';


export class CreatePageRequest extends jspb.Message {
  getModuleId(): number;
  setModuleId(value: number): CreatePageRequest;

  getKey(): string;
  setKey(value: string): CreatePageRequest;

  getName(): string;
  setName(value: string): CreatePageRequest;

  getNo(): number;
  setNo(value: number): CreatePageRequest;

  getIcon(): string;
  setIcon(value: string): CreatePageRequest;

  getRoute(): string;
  setRoute(value: string): CreatePageRequest;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): CreatePageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePageRequest): CreatePageRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePageRequest;
  static deserializeBinaryFromReader(message: CreatePageRequest, reader: jspb.BinaryReader): CreatePageRequest;
}

export namespace CreatePageRequest {
  export type AsObject = {
    moduleId: number,
    key: string,
    name: string,
    no: number,
    icon: string,
    route: string,
    showInMenu: boolean,
  }
}

export class FindPageReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindPageReply;

  getModule(): protobuf_infrastructure_pb.NamedIdentify | undefined;
  setModule(value?: protobuf_infrastructure_pb.NamedIdentify): FindPageReply;
  hasModule(): boolean;
  clearModule(): FindPageReply;

  getKey(): string;
  setKey(value: string): FindPageReply;

  getName(): string;
  setName(value: string): FindPageReply;

  getNo(): number;
  setNo(value: number): FindPageReply;

  getIcon(): string;
  setIcon(value: string): FindPageReply;

  getRoute(): string;
  setRoute(value: string): FindPageReply;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): FindPageReply;

  getElementsList(): Array<FindPageReply.Element>;
  setElementsList(value: Array<FindPageReply.Element>): FindPageReply;
  clearElementsList(): FindPageReply;
  addElements(value?: FindPageReply.Element, index?: number): FindPageReply.Element;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindPageReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindPageReply): FindPageReply.AsObject;
  static serializeBinaryToWriter(message: FindPageReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindPageReply;
  static deserializeBinaryFromReader(message: FindPageReply, reader: jspb.BinaryReader): FindPageReply;
}

export namespace FindPageReply {
  export type AsObject = {
    id: number,
    module?: protobuf_infrastructure_pb.NamedIdentify.AsObject,
    key: string,
    name: string,
    no: number,
    icon: string,
    route: string,
    showInMenu: boolean,
    elementsList: Array<FindPageReply.Element.AsObject>,
  }

  export class Element extends jspb.Message {
    getId(): number;
    setId(value: number): Element;

    getKey(): string;
    setKey(value: string): Element;

    getName(): string;
    setName(value: string): Element;

    getType(): protobuf_infrastructure_pb.ElementTypes;
    setType(value: protobuf_infrastructure_pb.ElementTypes): Element;

    getStyle(): string;
    setStyle(value: string): Element;

    getIcon(): string;
    setIcon(value: string): Element;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Element.AsObject;
    static toObject(includeInstance: boolean, msg: Element): Element.AsObject;
    static serializeBinaryToWriter(message: Element, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Element;
    static deserializeBinaryFromReader(message: Element, reader: jspb.BinaryReader): Element;
  }

  export namespace Element {
    export type AsObject = {
      id: number,
      key: string,
      name: string,
      type: protobuf_infrastructure_pb.ElementTypes,
      style: string,
      icon: string,
    }
  }

}

export class UpdatePageRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdatePageRequest;

  getModuleId(): number;
  setModuleId(value: number): UpdatePageRequest;

  getKey(): string;
  setKey(value: string): UpdatePageRequest;

  getName(): string;
  setName(value: string): UpdatePageRequest;

  getNo(): number;
  setNo(value: number): UpdatePageRequest;

  getIcon(): string;
  setIcon(value: string): UpdatePageRequest;

  getRoute(): string;
  setRoute(value: string): UpdatePageRequest;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): UpdatePageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePageRequest): UpdatePageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePageRequest;
  static deserializeBinaryFromReader(message: UpdatePageRequest, reader: jspb.BinaryReader): UpdatePageRequest;
}

export namespace UpdatePageRequest {
  export type AsObject = {
    id: number,
    moduleId: number,
    key: string,
    name: string,
    no: number,
    icon: string,
    route: string,
    showInMenu: boolean,
  }
}

