import * as protobuf_Authentication_page_pb from "../../protobuf/Authentication/page_pb";
import * as protobuf_infrastructure_pb from "../../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { PageServiceClient } from "@/api/protobuf/Authentication/PageServiceClientPb";

export class PageService {
  static client_ = new PageServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_Authentication_page_pb.CreatePageRequest.AsObject): Promise<protobuf_infrastructure_pb.Identify.AsObject>{
    const request = new protobuf_Authentication_page_pb.CreatePageRequest()
      .setModuleId(obj.moduleId)
      .setKey(obj.key)
      .setName(obj.name)
      .setNo(obj.no)
      .setIcon(obj.icon)
      .setRoute(obj.route)
      .setShowInMenu(obj.showInMenu)
    return this.client_.create(request, {}).then((x) => x.toObject());
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_page_pb.FindPageReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_Authentication_page_pb.UpdatePageRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_page_pb.UpdatePageRequest()
      .setId(obj.id)
      .setModuleId(obj.moduleId)
      .setKey(obj.key)
      .setName(obj.name)
      .setNo(obj.no)
      .setIcon(obj.icon)
      .setRoute(obj.route)
      .setShowInMenu(obj.showInMenu)
    return this.client_.update(request, {});
  }
}

export type CreatePageRequest = protobuf_Authentication_page_pb.CreatePageRequest.AsObject;
export type FindPageReply = protobuf_Authentication_page_pb.FindPageReply.AsObject;
export type UpdatePageRequest = protobuf_Authentication_page_pb.UpdatePageRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
