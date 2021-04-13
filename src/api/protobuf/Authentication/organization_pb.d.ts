import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';


export class CreateOrganizationRequest extends jspb.Message {
  getParentId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentId(value?: google_protobuf_wrappers_pb.Int64Value): CreateOrganizationRequest;
  hasParentId(): boolean;
  clearParentId(): CreateOrganizationRequest;

  getName(): string;
  setName(value: string): CreateOrganizationRequest;

  getDescription(): string;
  setDescription(value: string): CreateOrganizationRequest;

  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): CreateOrganizationRequest;
  clearUserIdsList(): CreateOrganizationRequest;
  addUserIds(value: number, index?: number): CreateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateOrganizationRequest): CreateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateOrganizationRequest;
  static deserializeBinaryFromReader(message: CreateOrganizationRequest, reader: jspb.BinaryReader): CreateOrganizationRequest;
}

export namespace CreateOrganizationRequest {
  export type AsObject = {
    parentId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
    description: string,
    userIdsList: Array<number>,
  }
}

export class FindOrganizationReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindOrganizationReply;

  getParent(): protobuf_infrastructure_pb.NamedIdentify | undefined;
  setParent(value?: protobuf_infrastructure_pb.NamedIdentify): FindOrganizationReply;
  hasParent(): boolean;
  clearParent(): FindOrganizationReply;

  getName(): string;
  setName(value: string): FindOrganizationReply;

  getDescription(): string;
  setDescription(value: string): FindOrganizationReply;

  getUsersList(): Array<FindOrganizationReply.User>;
  setUsersList(value: Array<FindOrganizationReply.User>): FindOrganizationReply;
  clearUsersList(): FindOrganizationReply;
  addUsers(value?: FindOrganizationReply.User, index?: number): FindOrganizationReply.User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FindOrganizationReply.AsObject;
  static toObject(includeInstance: boolean, msg: FindOrganizationReply): FindOrganizationReply.AsObject;
  static serializeBinaryToWriter(message: FindOrganizationReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FindOrganizationReply;
  static deserializeBinaryFromReader(message: FindOrganizationReply, reader: jspb.BinaryReader): FindOrganizationReply;
}

export namespace FindOrganizationReply {
  export type AsObject = {
    id: number,
    parent?: protobuf_infrastructure_pb.NamedIdentify.AsObject,
    name: string,
    description: string,
    usersList: Array<FindOrganizationReply.User.AsObject>,
  }

  export class User extends jspb.Message {
    getId(): number;
    setId(value: number): User;

    getName(): string;
    setName(value: string): User;

    getLegalName(): string;
    setLegalName(value: string): User;

    getState(): protobuf_infrastructure_pb.EntityStates;
    setState(value: protobuf_infrastructure_pb.EntityStates): User;

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
      state: protobuf_infrastructure_pb.EntityStates,
    }
  }

}

export class GetOrganizationTreeReply extends jspb.Message {
  getNodesList(): Array<OrganizationTreeNode>;
  setNodesList(value: Array<OrganizationTreeNode>): GetOrganizationTreeReply;
  clearNodesList(): GetOrganizationTreeReply;
  addNodes(value?: OrganizationTreeNode, index?: number): OrganizationTreeNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetOrganizationTreeReply.AsObject;
  static toObject(includeInstance: boolean, msg: GetOrganizationTreeReply): GetOrganizationTreeReply.AsObject;
  static serializeBinaryToWriter(message: GetOrganizationTreeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetOrganizationTreeReply;
  static deserializeBinaryFromReader(message: GetOrganizationTreeReply, reader: jspb.BinaryReader): GetOrganizationTreeReply;
}

export namespace GetOrganizationTreeReply {
  export type AsObject = {
    nodesList: Array<OrganizationTreeNode.AsObject>,
  }
}

export class OrganizationTreeNode extends jspb.Message {
  getId(): number;
  setId(value: number): OrganizationTreeNode;

  getParent(): protobuf_infrastructure_pb.NamedIdentify | undefined;
  setParent(value?: protobuf_infrastructure_pb.NamedIdentify): OrganizationTreeNode;
  hasParent(): boolean;
  clearParent(): OrganizationTreeNode;

  getName(): string;
  setName(value: string): OrganizationTreeNode;

  getDescription(): string;
  setDescription(value: string): OrganizationTreeNode;

  getChildrenList(): Array<OrganizationTreeNode>;
  setChildrenList(value: Array<OrganizationTreeNode>): OrganizationTreeNode;
  clearChildrenList(): OrganizationTreeNode;
  addChildren(value?: OrganizationTreeNode, index?: number): OrganizationTreeNode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrganizationTreeNode.AsObject;
  static toObject(includeInstance: boolean, msg: OrganizationTreeNode): OrganizationTreeNode.AsObject;
  static serializeBinaryToWriter(message: OrganizationTreeNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrganizationTreeNode;
  static deserializeBinaryFromReader(message: OrganizationTreeNode, reader: jspb.BinaryReader): OrganizationTreeNode;
}

export namespace OrganizationTreeNode {
  export type AsObject = {
    id: number,
    parent?: protobuf_infrastructure_pb.NamedIdentify.AsObject,
    name: string,
    description: string,
    childrenList: Array<OrganizationTreeNode.AsObject>,
  }
}

export class UpdateOrganizationRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateOrganizationRequest;

  getParentId(): google_protobuf_wrappers_pb.Int64Value | undefined;
  setParentId(value?: google_protobuf_wrappers_pb.Int64Value): UpdateOrganizationRequest;
  hasParentId(): boolean;
  clearParentId(): UpdateOrganizationRequest;

  getName(): string;
  setName(value: string): UpdateOrganizationRequest;

  getDescription(): string;
  setDescription(value: string): UpdateOrganizationRequest;

  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): UpdateOrganizationRequest;
  clearUserIdsList(): UpdateOrganizationRequest;
  addUserIds(value: number, index?: number): UpdateOrganizationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationRequest): UpdateOrganizationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOrganizationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationRequest, reader: jspb.BinaryReader): UpdateOrganizationRequest;
}

export namespace UpdateOrganizationRequest {
  export type AsObject = {
    id: number,
    parentId?: google_protobuf_wrappers_pb.Int64Value.AsObject,
    name: string,
    description: string,
    userIdsList: Array<number>,
  }
}

export class UpdateOrganizationUsersRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateOrganizationUsersRequest;

  getUserIdsList(): Array<number>;
  setUserIdsList(value: Array<number>): UpdateOrganizationUsersRequest;
  clearUserIdsList(): UpdateOrganizationUsersRequest;
  addUserIds(value: number, index?: number): UpdateOrganizationUsersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateOrganizationUsersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateOrganizationUsersRequest): UpdateOrganizationUsersRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateOrganizationUsersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateOrganizationUsersRequest;
  static deserializeBinaryFromReader(message: UpdateOrganizationUsersRequest, reader: jspb.BinaryReader): UpdateOrganizationUsersRequest;
}

export namespace UpdateOrganizationUsersRequest {
  export type AsObject = {
    id: number,
    userIdsList: Array<number>,
  }
}

