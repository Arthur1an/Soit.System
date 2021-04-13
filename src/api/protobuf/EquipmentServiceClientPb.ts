/**
 * @fileoverview gRPC-Web generated client stub for Soit.System
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_wrappers_pb from 'google-protobuf/google/protobuf/wrappers_pb';
import * as protobuf_infrastructure_pb from '../protobuf/infrastructure_pb';
import * as protobuf_equipment_pb from '../protobuf/equipment_pb';


export class EquipmentServiceClient {
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
    google_protobuf_wrappers_pb.StringValue,
    (request: protobuf_equipment_pb.CreateEquipmentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_wrappers_pb.StringValue.deserializeBinary
  );

  create(
    request: protobuf_equipment_pb.CreateEquipmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_wrappers_pb.StringValue>;

  create(
    request: protobuf_equipment_pb.CreateEquipmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.StringValue) => void): grpcWeb.ClientReadableStream<google_protobuf_wrappers_pb.StringValue>;

  create(
    request: protobuf_equipment_pb.CreateEquipmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_wrappers_pb.StringValue) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.System.EquipmentService/Create',
        request,
        metadata || {},
        this.methodInfoCreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.System.EquipmentService/Create',
    request,
    metadata || {},
    this.methodInfoCreate);
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
          '/Soit.System.EquipmentService/Remove',
        request,
        metadata || {},
        this.methodInfoRemove,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.System.EquipmentService/Remove',
    request,
    metadata || {},
    this.methodInfoRemove);
  }

  methodInfoUpdate = new grpcWeb.AbstractClientBase.MethodInfo(
    google_protobuf_empty_pb.Empty,
    (request: protobuf_equipment_pb.UpdateEquipmentRequest) => {
      return request.serializeBinary();
    },
    google_protobuf_empty_pb.Empty.deserializeBinary
  );

  update(
    request: protobuf_equipment_pb.UpdateEquipmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_equipment_pb.UpdateEquipmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void): grpcWeb.ClientReadableStream<google_protobuf_empty_pb.Empty>;

  update(
    request: protobuf_equipment_pb.UpdateEquipmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: google_protobuf_empty_pb.Empty) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.System.EquipmentService/Update',
        request,
        metadata || {},
        this.methodInfoUpdate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.System.EquipmentService/Update',
    request,
    metadata || {},
    this.methodInfoUpdate);
  }

  methodInfoFind = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_equipment_pb.FindEquipmentReply,
    (request: protobuf_infrastructure_pb.Identify) => {
      return request.serializeBinary();
    },
    protobuf_equipment_pb.FindEquipmentReply.deserializeBinary
  );

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_equipment_pb.FindEquipmentReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_equipment_pb.FindEquipmentReply) => void): grpcWeb.ClientReadableStream<protobuf_equipment_pb.FindEquipmentReply>;

  find(
    request: protobuf_infrastructure_pb.Identify,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_equipment_pb.FindEquipmentReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.System.EquipmentService/Find',
        request,
        metadata || {},
        this.methodInfoFind,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.System.EquipmentService/Find',
    request,
    metadata || {},
    this.methodInfoFind);
  }

  methodInfoQuery = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_equipment_pb.QueryEquipmentReply,
    (request: protobuf_equipment_pb.QueryEquipmentRequest) => {
      return request.serializeBinary();
    },
    protobuf_equipment_pb.QueryEquipmentReply.deserializeBinary
  );

  query(
    request: protobuf_equipment_pb.QueryEquipmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_equipment_pb.QueryEquipmentReply>;

  query(
    request: protobuf_equipment_pb.QueryEquipmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_equipment_pb.QueryEquipmentReply) => void): grpcWeb.ClientReadableStream<protobuf_equipment_pb.QueryEquipmentReply>;

  query(
    request: protobuf_equipment_pb.QueryEquipmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_equipment_pb.QueryEquipmentReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.System.EquipmentService/Query',
        request,
        metadata || {},
        this.methodInfoQuery,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.System.EquipmentService/Query',
    request,
    metadata || {},
    this.methodInfoQuery);
  }

}

