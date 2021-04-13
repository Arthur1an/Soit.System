import * as protobuf_Authentication_element_pb from "../../protobuf/Authentication/element_pb";
import * as protobuf_infrastructure_pb from "../../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { ElementServiceClient } from "@/api/protobuf/Authentication/ElementServiceClientPb";

export class ElementService {
  static client_ = new ElementServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_Authentication_element_pb.CreateElementRequest.AsObject): Promise<protobuf_infrastructure_pb.Identify.AsObject>{
    const request = new protobuf_Authentication_element_pb.CreateElementRequest()
      .setPageId(obj.pageId)
      .setKey(obj.key)
      .setName(obj.name)
      .setType(obj.type)
      .setStyle(obj.style)
      .setIcon(obj.icon)
    return this.client_.create(request, {}).then((x) => x.toObject());
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_Authentication_element_pb.FindElementReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_Authentication_element_pb.UpdateElementRequest.AsObject): Promise<any>{
    const request = new protobuf_Authentication_element_pb.UpdateElementRequest()
      .setId(obj.id)
      .setPageId(obj.pageId)
      .setKey(obj.key)
      .setName(obj.name)
      .setType(obj.type)
      .setStyle(obj.style)
      .setIcon(obj.icon)
    return this.client_.update(request, {});
  }
}

export type CreateElementRequest = protobuf_Authentication_element_pb.CreateElementRequest.AsObject;
export type FindElementReply = protobuf_Authentication_element_pb.FindElementReply.AsObject;
export type UpdateElementRequest = protobuf_Authentication_element_pb.UpdateElementRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
