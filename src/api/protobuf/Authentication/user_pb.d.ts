import * as jspb from 'google-protobuf'

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';


export class CreateUserRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateUserRequest;

  getCipher(): string;
  setCipher(value: string): CreateUserRequest;

  getLegalName(): string;
  setLegalName(value: string): CreateUserRequest;

  getDescription(): string;
  setDescription(value: string): CreateUserRequest;

  getMobile(): string;
  setMobile(value: string): CreateUserRequest;

  getPhone(): string;
  setPhone(value: string): CreateUserRequest;

  getEmail(): string;
  setEmail(value: string): CreateUserRequest;

  getPhoto(): string;
  setPhoto(value: string): CreateUserRequest;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): CreateUserRequest;

  getOrganizationIdsList(): Array<number>;
  setOrganizationIdsList(value: Array<number>): CreateUserRequest;
  clearOrganizationIdsList(): CreateUserRequest;
  addOrganizationIds(value: number, index?: number): CreateUserRequest;

  getRoleIdsList(): Array<number>;
  setRoleIdsList(value: Array<number>): CreateUserRequest;
  clearRoleIdsList(): CreateUserRequest;
  addRoleIds(value: number, index?: number): CreateUserRequest;

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
    cipher: string,
    legalName: string,
    description: string,
    mobile: string,
    phone: string,
    email: string,
    photo: string,
    state: protobuf_infrastructure_pb.EntityStates,
    organizationIdsList: Array<number>,
    roleIdsList: Array<number>,
  }
}

export class FindUserReply extends jspb.Message {
  getId(): number;
  setId(value: number): FindUserReply;

  getName(): string;
  setName(value: string): FindUserReply;

  getCipher(): string;
  setCipher(value: string): FindUserReply;

  getLegalName(): string;
  setLegalName(value: string): FindUserReply;

  getDescription(): string;
  setDescription(value: string): FindUserReply;

  getMobile(): string;
  setMobile(value: string): FindUserReply;

  getPhone(): string;
  setPhone(value: string): FindUserReply;

  getEmail(): string;
  setEmail(value: string): FindUserReply;

  getPhoto(): string;
  setPhoto(value: string): FindUserReply;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): FindUserReply;

  getOrganizationsList(): Array<protobuf_infrastructure_pb.NamedIdentify>;
  setOrganizationsList(value: Array<protobuf_infrastructure_pb.NamedIdentify>): FindUserReply;
  clearOrganizationsList(): FindUserReply;
  addOrganizations(value?: protobuf_infrastructure_pb.NamedIdentify, index?: number): protobuf_infrastructure_pb.NamedIdentify;

  getRolesList(): Array<protobuf_infrastructure_pb.NamedIdentify>;
  setRolesList(value: Array<protobuf_infrastructure_pb.NamedIdentify>): FindUserReply;
  clearRolesList(): FindUserReply;
  addRoles(value?: protobuf_infrastructure_pb.NamedIdentify, index?: number): protobuf_infrastructure_pb.NamedIdentify;

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
    cipher: string,
    legalName: string,
    description: string,
    mobile: string,
    phone: string,
    email: string,
    photo: string,
    state: protobuf_infrastructure_pb.EntityStates,
    organizationsList: Array<protobuf_infrastructure_pb.NamedIdentify.AsObject>,
    rolesList: Array<protobuf_infrastructure_pb.NamedIdentify.AsObject>,
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

export class UpdatePasswordRequest extends jspb.Message {
  getOldCipher(): string;
  setOldCipher(value: string): UpdatePasswordRequest;

  getNewCipher(): string;
  setNewCipher(value: string): UpdatePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePasswordRequest): UpdatePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePasswordRequest;
  static deserializeBinaryFromReader(message: UpdatePasswordRequest, reader: jspb.BinaryReader): UpdatePasswordRequest;
}

export namespace UpdatePasswordRequest {
  export type AsObject = {
    oldCipher: string,
    newCipher: string,
  }
}

export class UpdateUserOrganizationsRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateUserOrganizationsRequest;

  getOrganizationIdsList(): Array<number>;
  setOrganizationIdsList(value: Array<number>): UpdateUserOrganizationsRequest;
  clearOrganizationIdsList(): UpdateUserOrganizationsRequest;
  addOrganizationIds(value: number, index?: number): UpdateUserOrganizationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserOrganizationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserOrganizationsRequest): UpdateUserOrganizationsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserOrganizationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserOrganizationsRequest;
  static deserializeBinaryFromReader(message: UpdateUserOrganizationsRequest, reader: jspb.BinaryReader): UpdateUserOrganizationsRequest;
}

export namespace UpdateUserOrganizationsRequest {
  export type AsObject = {
    id: number,
    organizationIdsList: Array<number>,
  }
}

export class UpdateUserRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateUserRequest;

  getLegalName(): string;
  setLegalName(value: string): UpdateUserRequest;

  getDescription(): string;
  setDescription(value: string): UpdateUserRequest;

  getMobile(): string;
  setMobile(value: string): UpdateUserRequest;

  getPhone(): string;
  setPhone(value: string): UpdateUserRequest;

  getEmail(): string;
  setEmail(value: string): UpdateUserRequest;

  getPhoto(): string;
  setPhoto(value: string): UpdateUserRequest;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): UpdateUserRequest;

  getOrganizationIdsList(): Array<number>;
  setOrganizationIdsList(value: Array<number>): UpdateUserRequest;
  clearOrganizationIdsList(): UpdateUserRequest;
  addOrganizationIds(value: number, index?: number): UpdateUserRequest;

  getRoleIdsList(): Array<number>;
  setRoleIdsList(value: Array<number>): UpdateUserRequest;
  clearRoleIdsList(): UpdateUserRequest;
  addRoleIds(value: number, index?: number): UpdateUserRequest;

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
    legalName: string,
    description: string,
    mobile: string,
    phone: string,
    email: string,
    photo: string,
    state: protobuf_infrastructure_pb.EntityStates,
    organizationIdsList: Array<number>,
    roleIdsList: Array<number>,
  }
}

export class UpdateUserRolesRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateUserRolesRequest;

  getRoleIdsList(): Array<number>;
  setRoleIdsList(value: Array<number>): UpdateUserRolesRequest;
  clearRoleIdsList(): UpdateUserRolesRequest;
  addRoleIds(value: number, index?: number): UpdateUserRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserRolesRequest): UpdateUserRolesRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserRolesRequest;
  static deserializeBinaryFromReader(message: UpdateUserRolesRequest, reader: jspb.BinaryReader): UpdateUserRolesRequest;
}

export namespace UpdateUserRolesRequest {
  export type AsObject = {
    id: number,
    roleIdsList: Array<number>,
  }
}

export class UpdateUserStatesRequest extends jspb.Message {
  getIdsList(): Array<number>;
  setIdsList(value: Array<number>): UpdateUserStatesRequest;
  clearIdsList(): UpdateUserStatesRequest;
  addIds(value: number, index?: number): UpdateUserStatesRequest;

  getState(): protobuf_infrastructure_pb.EntityStates;
  setState(value: protobuf_infrastructure_pb.EntityStates): UpdateUserStatesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserStatesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserStatesRequest): UpdateUserStatesRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserStatesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserStatesRequest;
  static deserializeBinaryFromReader(message: UpdateUserStatesRequest, reader: jspb.BinaryReader): UpdateUserStatesRequest;
}

export namespace UpdateUserStatesRequest {
  export type AsObject = {
    idsList: Array<number>,
    state: protobuf_infrastructure_pb.EntityStates,
  }
}

export class AllowNameRequest extends jspb.Message {
  getName(): string;
  setName(value: string): AllowNameRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AllowNameRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AllowNameRequest): AllowNameRequest.AsObject;
  static serializeBinaryToWriter(message: AllowNameRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AllowNameRequest;
  static deserializeBinaryFromReader(message: AllowNameRequest, reader: jspb.BinaryReader): AllowNameRequest;
}

export namespace AllowNameRequest {
  export type AsObject = {
    name: string,
  }
}

