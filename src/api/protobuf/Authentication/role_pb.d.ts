import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';


export class ComponentTreeNode extends jspb.Message {
  getId(): number;
  setId(value: number): ComponentTreeNode;

  getName(): string;
  setName(value: string): ComponentTreeNode;

  getIcon(): string;
  setIcon(value: string): ComponentTreeNode;

  getType(): ComponentTreeNode.NodeTypes;
  setType(value: ComponentTreeNode.NodeTypes): ComponentTreeNode;

  getKey(): string;
  setKey(value: string): ComponentTreeNode;

  getNo(): number;
  setNo(value: number): ComponentTreeNode;

  getRoute(): string;
  setRoute(value: string): ComponentTreeNode;

  getShowInMenu(): boolean;
  setShowInMenu(value: boolean): ComponentTreeNode;

  getChildrenList(): Array<ComponentTreeNode>;
  setChildrenList(value: Array<ComponentTreeNode>): ComponentTreeNode;
  clearChildrenList(): ComponentTreeNode;
  addChildren(value?: ComponentTreeNode, index?: number): ComponentTreeNode;

  getEnabled(): boolean;
  setEnabled(value: boolean): ComponentTreeNode;

  getParentId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentId(value?: google_protobuf_wrappers_pb.Int64Value): ComponentTreeNode;
  hasParentId(): boolean;
  clearParentId(): ComponentTreeNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ComponentTreeNode.AsObject;
  static toObject(includeInstance: boolean, msg: ComponentTreeNode): ComponentTreeNode.AsObject;
  static serializeBinaryToWriter(message: ComponentTreeNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ComponentTreeNode;
  static deserializeBinaryFromReader(message: ComponentTreeNode, reader: jspb.BinaryReader): ComponentTreeNode;
}

export namespace ComponentTreeNode {
  export type AsObject = {
    id: number,
    name: string,
    icon: string,
    type: ComponentTreeNode.NodeTypes,
    key: string,
    no: number,
    route: string,
    showInMenu: boolean,
    childrenList: Array<ComponentTreeNode.AsObject>,
    enabled: boolean,
    parentId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
  }

  export enum NodeTypes { 
    MODULE = 0,
    PAGE = 1,
    ELEMENT = 2,
  }
}

export class CreateRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateRoleRequest;

  getDescription(): string;
  setDescription(value: string): CreateRoleRequest;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): CreateRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRequest): CreateRoleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRequest;
  static deserializeBinaryFromReader(message: CreateRoleRequest, reader: jspb.BinaryReader): CreateRoleRequest;
}

export namespace CreateRoleRequest {
  export type AsObject = {
    name: string,
    description: string,
    state: protobuf_infrastructure_pb.EntityStates,
  }
}

export class FindRoleReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindRoleReply;

  getName(): string;
  setName(value: string): FindRoleReply;

  getDescription(): string;
  setDescription(value: string): FindRoleReply;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): FindRoleReply;

  getUsersList(): Array<FindRoleReply.User>;
  setUsersList(value: Array<FindRoleReply.User>): FindRoleReply;
  clearUsersList(): FindRoleReply;
  addUsers(value?: FindRoleReply.User, index?: number): FindRoleReply.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindRoleReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindRoleReply): FindRoleReply.AsObject;
  static serializeBinaryToWriter(message: FindRoleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindRoleReply;
  static deserializeBinaryFromReader(message: FindRoleReply, reader: jspb.BinaryReader): FindRoleReply;
}

export namespace FindRoleReply {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    state: protobuf_infrastructure_pb.EntityStates,
    usersList: Array<FindRoleReply.User.AsObject>,
  }

  export class User extends jspb.Message {
    getId(): number;
    setId(value: number): User;

    getName(): string;
    setName(value: string): User;

    getLegalName(): string;
    setLegalName(value: string): User;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
  }

  export namespace User {
    export type AsObject = {
      id: number,
      name: string,
      legalName: string,
    }
  }

}

export class GetRoleComponentTreeReply extends jspb.Message {
  getNodesList(): Array<ComponentTreeNode>;
  setNodesList(value: Array<ComponentTreeNode>): GetRoleComponentTreeReply;
  clearNodesList(): GetRoleComponentTreeReply;
  addNodes(value?: ComponentTreeNode, index?: number): ComponentTreeNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoleComponentTreeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoleComponentTreeReply): GetRoleComponentTreeReply.AsObject;
  static serializeBinaryToWriter(message: GetRoleComponentTreeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoleComponentTreeReply;
  static deserializeBinaryFromReader(message: GetRoleComponentTreeReply, reader: jspb.BinaryReader): GetRoleComponentTreeReply;
}

export namespace GetRoleComponentTreeReply {
  export type AsObject = {
    nodesList: Array<ComponentTreeNode.AsObject>,
  }
}

export class QueryRoleReply extends jspb.Message {
  getPageResult(): protobuf_infrastructure_pb.PageResult | undefined;
  setPageResult(value?: protobuf_infrastructure_pb.PageResult): QueryRoleReply;
  hasPageResult(): boolean;
  clearPageResult(): QueryRoleReply;

