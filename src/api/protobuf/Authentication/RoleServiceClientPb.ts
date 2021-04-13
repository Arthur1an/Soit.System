/**
 * @fileoverview gRPC-Web generated client stub for Soit.Authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protobuf_Authentication_role_pb from '../../protobuf/Authentication/role_pb';


export class RoleServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreate = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_infrastructure_pb.Identify,
    (request: protobuf_Authentication_role_pb.CreateRoleRequest) => {
      return request.serializeBinary();
    },
    protobuf_infrastructure_pb.Identify.deserializeBinary
  );

  create(
    request: protobuf_Authentication_role_pb.CreateRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_infrastructure_pb.Identify>;

  create(
    request: protobuf_Authentication_role_pb.CreateRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_infrastructure_pb.Identify) => void): grpcWeb.ClientReadableStream<protobuf_infrastructure_pb.Identify>;

  create(
    request: protobuf_Authentication_role_pb.CreateRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_infrastructure_pb.Identify) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoFind = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_role_pb.FindRoleReply,
    (request: protobuf_infrastructure_pb.Identify) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_role_pb.FindRoleReply.deserializeBinary
  );

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_role_pb.FindRoleReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_role_pb.FindRoleReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_role_pb.FindRoleReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_role_pb.FindRoleReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/Find',
        request,
        metadata || {},
        this.methodInfoFind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/Find',
    request,
    metadata || {},
    this.methodInfoFind);
  }

  methodInfoGetComponentTree = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_role_pb.GetRoleComponentTreeReply,
    (request: protobuf_infrastructure_pb.Identify) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_role_pb.GetRoleComponentTreeReply.deserializeBinary
  );

  getComponentTree(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_role_pb.GetRoleComponentTreeReply>;

  getComponentTree(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_role_pb.GetRoleComponentTreeReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_role_pb.GetRoleComponentTreeReply>;

  getComponentTree(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_role_pb.GetRoleComponentTreeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/GetComponentTree',
        request,
        metadata || {},
        this.methodInfoGetComponentTree,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/GetComponentTree',
    request,
    metadata || {},
    this.methodInfoGetComponentTree);
  }

  methodInfoQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_role_pb.QueryRoleReply,
    (request: protobuf_Authentication_role_pb.QueryRoleRequest) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_role_pb.QueryRoleReply.deserializeBinary
  );

  query(
    request: protobuf_Authentication_role_pb.QueryRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_role_pb.QueryRoleReply>;

  query(
    request: protobuf_Authentication_role_pb.QueryRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_role_pb.QueryRoleReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_role_pb.QueryRoleReply>;

  query(
    request: protobuf_Authentication_role_pb.QueryRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_role_pb.QueryRoleReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

  methodInfoRemove = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_infrastructure_pb.IdentifyArray) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  remove(
    request: protobuf_infrastructure_pb.IdentifyArray,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  remove(
    request: protobuf_infrastructure_pb.IdentifyArray,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  remove(
    request: protobuf_infrastructure_pb.IdentifyArray,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/Remove',
        request,
        metadata || {},
        this.methodInfoRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/Remove',
    request,
    metadata || {},
    this.methodInfoRemove);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_role_pb.UpdateRoleRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: protobuf_Authentication_role_pb.UpdateRoleRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_Authentication_role_pb.UpdateRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_Authentication_role_pb.UpdateRoleRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoUpdateComponents = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_role_pb.UpdateRoleComponentsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateComponents(
    request: protobuf_Authentication_role_pb.UpdateRoleComponentsRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateComponents(
    request: protobuf_Authentication_role_pb.UpdateRoleComponentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateComponents(
    request: protobuf_Authentication_role_pb.UpdateRoleComponentsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/UpdateComponents',
        request,
        metadata || {},
        this.methodInfoUpdateComponents,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateComponents',
    request,
    metadata || {},
    this.methodInfoUpdateComponents);
  }

  methodInfoUpdateStates = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_role_pb.UpdateRoleStatesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateStates(
    request: protobuf_Authentication_role_pb.UpdateRoleStatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateStates(
    request: protobuf_Authentication_role_pb.UpdateRoleStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateStates(
    request: protobuf_Authentication_role_pb.UpdateRoleStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/UpdateStates',
        request,
        metadata || {},
        this.methodInfoUpdateStates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateStates',
    request,
    metadata || {},
    this.methodInfoUpdateStates);
  }

  methodInfoUpdateUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_role_pb.UpdateRoleUsersRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateUsers(
    request: protobuf_Authentication_role_pb.UpdateRoleUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateUsers(
    request: protobuf_Authentication_role_pb.UpdateRoleUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateUsers(
    request: protobuf_Authentication_role_pb.UpdateRoleUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.RoleService/UpdateUsers',
        request,
        metadata || {},
        this.methodInfoUpdateUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateUsers',
    request,
    metadata || {},
    this.methodInfoUpdateUsers);
  }

}

