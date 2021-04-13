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

var protobuf_infrastructure_pb = require('../../protobuf/infrastructure_pb.js')
const proto = {};
proto.Soit = {};
proto.Soit.Authentication = require('./page_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.Authentication.PageServiceClient =
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
proto.Soit.Authentication.PageServicePromiseClient =
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
 *   !proto.Soit.Authentication.CreatePageRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodDescriptor_PageService_Create = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.PageService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.CreatePageRequest,
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreatePageRequest} request
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
 *   !proto.Soit.Authentication.CreatePageRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodInfo_PageService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreatePageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  protobuf_infrastructure_pb.Identify.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.CreatePageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Infrastructure.Identify)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Infrastructure.Identify>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.PageServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.PageService/Create',
      request,
      metadata || {},
      methodDescriptor_PageService_Create,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.CreatePageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Infrastructure.Identify>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.PageServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.PageService/Create',
      request,
      metadata || {},
      methodDescriptor_PageService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindPageReply>}
 */
const methodDescriptor_PageService_Find = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.PageService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.Authentication.FindPageReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindPageReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindPageReply>}
 */
const methodInfo_PageService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.FindPageReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindPageReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.FindPageReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.FindPageReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.PageServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.PageService/Find',
      request,
      metadata || {},
      methodDescriptor_PageService_Find,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.FindPageReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.PageServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.PageService/Find',
      request,
      metadata || {},
      methodDescriptor_PageService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PageService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.PageService/Remove',
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
const methodInfo_PageService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.Authentication.PageServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.PageService/Remove',
      request,
      metadata || {},
      methodDescriptor_PageService_Remove,
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
proto.Soit.Authentication.PageServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.PageService/Remove',
      request,
      metadata || {},
      methodDescriptor_PageService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdatePageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_PageService_Update = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.PageService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdatePageRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdatePageRequest} request
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
 *   !proto.Soit.Authentication.UpdatePageRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_PageService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdatePageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdatePageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.PageServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.PageService/Update',
      request,
      metadata || {},
      methodDescriptor_PageService_Update,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdatePageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.PageServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.PageService/Update',
      request,
      metadata || {},
      methodDescriptor_PageService_Update);
};


module.exports = proto.Soit.Authentication;

