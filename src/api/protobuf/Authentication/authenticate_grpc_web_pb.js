/**
 * @fileoverview gRPC-Web generated client stub for Soit.Authentication
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
proto.Soit.Authentication = require('./authenticate_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.Authentication.AuthenticateServiceClient =
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
proto.Soit.Authentication.AuthenticateServicePromiseClient =
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
 *   !proto.Soit.Authentication.LoginRequest,
 *   !proto.Soit.Authentication.LoginReply>}
 */
const methodDescriptor_AuthenticateService_Login = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.AuthenticateService/Login',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.LoginRequest,
  proto.Soit.Authentication.LoginReply,
  /**
   * @param {!proto.Soit.Authentication.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.LoginReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Authentication.LoginRequest,
 *   !proto.Soit.Authentication.LoginReply>}
 */
const methodInfo_AuthenticateService_Login = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.LoginReply,
  /**
   * @param {!proto.Soit.Authentication.LoginRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.LoginReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.LoginReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.LoginReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.AuthenticateServiceClient.prototype.login =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.AuthenticateService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthenticateService_Login,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.LoginReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.AuthenticateServicePromiseClient.prototype.login =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.AuthenticateService/Login',
      request,
      metadata || {},
      methodDescriptor_AuthenticateService_Login);
};


module.exports = proto.Soit.Authentication;

