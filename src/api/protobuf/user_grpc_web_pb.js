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


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var protobuf_infrastructure_pb = require('../protobuf/infrastructure_pb.js')
const proto = {};
proto.Soit = {};
proto.Soit.System = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.System.UserServiceClient =
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
proto.Soit.System.UserServicePromiseClient =
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
 *   !proto.Soit.System.CreateUserRequest,
 *   !proto.google.protobuf.StringValue>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/Soit.System.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.CreateUserRequest,
  google_protobuf_wrappers_pb.StringValue,
  /**
   * @param {!proto.Soit.System.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.StringValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.CreateUserRequest,
 *   !proto.google.protobuf.StringValue>}
 */
const methodInfo_UserService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.StringValue,
  /**
   * @param {!proto.Soit.System.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.Soit.System.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.Soit.System.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.StringValue>}
 *     Promise that resolves to the response
 */
proto.Soit.System.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.System.UserService/Remove',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.IdentifyArray,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.IdentifyArray} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.IdentifyArray} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.System.IdentifyArray} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.UserServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.UserService/Remove',
      request,
      metadata || {},
      methodDescriptor_UserService_Remove,
      callback);
};


/**
 * @param {!proto.Soit.System.IdentifyArray} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.System.UserServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.UserService/Remove',
      request,
      metadata || {},
      methodDescriptor_UserService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.UpdateUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Update = new grpc.web.MethodDescriptor(
  '/Soit.System.UserService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.UpdateUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.UpdateUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.System.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update,
      callback);
};


/**
 * @param {!proto.Soit.System.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.System.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.Identify,
 *   !proto.Soit.System.FindUserReply>}
 */
const methodDescriptor_UserService_Find = new grpc.web.MethodDescriptor(
  '/Soit.System.UserService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.System.FindUserReply,
  /**
   * @param {!proto.Soit.System.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.FindUserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.Identify,
 *   !proto.Soit.System.FindUserReply>}
 */
const methodInfo_UserService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.FindUserReply,
  /**
   * @param {!proto.Soit.System.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.FindUserReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.FindUserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.FindUserReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.UserServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.UserService/Find',
      request,
      metadata || {},
      methodDescriptor_UserService_Find,
      callback);
};


/**
 * @param {!proto.Soit.System.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.FindUserReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.UserServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.UserService/Find',
      request,
      metadata || {},
      methodDescriptor_UserService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.QueryUserRequest,
 *   !proto.Soit.System.QueryUserReply>}
 */
const methodDescriptor_UserService_Query = new grpc.web.MethodDescriptor(
  '/Soit.System.UserService/Query',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.QueryUserRequest,
  proto.Soit.System.QueryUserReply,
  /**
   * @param {!proto.Soit.System.QueryUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.QueryUserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.QueryUserRequest,
 *   !proto.Soit.System.QueryUserReply>}
 */
const methodInfo_UserService_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.QueryUserReply,
  /**
   * @param {!proto.Soit.System.QueryUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.QueryUserReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.QueryUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.QueryUserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.QueryUserReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.UserServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.UserService/Query',
      request,
      metadata || {},
      methodDescriptor_UserService_Query,
      callback);
};


/**
 * @param {!proto.Soit.System.QueryUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.QueryUserReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.UserServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.UserService/Query',
      request,
      metadata || {},
      methodDescriptor_UserService_Query);
};


module.exports = proto.Soit.System;

