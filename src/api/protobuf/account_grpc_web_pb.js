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
proto.Soit.System = require('./account_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.System.AccountServiceClient =
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
proto.Soit.System.AccountServicePromiseClient =
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
 *   !proto.Soit.System.CreateAccountRequest,
 *   !proto.google.protobuf.StringValue>}
 */
const methodDescriptor_AccountService_Create = new grpc.web.MethodDescriptor(
  '/Soit.System.AccountService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.CreateAccountRequest,
  google_protobuf_wrappers_pb.StringValue,
  /**
   * @param {!proto.Soit.System.CreateAccountRequest} request
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
 *   !proto.Soit.System.CreateAccountRequest,
 *   !proto.google.protobuf.StringValue>}
 */
const methodInfo_AccountService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.StringValue,
  /**
   * @param {!proto.Soit.System.CreateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.Soit.System.CreateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.AccountServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.AccountService/Create',
      request,
      metadata || {},
      methodDescriptor_AccountService_Create,
      callback);
};


/**
 * @param {!proto.Soit.System.CreateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.StringValue>}
 *     Promise that resolves to the response
 */
proto.Soit.System.AccountServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.AccountService/Create',
      request,
      metadata || {},
      methodDescriptor_AccountService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AccountService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.System.AccountService/Remove',
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
const methodInfo_AccountService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.System.AccountServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.AccountService/Remove',
      request,
      metadata || {},
      methodDescriptor_AccountService_Remove,
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
proto.Soit.System.AccountServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.AccountService/Remove',
      request,
      metadata || {},
      methodDescriptor_AccountService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.UpdateAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_AccountService_Update = new grpc.web.MethodDescriptor(
  '/Soit.System.AccountService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.UpdateAccountRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.UpdateAccountRequest} request
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
 *   !proto.Soit.System.UpdateAccountRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_AccountService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.UpdateAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.System.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.AccountServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.AccountService/Update',
      request,
      metadata || {},
      methodDescriptor_AccountService_Update,
      callback);
};


/**
 * @param {!proto.Soit.System.UpdateAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.System.AccountServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.AccountService/Update',
      request,
      metadata || {},
      methodDescriptor_AccountService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.Identify,
 *   !proto.Soit.System.FindAccountReply>}
 */
const methodDescriptor_AccountService_Find = new grpc.web.MethodDescriptor(
  '/Soit.System.AccountService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.System.FindAccountReply,
  /**
   * @param {!proto.Soit.System.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.FindAccountReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.Identify,
 *   !proto.Soit.System.FindAccountReply>}
 */
const methodInfo_AccountService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.FindAccountReply,
  /**
   * @param {!proto.Soit.System.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.FindAccountReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.FindAccountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.FindAccountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.AccountServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.AccountService/Find',
      request,
      metadata || {},
      methodDescriptor_AccountService_Find,
      callback);
};


/**
 * @param {!proto.Soit.System.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.FindAccountReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.AccountServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.AccountService/Find',
      request,
      metadata || {},
      methodDescriptor_AccountService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.QueryAccountRequest,
 *   !proto.Soit.System.QueryAccountReply>}
 */
const methodDescriptor_AccountService_Query = new grpc.web.MethodDescriptor(
  '/Soit.System.AccountService/Query',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.QueryAccountRequest,
  proto.Soit.System.QueryAccountReply,
  /**
   * @param {!proto.Soit.System.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.QueryAccountReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.QueryAccountRequest,
 *   !proto.Soit.System.QueryAccountReply>}
 */
const methodInfo_AccountService_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.QueryAccountReply,
  /**
   * @param {!proto.Soit.System.QueryAccountRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.QueryAccountReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.QueryAccountReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.QueryAccountReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.AccountServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.AccountService/Query',
      request,
      metadata || {},
      methodDescriptor_AccountService_Query,
      callback);
};


/**
 * @param {!proto.Soit.System.QueryAccountRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.QueryAccountReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.AccountServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.AccountService/Query',
      request,
      metadata || {},
      methodDescriptor_AccountService_Query);
};


module.exports = proto.Soit.System;

