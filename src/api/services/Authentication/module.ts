import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as protobuf_Authentication_module_pb from "../../protobuf/Authentication/module_pb";
import * as protobuf_infrastructure_pb from "../../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { ModuleServiceClient } from "@/api/protobuf/Authentication/ModuleServiceClientPb";

export class ModuleService {
  static client_ = new ModuleServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_Authentication_module_pb.CreateModuleRequest.AsObject): Promise<protobuf_infrastructure_pb.Identify.AsObject>{
    const request = new protobuf_Authentication_module_pb.CreateModuleRequest()
      .setParentId(obj.parentId == undefined ? undefined : new google_protobuf_wrappers_pb.Int64Value().setValue(obj.parentId.value))
      .setName(obj.name)
      .setNo(obj.no)
      .setStyle(obj.style)
      .setIcon(obj.icon)
      .setRoute(obj.route)
      .setShowInMenu(obj.showInMenu)
    return this.client_.create(request, {}).then((x) => x.toObject());
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_module_pb.FindModuleReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static getTree(): Promise<protobuf_Authentication_module_pb.GetModuleTreeReply.AsObject>{
    const request = new google_protobuf_empty_pb.Empty()
    return this.client_.getTree(request, {}).then((x) => x.toObject());
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_Authentication_module_pb.UpdateModuleRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_module_pb.UpdateModuleRequest()
      .setId(obj.id)
      .setParentId(obj.parentId == undefined ? undefined : new google_protobuf_wrappers_pb.Int64Value().setValue(obj.parentId.value))
      .setName(obj.name)
      .setNo(obj.no)
      .setStyle(obj.style)
      .setIcon(obj.icon)
      .setRoute(obj.route)
      .setShowInMenu(obj.showInMenu)
    return this.client_.update(request, {});
  }
}

export type CreateModuleRequest = protobuf_Authentication_module_pb.CreateModuleRequest.AsObject;
export type FindModuleReply = protobuf_Authentication_module_pb.FindModuleReply.AsObject;
export type GetModuleTreeReply = protobuf_Authentication_module_pb.GetModuleTreeReply.AsObject;
export type UpdateModuleRequest = protobuf_Authentication_module_pb.UpdateModuleRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
