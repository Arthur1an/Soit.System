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
proto.Soit.Authentication = require('./user_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.Soit.Authentication.UserServiceClient =
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
proto.Soit.Authentication.UserServicePromiseClient =
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
 *   !proto.Soit.Authentication.CreateUserRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodDescriptor_UserService_Create = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/Create',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.CreateUserRequest,
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateUserRequest} request
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
 *   !proto.Soit.Authentication.CreateUserRequest,
 *   !proto.Soit.Infrastructure.Identify>}
 */
const methodInfo_UserService_Create = new grpc.web.AbstractClientBase.MethodInfo(
  protobuf_infrastructure_pb.Identify,
  /**
   * @param {!proto.Soit.Authentication.CreateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  protobuf_infrastructure_pb.Identify.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Infrastructure.Identify)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Infrastructure.Identify>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.CreateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Infrastructure.Identify>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/Create',
      request,
      metadata || {},
      methodDescriptor_UserService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindUserReply>}
 */
const methodDescriptor_UserService_Find = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/Find',
  grpc.web.MethodType.UNARY,
  protobuf_infrastructure_pb.Identify,
  proto.Soit.Authentication.FindUserReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindUserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Infrastructure.Identify,
 *   !proto.Soit.Authentication.FindUserReply>}
 */
const methodInfo_UserService_Find = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.FindUserReply,
  /**
   * @param {!proto.Soit.Infrastructure.Identify} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.FindUserReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.FindUserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.FindUserReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.find =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/Find',
      request,
      metadata || {},
      methodDescriptor_UserService_Find,
      callback);
};


/**
 * @param {!proto.Soit.Infrastructure.Identify} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.FindUserReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.find =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/Find',
      request,
      metadata || {},
      methodDescriptor_UserService_Find);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.QueryUserRequest,
 *   !proto.Soit.Authentication.QueryUserReply>}
 */
const methodDescriptor_UserService_Query = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/Query',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.QueryUserRequest,
  proto.Soit.Authentication.QueryUserReply,
  /**
   * @param {!proto.Soit.Authentication.QueryUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.QueryUserReply.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Authentication.QueryUserRequest,
 *   !proto.Soit.Authentication.QueryUserReply>}
 */
const methodInfo_UserService_Query = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Soit.Authentication.QueryUserReply,
  /**
   * @param {!proto.Soit.Authentication.QueryUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.Soit.Authentication.QueryUserReply.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.QueryUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Soit.Authentication.QueryUserReply)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Soit.Authentication.QueryUserReply>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.query =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/Query',
      request,
      metadata || {},
      methodDescriptor_UserService_Query,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.QueryUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Soit.Authentication.QueryUserReply>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.query =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/Query',
      request,
      metadata || {},
      methodDescriptor_UserService_Query);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Remove = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/Remove',
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
const methodInfo_UserService_Remove = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.Authentication.UserServiceClient.prototype.remove =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/Remove',
      request,
      metadata || {},
      methodDescriptor_UserService_Remove,
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
proto.Soit.Authentication.UserServicePromiseClient.prototype.remove =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/Remove',
      request,
      metadata || {},
      methodDescriptor_UserService_Remove);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Infrastructure.IdentifyArray,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_ResetPassword = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/ResetPassword',
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
const methodInfo_UserService_ResetPassword = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.Soit.Authentication.UserServiceClient.prototype.resetPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword,
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
proto.Soit.Authentication.UserServicePromiseClient.prototype.resetPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/ResetPassword',
      request,
      metadata || {},
      methodDescriptor_UserService_ResetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_Update = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/Update',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateUserRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserRequest} request
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
 *   !proto.Soit.Authentication.UpdateUserRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_Update = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/Update',
      request,
      metadata || {},
      methodDescriptor_UserService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateUserOrganizationsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_UpdateOrganizations = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/UpdateOrganizations',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateUserOrganizationsRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserOrganizationsRequest} request
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
 *   !proto.Soit.Authentication.UpdateUserOrganizationsRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdateOrganizations = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserOrganizationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateUserOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.updateOrganizations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdateOrganizations',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateOrganizations,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateUserOrganizationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.updateOrganizations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdateOrganizations',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdatePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_UpdatePassword = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/UpdatePassword',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdatePasswordRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdatePasswordRequest} request
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
 *   !proto.Soit.Authentication.UpdatePasswordRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdatePassword = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdatePasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdatePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.updatePassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdatePasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.updatePassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdatePassword',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdatePassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateUserRolesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_UpdateRoles = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/UpdateRoles',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateUserRolesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserRolesRequest} request
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
 *   !proto.Soit.Authentication.UpdateUserRolesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdateRoles = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserRolesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateUserRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.updateRoles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdateRoles',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateRoles,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateUserRolesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.updateRoles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdateRoles',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.UpdateUserStatesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_UserService_UpdateStates = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/UpdateStates',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.UpdateUserStatesRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserStatesRequest} request
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
 *   !proto.Soit.Authentication.UpdateUserStatesRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodInfo_UserService_UpdateStates = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.Soit.Authentication.UpdateUserStatesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.UpdateUserStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.updateStates =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateStates,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.UpdateUserStatesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.updateStates =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/UpdateStates',
      request,
      metadata || {},
      methodDescriptor_UserService_UpdateStates);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Soit.Authentication.AllowNameRequest,
 *   !proto.google.protobuf.BoolValue>}
 */
const methodDescriptor_UserService_AllowName = new grpc.web.MethodDescriptor(
  '/Soit.Authentication.UserService/AllowName',
  grpc.web.MethodType.UNARY,
  proto.Soit.Authentication.AllowNameRequest,
  google_protobuf_wrappers_pb.BoolValue,
  /**
   * @param {!proto.Soit.Authentication.AllowNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BoolValue.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Soit.Authentication.AllowNameRequest,
 *   !proto.google.protobuf.BoolValue>}
 */
const methodInfo_UserService_AllowName = new grpc.web.AbstractClientBase.MethodInfo(
  google_protobuf_wrappers_pb.BoolValue,
  /**
   * @param {!proto.Soit.Authentication.AllowNameRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_wrappers_pb.BoolValue.deserializeBinary
);


/**
 * @param {!proto.Soit.Authentication.AllowNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.google.protobuf.BoolValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.BoolValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.Soit.Authentication.UserServiceClient.prototype.allowName =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Soit.Authentication.UserService/AllowName',
      request,
      metadata || {},
      methodDescriptor_UserService_AllowName,
      callback);
};


/**
 * @param {!proto.Soit.Authentication.AllowNameRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.BoolValue>}
 *     Promise that resolves to the response
 */
proto.Soit.Authentication.UserServicePromiseClient.prototype.allowName =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Soit.Authentication.UserService/AllowName',
      request,
      metadata || {},
      methodDescriptor_UserService_AllowName);
};


module.exports = proto.Soit.Authentication;

