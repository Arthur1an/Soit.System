import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as protobuf_Authentication_organization_pb from "../../protobuf/Authentication/organization_pb";
import * as protobuf_infrastructure_pb from "../../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { OrganizationServiceClient } from "@/api/protobuf/Authentication/OrganizationServiceClientPb";

export class OrganizationService {
  static client_ = new OrganizationServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_Authentication_organization_pb.CreateOrganizationRequest.AsObject): Promise<protobuf_infrastructure_pb.Identify.AsObject>{
    const request = new protobuf_Authentication_organization_pb.CreateOrganizationRequest()
      .setParentId(obj.parentId == undefined ? undefined : new google_protobuf_wrappers_pb.Int64Value().setValue(obj.parentId.value))
      .setName(obj.name)
      .setDescription(obj.description)
      .setUserIdsList(obj.userIdsList)
    return this.client_.create(request, {}).then((x) => x.toObject());
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_organization_pb.FindOrganizationReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static getTree(): Promise<protobuf_Authentication_organization_pb.GetOrganizationTreeReply.AsObject>{
    const request = new google_protobuf_empty_pb.Empty()
    return this.client_.getTree(request, {}).then((x) => x.toObject());
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_Authentication_organization_pb.UpdateOrganizationRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_organization_pb.UpdateOrganizationRequest()
      .setId(obj.id)
      .setParentId(obj.parentId == undefined ? undefined : new google_protobuf_wrappers_pb.Int64Value().setValue(obj.parentId.value))
      .setName(obj.name)
      .setDescription(obj.description)
      .setUserIdsList(obj.userIdsList)
    return this.client_.update(request, {});
  }

  static updateUsers(obj: protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest()
      .setId(obj.id)
      .setUserIdsList(obj.userIdsList)
    return this.client_.updateUsers(request, {});
  }
}

export type CreateOrganizationRequest = protobuf_Authentication_organization_pb.CreateOrganizationRequest.AsObject;
export type FindOrganizationReply = protobuf_Authentication_organization_pb.FindOrganizationReply.AsObject;
export type GetOrganizationTreeReply = protobuf_Authentication_organization_pb.GetOrganizationTreeReply.AsObject;
export type UpdateOrganizationRequest = protobuf_Authentication_organization_pb.UpdateOrganizationRequest.AsObject;
export type UpdateOrganizationUsersRequest = protobuf_Authentication_organization_pb.UpdateOrganizationUsersRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
