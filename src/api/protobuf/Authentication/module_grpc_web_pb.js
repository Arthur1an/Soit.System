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



var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js')

var protobuf_infrastructure_pb = require('../../protobuf/infrastructure_pb.js')
const proto = {};
proto.Soit = {};
proto.Soit.Authentication = require('./module_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.Authentication.ModuleServiceClient =
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
proto.Soit.Authentication.ModuleServicePromiseClient =
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
 *   !proto.Soit.Authentication.CreateModuleRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodDescriptor_ModuleService_Create = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.ModuleService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.CreateModuleRequest,
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  protobuf_infrastructure_pb.Identify.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Authentication.CreateModuleRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodInfo_ModuleService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  protobuf_infrastructure_pb.Identify.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.CreateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Infrastructure.Identify)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Infrastructure.Identify>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.ModuleServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Create',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Create,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.CreateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Infrastructure.Identify>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.ModuleServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Create',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindModuleReply>}
 */
const methodDescriptor_ModuleService_Find = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.ModuleService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.Authentication.FindModuleReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindModuleReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindModuleReply>}
 */
const methodInfo_ModuleService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.FindModuleReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindModuleReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.FindModuleReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.FindModuleReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.ModuleServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Find',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Find,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.FindModuleReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.ModuleServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Find',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.Soit.Authentication.GetModuleTreeReply>}
 */
const methodDescriptor_ModuleService_GetTree = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.ModuleService/GetTree',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.Soit.Authentication.GetModuleTreeReply,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.GetModuleTreeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.Soit.Authentication.GetModuleTreeReply>}
 */
const methodInfo_ModuleService_GetTree = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.GetModuleTreeReply,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.GetModuleTreeReply.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.GetModuleTreeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.GetModuleTreeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.ModuleServiceClient.prototype.getTree =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/GetTree',
      request,
      metadata || {},
      methodDescriptor_ModuleService_GetTree,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.GetModuleTreeReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.ModuleServicePromiseClient.prototype.getTree =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/GetTree',
      request,
      metadata || {},
      methodDescriptor_ModuleService_GetTree);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ModuleService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.ModuleService/Remove',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.IdentifyArray,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Infrastructure.IdentifyArray} request
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
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ModuleService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Infrastructure.IdentifyArray} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.IdentifyArray} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.ModuleServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Remove',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Remove,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.IdentifyArray} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.ModuleServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Remove',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateModuleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_ModuleService_Update = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.ModuleService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateModuleRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateModuleRequest} request
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
 *   !proto.Soit.Authentication.UpdateModuleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_ModuleService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateModuleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.ModuleServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Update',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Update,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateModuleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.ModuleServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.ModuleService/Update',
      request,
      metadata || {},
      methodDescriptor_ModuleService_Update);
};


module.exports = proto.Soit.Authentication;

