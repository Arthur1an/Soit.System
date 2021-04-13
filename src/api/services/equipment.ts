import * as protobuf_equipment_pb from "../protobuf/equipment_pb";
import * as protobuf_infrastructure_pb from "../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { EquipmentServiceClient } from "@/api/protobuf/EquipmentServiceClientPb";

export class EquipmentService {
  static client_ = new EquipmentServiceClient(
    "https://localhost:5000",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_equipment_pb.CreateEquipmentRequest.AsObject): Promise<string>{
    const request = new protobuf_equipment_pb.CreateEquipmentRequest()
      .setType(obj.type)
      .setNumber(obj.number)
      .setBrand(obj.brand)
      .setModelName(obj.modelName)
      .setMemory(obj.memory)
      .setPurchaseDate(obj.purchaseDate)
      .setEliminateDate(obj.eliminateDate)
      .setState(obj.state)
      .setUserId(obj.userId)
    return this.client_.create(request, {}).then((x) => x.toObject().value);
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_equipment_pb.UpdateEquipmentRequest.AsObject): Promise<any>{
    const request = new protobuf_equipment_pb.UpdateEquipmentRequest()
      .setId(obj.id)
      .setType(obj.type)
      .setNumber(obj.number)
      .setBrand(obj.brand)
      .setModelName(obj.modelName)
      .setMemory(obj.memory)
      .setPurchaseDate(obj.purchaseDate)
      .setEliminateDate(obj.eliminateDate)
      .setState(obj.state)
      .setUserId(obj.userId)
    return this.client_.update(request, {});
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_equipment_pb.FindEquipmentReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static query(obj: protobuf_equipment_pb.QueryEquipmentRequest.AsObject): Promise<protobuf_equipment_pb.QueryEquipmentReply.AsObject>{
    const request = new protobuf_equipment_pb.QueryEquipmentRequest()
      .setContains(obj.contains)
      .setOrderRequest(obj.orderRequest == undefined ? undefined : new protobuf_infrastructure_pb.OrderRequest().setOrderBy(obj.orderRequest.orderBy).setDescending(obj.orderRequest.descending))
      .setPageRequest(obj.pageRequest == undefined ? undefined : new protobuf_infrastructure_pb.PageRequest().setPage(obj.pageRequest.page).setPageSize(obj.pageRequest.pageSize))
    return this.client_.query(request, {}).then((x) => x.toObject());
  }
}

export type CreateEquipmentRequest = protobuf_equipment_pb.CreateEquipmentRequest.AsObject;
export type FindEquipmentReply = protobuf_equipment_pb.FindEquipmentReply.AsObject;
export type QueryEquipmentReply = protobuf_equipment_pb.QueryEquipmentReply.AsObject;
export type QueryEquipmentRequest = protobuf_equipment_pb.QueryEquipmentRequest.AsObject;
export type UpdateEquipmentRequest = protobuf_equipment_pb.UpdateEquipmentRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
