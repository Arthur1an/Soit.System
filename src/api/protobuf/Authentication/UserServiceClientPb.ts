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
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protobuf_Authentication_user_pb from '../../protobuf/Authentication/user_pb';


export class UserServiceClient {
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
    (request: protobuf_Authentication_user_pb.CreateUserRequest) => {
      return request.serializeBinary();
    },
    protobuf_infrastructure_pb.Identify.deserializeBinary
  );

  create(
    request: protobuf_Authentication_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_infrastructure_pb.Identify>;

  create(
    request: protobuf_Authentication_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_infrastructure_pb.Identify) => void): grpcWeb.ClientReadableStream<protobuf_infrastructure_pb.Identify>;

  create(
    request: protobuf_Authentication_user_pb.CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_infrastructure_pb.Identify) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoFind = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_user_pb.FindUserReply,
    (request: protobuf_infrastructure_pb.Identify) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_user_pb.FindUserReply.deserializeBinary
  );

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_user_pb.FindUserReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_user_pb.FindUserReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_user_pb.FindUserReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_user_pb.FindUserReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/Find',
        request,
        metadata || {},
        this.methodInfoFind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/Find',
    request,
    metadata || {},
    this.methodInfoFind);
  }

  methodInfoQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_user_pb.QueryUserReply,
    (request: protobuf_Authentication_user_pb.QueryUserRequest) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_user_pb.QueryUserReply.deserializeBinary
  );

  query(
    request: protobuf_Authentication_user_pb.QueryUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_user_pb.QueryUserReply>;

  query(
    request: protobuf_Authentication_user_pb.QueryUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_user_pb.QueryUserReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_user_pb.QueryUserReply>;

  query(
    request: protobuf_Authentication_user_pb.QueryUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_user_pb.QueryUserReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/Query',
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
          '/Soit.Authentication.UserService/Remove',
        request,
        metadata || {},
        this.methodInfoRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/Remove',
    request,
    metadata || {},
    this.methodInfoRemove);
  }

  methodInfoResetPassword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_infrastructure_pb.IdentifyArray) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  resetPassword(
    request: protobuf_infrastructure_pb.IdentifyArray,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: protobuf_infrastructure_pb.IdentifyArray,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  resetPassword(
    request: protobuf_infrastructure_pb.IdentifyArray,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/ResetPassword',
        request,
        metadata || {},
        this.methodInfoResetPassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/ResetPassword',
    request,
    metadata || {},
    this.methodInfoResetPassword);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_user_pb.UpdateUserRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: protobuf_Authentication_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_Authentication_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_Authentication_user_pb.UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoUpdateOrganizations = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateOrganizations(
    request: protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateOrganizations(
    request: protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateOrganizations(
    request: protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/UpdateOrganizations',
        request,
        metadata || {},
        this.methodInfoUpdateOrganizations,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/UpdateOrganizations',
    request,
    metadata || {},
    this.methodInfoUpdateOrganizations);
  }

  methodInfoUpdatePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_user_pb.UpdatePasswordRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updatePassword(
    request: protobuf_Authentication_user_pb.UpdatePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updatePassword(
    request: protobuf_Authentication_user_pb.UpdatePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updatePassword(
    request: protobuf_Authentication_user_pb.UpdatePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/UpdatePassword',
        request,
        metadata || {},
        this.methodInfoUpdatePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/UpdatePassword',
    request,
    metadata || {},
    this.methodInfoUpdatePassword);
  }

  methodInfoUpdateRoles = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_user_pb.UpdateUserRolesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateRoles(
    request: protobuf_Authentication_user_pb.UpdateUserRolesRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateRoles(
    request: protobuf_Authentication_user_pb.UpdateUserRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateRoles(
    request: protobuf_Authentication_user_pb.UpdateUserRolesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/UpdateRoles',
        request,
        metadata || {},
        this.methodInfoUpdateRoles,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/UpdateRoles',
    request,
    metadata || {},
    this.methodInfoUpdateRoles);
  }

  methodInfoUpdateStates = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_user_pb.UpdateUserStatesRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateStates(
    request: protobuf_Authentication_user_pb.UpdateUserStatesRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateStates(
    request: protobuf_Authentication_user_pb.UpdateUserStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateStates(
    request: protobuf_Authentication_user_pb.UpdateUserStatesRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/UpdateStates',
        request,
        metadata || {},
        this.methodInfoUpdateStates,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/UpdateStates',
    request,
    metadata || {},
    this.methodInfoUpdateStates);
  }

  methodInfoAllowName = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_wrappers_pb.BoolValue,
    (request: protobuf_Authentication_user_pb.AllowNameRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_wrappers_pb.BoolValue.deserializeBinary
  );

  allowName(
    request: protobuf_Authentication_user_pb.AllowNameRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_wrappers_pb.BoolValue>;

  allowName(
    request: protobuf_Authentication_user_pb.AllowNameRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.BoolValue) => void): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.BoolValue>;

  allowName(
    request: protobuf_Authentication_user_pb.AllowNameRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.BoolValue) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.UserService/AllowName',
        request,
        metadata || {},
        this.methodInfoAllowName,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.UserService/AllowName',
    request,
    metadata || {},
    this.methodInfoAllowName);
  }

}