  getItemsList(): Array<FindRoleReply>;
  setItemsList(value: Array<FindRoleReply>): QueryRoleReply;
  clearItemsList(): QueryRoleReply;
  addItems(value?: FindRoleReply, index?: number): FindRoleReply;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRoleReply.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRoleReply): QueryRoleReply.AsObject;
  static serializeBinaryToWriter(message: QueryRoleReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRoleReply;
  static deserializeBinaryFromReader(message: QueryRoleReply, reader: jspb.BinaryReader): QueryRoleReply;
}

export namespace QueryRoleReply {
  export type AsObject = {
    pageResult?: protobuf_infrastructure_pb.PageResult.AsObject,
    itemsList: Array<FindRoleReply.AsObject>,
  }
}

export class QueryRoleRequest extends jspb.Message {
  getContains(): string;
  setContains(value: string): QueryRoleRequest;

  getOrderRequest(): protobuf_infrastructure_pb.OrderRequest | undefined;
  setOrderRequest(value?: protobuf_infrastructure_pb.OrderRequest): QueryRoleRequest;
  hasOrderRequest(): boolean;
  clearOrderRequest(): QueryRoleRequest;

  getPageRequest(): protobuf_infrastructure_pb.PageRequest | undefined;
  setPageRequest(value?: protobuf_infrastructure_pb.PageRequest): QueryRoleRequest;
  hasPageRequest(): boolean;
  clearPageRequest(): QueryRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryRoleRequest): QueryRoleRequest.AsObject;
  static serializeBinaryToWriter(message: QueryRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryRoleRequest;
  static deserializeBinaryFromReader(message: QueryRoleRequest, reader: jspb.BinaryReader): QueryRoleRequest;
}

export namespace QueryRoleRequest {
  export type AsObject = {
    contains: string,
    orderRequest?: protobuf_infrastructure_pb.OrderRequest.AsObject,
    pageRequest?: protobuf_infrastructure_pb.PageRequest.AsObject,
  }
}

export class UpdateRoleComponentsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateRoleComponentsRequest;

  getModuleIdsList(): Array<number>;
  setModuleIdsList(value: Array<number>): UpdateRoleComponentsRequest;
  clearModuleIdsList(): UpdateRoleComponentsRequest;
  addModuleIds(value: number, index?: number): UpdateRoleComponentsRequest;

  getPageIdsList(): Array<number>;
  setPageIdsList(value: Array<number>): UpdateRoleComponentsRequest;
  clearPageIdsList(): UpdateRoleComponentsRequest;
  addPageIds(value: number, index?: number): UpdateRoleComponentsRequest;

  getElementIdsList(): Array<number>;
  setElementIdsList(value: Array<number>): UpdateRoleComponentsRequest;
  clearElementIdsList(): UpdateRoleComponentsRequest;
  addElementIds(value: number, index?: number): UpdateRoleComponentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleComponentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleComponentsRequest): UpdateRoleComponentsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoleComponentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleComponentsRequest;
  static deserializeBinaryFromReader(message: UpdateRoleComponentsRequest, reader: jspb.BinaryReader): UpdateRoleComponentsRequest;
}

export namespace UpdateRoleComponentsRequest {
  export type AsObject = {
    id: number,
    moduleIdsList: Array<number>,
    pageIdsList: Array<number>,
    elementIdsList: Array<number>,
  }
}

export class UpdateRoleRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateRoleRequest;

  getName(): string;
  setName(value: string): UpdateRoleRequest;

  getDescription(): string;
  setDescription(value: string): UpdateRoleRequest;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): UpdateRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleRequest): UpdateRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleRequest;
  static deserializeBinaryFromReader(message: UpdateRoleRequest, reader: jspb.BinaryReader): UpdateRoleRequest;
}

export namespace UpdateRoleRequest {
  export type AsObject = {
    id: number,
    name: string,
    description: string,
    state: protobuf_infrastructure_pb.EntityStates,
  }
}

export class UpdateRoleStatesRequest extends jspb.Message {
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): UpdateRoleStatesRequest;
  clearIdsList(): UpdateRoleStatesRequest;
  addIds(value: number, index?: number): UpdateRoleStatesRequest;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): UpdateRoleStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleStatesRequest): UpdateRoleStatesRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoleStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleStatesRequest;
  static deserializeBinaryFromReader(message: UpdateRoleStatesRequest, reader: jspb.BinaryReader): UpdateRoleStatesRequest;
}

export namespace UpdateRoleStatesRequest {
  export type AsObject = {
    idsList: Array<number>,
    state: protobuf_infrastructure_pb.EntityStates,
  }
}

export class UpdateRoleUsersRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateRoleUsersRequest;

  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): UpdateRoleUsersRequest;
  clearUserIdsList(): UpdateRoleUsersRequest;
  addUserIds(value: number, index?: number): UpdateRoleUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleUsersRequest): UpdateRoleUsersRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoleUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleUsersRequest;
  static deserializeBinaryFromReader(message: UpdateRoleUsersRequest, reader: jspb.BinaryReader): UpdateRoleUsersRequest;
}

export namespace UpdateRoleUsersRequest {
  export type AsObject = {
    id: number,
    userIdsList: Array<number>,
  }
}

