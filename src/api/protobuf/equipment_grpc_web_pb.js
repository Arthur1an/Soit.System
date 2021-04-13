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
proto.Soit.System = require('./equipment_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.System.EquipmentServiceClient =
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
proto.Soit.System.EquipmentServicePromiseClient =
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
 *   !proto.Soit.System.CreateEquipmentRequest,
 *   !proto.google.protobuf.StringValue>}
 */
const methodDescriptor_EquipmentService_Create = new grpc.web.MethodDescriptor(
  '/Soit.System.EquipmentService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.CreateEquipmentRequest,
  google_protobuf_wrappers_pb.StringValue,
  /**
   * @param {!proto.Soit.System.CreateEquipmentRequest} request
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
 *   !proto.Soit.System.CreateEquipmentRequest,
 *   !proto.google.protobuf.StringValue>}
 */
const methodInfo_EquipmentService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.StringValue,
  /**
   * @param {!proto.Soit.System.CreateEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.StringValue.deserializeBinary
);


/**
 * @param {!proto.Soit.System.CreateEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.StringValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.StringValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.EquipmentServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.EquipmentService/Create',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Create,
      callback);
};


/**
 * @param {!proto.Soit.System.CreateEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.StringValue>}
 *     Promise that resolves to the response
 */
proto.Soit.System.EquipmentServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.EquipmentService/Create',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EquipmentService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.System.EquipmentService/Remove',
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
const methodInfo_EquipmentService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.System.EquipmentServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.EquipmentService/Remove',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Remove,
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
proto.Soit.System.EquipmentServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.EquipmentService/Remove',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.UpdateEquipmentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_EquipmentService_Update = new grpc.web.MethodDescriptor(
  '/Soit.System.EquipmentService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.UpdateEquipmentRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.UpdateEquipmentRequest} request
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
 *   !proto.Soit.System.UpdateEquipmentRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_EquipmentService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.System.UpdateEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.System.UpdateEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.EquipmentServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.EquipmentService/Update',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Update,
      callback);
};


/**
 * @param {!proto.Soit.System.UpdateEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.System.EquipmentServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.EquipmentService/Update',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.Identify,
 *   !proto.Soit.System.FindEquipmentReply>}
 */
const methodDescriptor_EquipmentService_Find = new grpc.web.MethodDescriptor(
  '/Soit.System.EquipmentService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.System.FindEquipmentReply,
  /**
   * @param {!proto.Soit.System.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.FindEquipmentReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.Identify,
 *   !proto.Soit.System.FindEquipmentReply>}
 */
const methodInfo_EquipmentService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.FindEquipmentReply,
  /**
   * @param {!proto.Soit.System.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.FindEquipmentReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.FindEquipmentReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.FindEquipmentReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.EquipmentServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.EquipmentService/Find',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Find,
      callback);
};


/**
 * @param {!proto.Soit.System.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.FindEquipmentReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.EquipmentServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.EquipmentService/Find',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.System.QueryEquipmentRequest,
 *   !proto.Soit.System.QueryEquipmentReply>}
 */
const methodDescriptor_EquipmentService_Query = new grpc.web.MethodDescriptor(
  '/Soit.System.EquipmentService/Query',
  grpc.web.MethodType.UNARY,
  proto.Soit.System.QueryEquipmentRequest,
  proto.Soit.System.QueryEquipmentReply,
  /**
   * @param {!proto.Soit.System.QueryEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.QueryEquipmentReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.System.QueryEquipmentRequest,
 *   !proto.Soit.System.QueryEquipmentReply>}
 */
const methodInfo_EquipmentService_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.System.QueryEquipmentReply,
  /**
   * @param {!proto.Soit.System.QueryEquipmentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.System.QueryEquipmentReply.deserializeBinary
);


/**
 * @param {!proto.Soit.System.QueryEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.System.QueryEquipmentReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.System.QueryEquipmentReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.System.EquipmentServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.System.EquipmentService/Query',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Query,
      callback);
};


/**
 * @param {!proto.Soit.System.QueryEquipmentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.System.QueryEquipmentReply>}
 *     Promise that resolves to the response
 */
proto.Soit.System.EquipmentServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.System.EquipmentService/Query',
      request,
      metadata || {},
      methodDescriptor_EquipmentService_Query);
};


module.exports = proto.Soit.System;

