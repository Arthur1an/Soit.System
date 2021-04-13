/**
 * @fileoverview gRPC-Web generated client stub for Soit.Authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as protobuf_infrastructure_pb from '../../protobuf/infrastructure_pb';
import * as protobuf_Authentication_organization_pb from '../../protobuf/Authentication/organization_pb';


export class OrganizationServiceClient {
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
    (request: protobuf_Authentication_organization_pb.CreateOrganizationRequest) => {
      return request.serializeBinary();
    },
    protobuf_infrastructure_pb.Identify.deserializeBinary
  );

  create(
    request: protobuf_Authentication_organization_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_infrastructure_pb.Identify>;

  create(
    request: protobuf_Authentication_organization_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_infrastructure_pb.Identify) => void): grpcWeb.ClientReadableStream<protobuf_infrastructure_pb.Identify>;

  create(
    request: protobuf_Authentication_organization_pb.CreateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_infrastructure_pb.Identify) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.OrganizationService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.OrganizationService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
  }

  methodInfoFind = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_organization_pb.FindOrganizationReply,
    (request: protobuf_infrastructure_pb.Identify) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_organization_pb.FindOrganizationReply.deserializeBinary
  );

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_organization_pb.FindOrganizationReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_organization_pb.FindOrganizationReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_organization_pb.FindOrganizationReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_organization_pb.FindOrganizationReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.OrganizationService/Find',
        request,
        metadata || {},
        this.methodInfoFind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.OrganizationService/Find',
    request,
    metadata || {},
    this.methodInfoFind);
  }

  methodInfoGetTree = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_organization_pb.GetOrganizationTreeReply,
    (request: google_protobuf_empty_pb.Empty) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_organization_pb.GetOrganizationTreeReply.deserializeBinary
  );

  getTree(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_organization_pb.GetOrganizationTreeReply>;

  getTree(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_organization_pb.GetOrganizationTreeReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_organization_pb.GetOrganizationTreeReply>;

  getTree(
    request: google_protobuf_empty_pb.Empty,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_organization_pb.GetOrganizationTreeReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.OrganizationService/GetTree',
        request,
        metadata || {},
        this.methodInfoGetTree,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.OrganizationService/GetTree',
    request,
    metadata || {},
    this.methodInfoGetTree);
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
          '/Soit.Authentication.OrganizationService/Remove',
        request,
        metadata || {},
        this.methodInfoRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.OrganizationService/Remove',
    request,
    metadata || {},
    this.methodInfoRemove);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_organization_pb.UpdateOrganizationRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: protobuf_Authentication_organization_pb.UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_Authentication_organization_pb.UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_Authentication_organization_pb.UpdateOrganizationRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.OrganizationService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.OrganizationService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoUpdateUsers = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  updateUsers(
    request: protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  updateUsers(
    request: protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  updateUsers(
    request: protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.OrganizationService/UpdateUsers',
        request,
        metadata || {},
        this.methodInfoUpdateUsers,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.OrganizationService/UpdateUsers',
    request,
    metadata || {},
    this.methodInfoUpdateUsers);
  }

}

