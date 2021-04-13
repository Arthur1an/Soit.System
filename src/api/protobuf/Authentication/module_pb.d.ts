import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';


export class CreateModuleRequest extends jspb.Message {
  getParentId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentId(value?: google_protobuf_wrappers_pb.Int64Value): CreateModuleRequest;
  hasParentId(): boolean;
  clearParentId(): CreateModuleRequest;

  getName(): string;
  setName(value: string): CreateModuleRequest;

  getNo(): number;
  setNo(value: number): CreateModuleRequest;

  getStyle(): string;
  setStyle(value: string): CreateModuleRequest;

  getIcon(): string;
  setIcon(value: string): CreateModuleRequest;

  getRoute(): string;
  setRoute(value: string): CreateModuleRequest;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): CreateModuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModuleRequest): CreateModuleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModuleRequest;
  static deserializeBinaryFromReader(message: CreateModuleRequest, reader: jspb.BinaryReader): CreateModuleRequest;
}

export namespace CreateModuleRequest {
  export type AsObject = {
    parentId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
    no: number,
    style: string,
    icon: string,
    route: string,
    showInMenu: boolean,
  }
}

export class FindModuleReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindModuleReply;

  getParent(): protobuf_infrastructure_pb.NamedIdentify | undefined;
  setParent(value?: protobuf_infrastructure_pb.NamedIdentify): FindModuleReply;
  hasParent(): boolean;
  clearParent(): FindModuleReply;

  getName(): string;
  setName(value: string): FindModuleReply;

  getNo(): number;
  setNo(value: number): FindModuleReply;

  getStyle(): string;
  setStyle(value: string): FindModuleReply;

  getIcon(): string;
  setIcon(value: string): FindModuleReply;

  getRoute(): string;
  setRoute(value: string): FindModuleReply;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): FindModuleReply;

  getPagesList(): Array<FindModuleReply.Page>;
  setPagesList(value: Array<FindModuleReply.Page>): FindModuleReply;
  clearPagesList(): FindModuleReply;
  addPages(value?: FindModuleReply.Page, index?: number): FindModuleReply.Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindModuleReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindModuleReply): FindModuleReply.AsObject;
  static serializeBinaryToWriter(message: FindModuleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindModuleReply;
  static deserializeBinaryFromReader(message: FindModuleReply, reader: jspb.BinaryReader): FindModuleReply;
}

export namespace FindModuleReply {
  export type AsObject = {
    id: number,
    parent?: protobuf_infrastructure_pb.NamedIdentify.AsObject,
    name: string,
    no: number,
    style: string,
    icon: string,
    route: string,
    showInMenu: boolean,
    pagesList: Array<FindModuleReply.Page.AsObject>,
  }

  export class Page extends jspb.Message {
    getId(): number;
    setId(value: number): Page;

    getKey(): string;
    setKey(value: string): Page;

    getName(): string;
    setName(value: string): Page;

    getNo(): number;
    setNo(value: number): Page;

    getIcon(): string;
    setIcon(value: string): Page;

    getRoute(): string;
    setRoute(value: string): Page;

    getShowInMenu(): boolean;
    setShowInMenu(value: boolean): Page;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
  }

  export namespace Page {
    export type AsObject = {
      id: number,
      key: string,
      name: string,
      no: number,
      icon: string,
      route: string,
      showInMenu: boolean,
    }
  }

}

export class GetModuleTreeReply extends jspb.Message {
  getNodesList(): Array<ModuleTreeNode>;
  setNodesList(value: Array<ModuleTreeNode>): GetModuleTreeReply;
  clearNodesList(): GetModuleTreeReply;
  addNodes(value?: ModuleTreeNode, index?: number): ModuleTreeNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModuleTreeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetModuleTreeReply): GetModuleTreeReply.AsObject;
  static serializeBinaryToWriter(message: GetModuleTreeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModuleTreeReply;
  static deserializeBinaryFromReader(message: GetModuleTreeReply, reader: jspb.BinaryReader): GetModuleTreeReply;
}

export namespace GetModuleTreeReply {
  export type AsObject = {
    nodesList: Array<ModuleTreeNode.AsObject>,
  }
}

