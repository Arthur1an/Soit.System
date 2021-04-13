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
proto.Soit.Authentication = require('./organization_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.Authentication.OrganizationServiceClient =
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
proto.Soit.Authentication.OrganizationServicePromiseClient =
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
 *   !proto.Soit.Authentication.CreateOrganizationRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodDescriptor_OrganizationService_Create = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.OrganizationService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.CreateOrganizationRequest,
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateOrganizationRequest} request
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
 *   !proto.Soit.Authentication.CreateOrganizationRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodInfo_OrganizationService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  protobuf_infrastructure_pb.Identify.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.CreateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Infrastructure.Identify)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Infrastructure.Identify>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.OrganizationServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Create',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Create,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.CreateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Infrastructure.Identify>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.OrganizationServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Create',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindOrganizationReply>}
 */
const methodDescriptor_OrganizationService_Find = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.OrganizationService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.Authentication.FindOrganizationReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindOrganizationReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindOrganizationReply>}
 */
const methodInfo_OrganizationService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.FindOrganizationReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindOrganizationReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.FindOrganizationReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.FindOrganizationReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.OrganizationServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Find',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Find,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.FindOrganizationReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.OrganizationServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Find',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.Soit.Authentication.GetOrganizationTreeReply>}
 */
const methodDescriptor_OrganizationService_GetTree = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.OrganizationService/GetTree',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.Soit.Authentication.GetOrganizationTreeReply,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.GetOrganizationTreeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.Soit.Authentication.GetOrganizationTreeReply>}
 */
const methodInfo_OrganizationService_GetTree = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.GetOrganizationTreeReply,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.GetOrganizationTreeReply.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.GetOrganizationTreeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.GetOrganizationTreeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.OrganizationServiceClient.prototype.getTree =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/GetTree',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetTree,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.GetOrganizationTreeReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.OrganizationServicePromiseClient.prototype.getTree =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/GetTree',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_GetTree);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OrganizationService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.OrganizationService/Remove',
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
const methodInfo_OrganizationService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.Authentication.OrganizationServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Remove',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Remove,
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
proto.Soit.Authentication.OrganizationServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Remove',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateOrganizationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OrganizationService_Update = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.OrganizationService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateOrganizationRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateOrganizationRequest} request
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
 *   !proto.Soit.Authentication.UpdateOrganizationRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_OrganizationService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateOrganizationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.OrganizationServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Update',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Update,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateOrganizationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.OrganizationServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/Update',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateOrganizationUsersRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_OrganizationService_UpdateUsers = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.OrganizationService/UpdateUsers',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateOrganizationUsersRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateOrganizationUsersRequest} request
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
 *   !proto.Soit.Authentication.UpdateOrganizationUsersRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_OrganizationService_UpdateUsers = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateOrganizationUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateOrganizationUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.OrganizationServiceClient.prototype.updateUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/UpdateUsers',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_UpdateUsers,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateOrganizationUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.OrganizationServicePromiseClient.prototype.updateUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.OrganizationService/UpdateUsers',
      request,
      metadata || {},
      methodDescriptor_OrganizationService_UpdateUsers);
};


module.exports = proto.Soit.Authentication;

