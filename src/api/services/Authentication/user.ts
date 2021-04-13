import * as protobuf_Authentication_user_pb from "../../protobuf/Authentication/user_pb";
import * as protobuf_infrastructure_pb from "../../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { UserServiceClient } from "@/api/protobuf/Authentication/UserServiceClientPb";

export class UserService {
  static client_ = new UserServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_Authentication_user_pb.CreateUserRequest.AsObject): Promise<protobuf_infrastructure_pb.Identify.AsObject>{
    const request = new protobuf_Authentication_user_pb.CreateUserRequest()
      .setName(obj.name)
      .setCipher(obj.cipher)
      .setLegalName(obj.legalName)
      .setDescription(obj.description)
      .setMobile(obj.mobile)
      .setPhone(obj.phone)
      .setEmail(obj.email)
      .setPhoto(obj.photo)
      .setState(obj.state)
      .setOrganizationIdsList(obj.organizationIdsList)
      .setRoleIdsList(obj.roleIdsList)
    return this.client_.create(request, {}).then((x) => x.toObject());
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_user_pb.FindUserReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static query(obj: protobuf_Authentication_user_pb.QueryUserRequest.AsObject): Promise<protobuf_Authentication_user_pb.QueryUserReply.AsObject>{
    const request = new protobuf_Authentication_user_pb.QueryUserRequest()
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

  static resetPassword(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.resetPassword(request, {});
  }

  static update(obj: protobuf_Authentication_user_pb.UpdateUserRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_user_pb.UpdateUserRequest()
      .setId(obj.id)
      .setLegalName(obj.legalName)
      .setDescription(obj.description)
      .setMobile(obj.mobile)
      .setPhone(obj.phone)
      .setEmail(obj.email)
      .setPhoto(obj.photo)
      .setState(obj.state)
      .setOrganizationIdsList(obj.organizationIdsList)
      .setRoleIdsList(obj.roleIdsList)
    return this.client_.update(request, {});
  }

  static updateOrganizations(obj: protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest()
      .setId(obj.id)
      .setOrganizationIdsList(obj.organizationIdsList)
    return this.client_.updateOrganizations(request, {});
  }

  static updatePassword(obj: protobuf_Authentication_user_pb.UpdatePasswordRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_user_pb.UpdatePasswordRequest()
      .setOldCipher(obj.oldCipher)
      .setNewCipher(obj.newCipher)
    return this.client_.updatePassword(request, {});
  }

  static updateRoles(obj: protobuf_Authentication_user_pb.UpdateUserRolesRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_user_pb.UpdateUserRolesRequest()
      .setId(obj.id)
      .setRoleIdsList(obj.roleIdsList)
    return this.client_.updateRoles(request, {});
  }

  static updateStates(obj: protobuf_Authentication_user_pb.UpdateUserStatesRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_user_pb.UpdateUserStatesRequest()
      .setIdsList(obj.idsList)
      .setState(obj.state)
    return this.client_.updateStates(request, {});
  }

  static allowName(obj: protobuf_Authentication_user_pb.AllowNameRequest.AsObject): Promise<boolean>{
    const request = new protobuf_Authentication_user_pb.AllowNameRequest()
      .setName(obj.name)
    return this.client_.allowName(request, {}).then((x) => x.toObject().value);
  }
}

export type AllowNameRequest = protobuf_Authentication_user_pb.AllowNameRequest.AsObject;
export type CreateUserRequest = protobuf_Authentication_user_pb.CreateUserRequest.AsObject;
export type FindUserReply = protobuf_Authentication_user_pb.FindUserReply.AsObject;
export type QueryUserReply = protobuf_Authentication_user_pb.QueryUserReply.AsObject;
export type QueryUserRequest = protobuf_Authentication_user_pb.QueryUserRequest.AsObject;
export type UpdatePasswordRequest = protobuf_Authentication_user_pb.UpdatePasswordRequest.AsObject;
export type UpdateUserOrganizationsRequest = protobuf_Authentication_user_pb.UpdateUserOrganizationsRequest.AsObject;
export type UpdateUserRequest = protobuf_Authentication_user_pb.UpdateUserRequest.AsObject;
export type UpdateUserRolesRequest = protobuf_Authentication_user_pb.UpdateUserRolesRequest.AsObject;
export type UpdateUserStatesRequest = protobuf_Authentication_user_pb.UpdateUserStatesRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