export class ModuleTreeNode extends jspb.Message {
  getId(): number;
  setId(value: number): ModuleTreeNode;

  getParent(): protobuf_infrastructure_pb.NamedIdentify | undefined;
  setParent(value?: protobuf_infrastructure_pb.NamedIdentify): ModuleTreeNode;
  hasParent(): boolean;
  clearParent(): ModuleTreeNode;

  getName(): string;
  setName(value: string): ModuleTreeNode;

  getNo(): number;
  setNo(value: number): ModuleTreeNode;

  getStyle(): string;
  setStyle(value: string): ModuleTreeNode;

  getIcon(): string;
  setIcon(value: string): ModuleTreeNode;

  getRoute(): string;
  setRoute(value: string): ModuleTreeNode;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): ModuleTreeNode;

  getChildrenList(): Array<ModuleTreeNode>;
  setChildrenList(value: Array<ModuleTreeNode>): ModuleTreeNode;
  clearChildrenList(): ModuleTreeNode;
  addChildren(value?: ModuleTreeNode, index?: number): ModuleTreeNode;

  getPagesList(): Array<ModuleTreeNode.Page>;
  setPagesList(value: Array<ModuleTreeNode.Page>): ModuleTreeNode;
  clearPagesList(): ModuleTreeNode;
  addPages(value?: ModuleTreeNode.Page, index?: number): ModuleTreeNode.Page;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ModuleTreeNode.AsObject;
  static toObject(includeInstance: boolean, msg: ModuleTreeNode): ModuleTreeNode.AsObject;
  static serializeBinaryToWriter(message: ModuleTreeNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ModuleTreeNode;
  static deserializeBinaryFromReader(message: ModuleTreeNode, reader: jspb.BinaryReader): ModuleTreeNode;
}

export namespace ModuleTreeNode {
  export type AsObject = {
    id: number,
    parent?: protobuf_infrastructure_pb.NamedIdentify.AsObject,
    name: string,
    no: number,
    style: string,
    icon: string,
    route: string,
    showInMenu: boolean,
    childrenList: Array<ModuleTreeNode.AsObject>,
    pagesList: Array<ModuleTreeNode.Page.AsObject>,
  }

  export class Page extends jspb.Message {
    getId(): number;
    setId(value: number): Page;

    getKey(): string;
    setKey(value: string): Page;

    getName(): string;
    setName(value: string): Page;

    getNo(): number;
    setNo(value: number): Page;

    getIcon(): string;
    setIcon(value: string): Page;

    getRoute(): string;
    setRoute(value: string): Page;

    getShowInMenu(): boolean;
    setShowInMenu(value: boolean): Page;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Page.AsObject;
    static toObject(includeInstance: boolean, msg: Page): Page.AsObject;
    static serializeBinaryToWriter(message: Page, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Page;
    static deserializeBinaryFromReader(message: Page, reader: jspb.BinaryReader): Page;
  }

  export namespace Page {
    export type AsObject = {
      id: number,
      key: string,
      name: string,
      no: number,
      icon: string,
      route: string,
      showInMenu: boolean,
    }
  }

}

export class UpdateModuleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateModuleRequest;

  getParentId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentId(value?: google_protobuf_wrappers_pb.Int64Value): UpdateModuleRequest;
  hasParentId(): boolean;
  clearParentId(): UpdateModuleRequest;

  getName(): string;
  setName(value: string): UpdateModuleRequest;

  getNo(): number;
  setNo(value: number): UpdateModuleRequest;

  getStyle(): string;
  setStyle(value: string): UpdateModuleRequest;

  getIcon(): string;
  setIcon(value: string): UpdateModuleRequest;

  getRoute(): string;
  setRoute(value: string): UpdateModuleRequest;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): UpdateModuleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModuleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModuleRequest): UpdateModuleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModuleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModuleRequest;
  static deserializeBinaryFromReader(message: UpdateModuleRequest, reader: jspb.BinaryReader): UpdateModuleRequest;
}

export namespace UpdateModuleRequest {
  export type AsObject = {
    id: number,
    parentId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
    no: number,
    style: string,
    icon: string,
    route: string,
    showInMenu: boolean,
  }
}

