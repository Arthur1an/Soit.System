import * as protobuf_Authentication_role_pb from "../../protobuf/Authentication/role_pb";
import * as protobuf_infrastructure_pb from "../../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { RoleServiceClient } from "@/api/protobuf/Authentication/RoleServiceClientPb";

export class RoleService {
  static client_ = new RoleServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_Authentication_role_pb.CreateRoleRequest.AsObject): Promise<protobuf_infrastructure_pb.Identify.AsObject>{
    const request = new protobuf_Authentication_role_pb.CreateRoleRequest()
      .setName(obj.name)
      .setDescription(obj.description)
      .setState(obj.state)
    return this.client_.create(request, {}).then((x) => x.toObject());
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_role_pb.FindRoleReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static getComponentTree(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_role_pb.GetRoleComponentTreeReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.getComponentTree(request, {}).then((x) => x.toObject());
  }

  static query(obj: protobuf_Authentication_role_pb.QueryRoleRequest.AsObject): Promise<protobuf_Authentication_role_pb.QueryRoleReply.AsObject>{
    const request = new protobuf_Authentication_role_pb.QueryRoleRequest()
      .setContains(obj.contains)
      .setOrderRequest(obj.orderRequest == undefined ? undefined : new protobuf_infrastructure_pb.OrderRequest().setOrderBy(obj.orderRequest.orderBy).setDescending(obj.orderRequest.descending))
      .setPageRequest(obj.pageRequest == undefined ? undefined : new protobuf_infrastructure_pb.PageRequest().setPage(obj.pageRequest.page).setPageSize(obj.pageRequest.pageSize))
    return this.client_.query(request, {}).then((x) => x.toObject());
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_Authentication_role_pb.UpdateRoleRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_role_pb.UpdateRoleRequest()
      .setId(obj.id)
      .setName(obj.name)
      .setDescription(obj.description)
      .setState(obj.state)
    return this.client_.update(request, {});
  }

  static updateComponents(obj: protobuf_Authentication_role_pb.UpdateRoleComponentsRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_role_pb.UpdateRoleComponentsRequest()
      .setId(obj.id)
      .setModuleIdsList(obj.moduleIdsList)
      .setPageIdsList(obj.pageIdsList)
      .setElementIdsList(obj.elementIdsList)
    return this.client_.updateComponents(request, {});
  }

  static updateStates(obj: protobuf_Authentication_role_pb.UpdateRoleStatesRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_role_pb.UpdateRoleStatesRequest()
      .setIdsList(obj.idsList)
      .setState(obj.state)
    return this.client_.updateStates(request, {});
  }

  static updateUsers(obj: protobuf_Authentication_role_pb.UpdateRoleUsersRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_role_pb.UpdateRoleUsersRequest()
      .setId(obj.id)
      .setUserIdsList(obj.userIdsList)
    return this.client_.updateUsers(request, {});
  }
}

export type CreateRoleRequest = protobuf_Authentication_role_pb.CreateRoleRequest.AsObject;
export type FindRoleReply = protobuf_Authentication_role_pb.FindRoleReply.AsObject;
export type GetRoleComponentTreeReply = protobuf_Authentication_role_pb.GetRoleComponentTreeReply.AsObject;
export type QueryRoleReply = protobuf_Authentication_role_pb.QueryRoleReply.AsObject;
export type QueryRoleRequest = protobuf_Authentication_role_pb.QueryRoleRequest.AsObject;
export type UpdateRoleComponentsRequest = protobuf_Authentication_role_pb.UpdateRoleComponentsRequest.AsObject;
export type UpdateRoleRequest = protobuf_Authentication_role_pb.UpdateRoleRequest.AsObject;
export type UpdateRoleStatesRequest = protobuf_Authentication_role_pb.UpdateRoleStatesRequest.AsObject;
export type UpdateRoleUsersRequest = protobuf_Authentication_role_pb.UpdateRoleUsersRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
