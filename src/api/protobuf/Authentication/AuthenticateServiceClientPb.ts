/**
 * @fileoverview gRPC-Web generated client stub for Soit.Authentication
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as protobuf_Authentication_authenticate_pb from '../../protobuf/Authentication/authenticate_pb';


export class AuthenticateServiceClient {
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

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    protobuf_Authentication_authenticate_pb.LoginReply,
    (request: protobuf_Authentication_authenticate_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    protobuf_Authentication_authenticate_pb.LoginReply.deserializeBinary
  );

  login(
    request: protobuf_Authentication_authenticate_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<protobuf_Authentication_authenticate_pb.LoginReply>;

  login(
    request: protobuf_Authentication_authenticate_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: protobuf_Authentication_authenticate_pb.LoginReply) => void): grpcWeb.ClientReadableStream<protobuf_Authentication_authenticate_pb.LoginReply>;

  login(
    request: protobuf_Authentication_authenticate_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: protobuf_Authentication_authenticate_pb.LoginReply) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/Soit.Authentication.AuthenticateService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/Soit.Authentication.AuthenticateService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

}

