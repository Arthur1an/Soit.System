/**
 * @fileoverview gRPC-Web generated client stub for Soit.System
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.Soit = {};
proto.Soit.System = require('./authenticate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.System.AuthenticateServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.System.AuthenticateServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.LoginRequest,
 *   !proto.Soit.System.LoginReply>}
 */
const methodDescriptor_AuthenticateService_Login = new grpc.web.MethodDescriptor(
  '/Soit.System.AuthenticateService/Login',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.LoginRequest,
  proto.Soit.System.LoginReply,
  /**
   * @param {!proto.Soit.System.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.LoginReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.LoginRequest,
 *   !proto.Soit.System.LoginReply>}
 */
const methodInfo_AuthenticateService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.LoginReply,
  /**
   * @param {!proto.Soit.System.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.LoginReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.LoginReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.LoginReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.AuthenticateServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.AuthenticateService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthenticateService_Login,
      callback);
};


/**
 * @param {!proto.Soit.System.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.LoginReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.AuthenticateServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.AuthenticateService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthenticateService_Login);
};


module.exports = proto.Soit.System;

