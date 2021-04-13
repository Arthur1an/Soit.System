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
proto.Soit.Authentication = require('./role_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.Authentication.RoleServiceClient =
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
proto.Soit.Authentication.RoleServicePromiseClient =
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
 *   !proto.Soit.Authentication.CreateRoleRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodDescriptor_RoleService_Create = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.CreateRoleRequest,
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateRoleRequest} request
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
 *   !proto.Soit.Authentication.CreateRoleRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodInfo_RoleService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  protobuf_infrastructure_pb.Identify.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Infrastructure.Identify)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Infrastructure.Identify>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Create',
      request,
      metadata || {},
      methodDescriptor_RoleService_Create,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.CreateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Infrastructure.Identify>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Create',
      request,
      metadata || {},
      methodDescriptor_RoleService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindRoleReply>}
 */
const methodDescriptor_RoleService_Find = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.Authentication.FindRoleReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindRoleReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindRoleReply>}
 */
const methodInfo_RoleService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.FindRoleReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindRoleReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.FindRoleReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.FindRoleReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Find',
      request,
      metadata || {},
      methodDescriptor_RoleService_Find,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.FindRoleReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Find',
      request,
      metadata || {},
      methodDescriptor_RoleService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.GetRoleComponentTreeReply>}
 */
const methodDescriptor_RoleService_GetComponentTree = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/GetComponentTree',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.Authentication.GetRoleComponentTreeReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.GetRoleComponentTreeReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.GetRoleComponentTreeReply>}
 */
const methodInfo_RoleService_GetComponentTree = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.GetRoleComponentTreeReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.GetRoleComponentTreeReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.GetRoleComponentTreeReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.GetRoleComponentTreeReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.getComponentTree =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/GetComponentTree',
      request,
      metadata || {},
      methodDescriptor_RoleService_GetComponentTree,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.GetRoleComponentTreeReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.getComponentTree =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/GetComponentTree',
      request,
      metadata || {},
      methodDescriptor_RoleService_GetComponentTree);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.QueryRoleRequest,
 *   !proto.Soit.Authentication.QueryRoleReply>}
 */
const methodDescriptor_RoleService_Query = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/Query',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.QueryRoleRequest,
  proto.Soit.Authentication.QueryRoleReply,
  /**
   * @param {!proto.Soit.Authentication.QueryRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.QueryRoleReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Authentication.QueryRoleRequest,
 *   !proto.Soit.Authentication.QueryRoleReply>}
 */
const methodInfo_RoleService_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.QueryRoleReply,
  /**
   * @param {!proto.Soit.Authentication.QueryRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.QueryRoleReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.QueryRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.QueryRoleReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.QueryRoleReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Query',
      request,
      metadata || {},
      methodDescriptor_RoleService_Query,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.QueryRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.QueryRoleReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Query',
      request,
      metadata || {},
      methodDescriptor_RoleService_Query);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RoleService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/Remove',
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
const methodInfo_RoleService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.Authentication.RoleServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Remove',
      request,
      metadata || {},
      methodDescriptor_RoleService_Remove,
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
proto.Soit.Authentication.RoleServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Remove',
      request,
      metadata || {},
      methodDescriptor_RoleService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateRoleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RoleService_Update = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateRoleRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleRequest} request
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
 *   !proto.Soit.Authentication.UpdateRoleRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RoleService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Update',
      request,
      metadata || {},
      methodDescriptor_RoleService_Update,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateRoleRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/Update',
      request,
      metadata || {},
      methodDescriptor_RoleService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateRoleComponentsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RoleService_UpdateComponents = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/UpdateComponents',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateRoleComponentsRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleComponentsRequest} request
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
 *   !proto.Soit.Authentication.UpdateRoleComponentsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RoleService_UpdateComponents = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleComponentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateRoleComponentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.updateComponents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateComponents',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateComponents,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateRoleComponentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.updateComponents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateComponents',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateComponents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateRoleStatesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RoleService_UpdateStates = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/UpdateStates',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateRoleStatesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleStatesRequest} request
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
 *   !proto.Soit.Authentication.UpdateRoleStatesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RoleService_UpdateStates = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateRoleStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.updateStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateStates,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateRoleStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.updateStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateRoleUsersRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_RoleService_UpdateUsers = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.RoleService/UpdateUsers',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateRoleUsersRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleUsersRequest} request
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
 *   !proto.Soit.Authentication.UpdateRoleUsersRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_RoleService_UpdateUsers = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateRoleUsersRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateRoleUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.RoleServiceClient.prototype.updateUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateUsers',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateUsers,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateRoleUsersRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.RoleServicePromiseClient.prototype.updateUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.RoleService/UpdateUsers',
      request,
      metadata || {},
      methodDescriptor_RoleService_UpdateUsers);
};


module.exports = proto.Soit.Authentication;

