import * as protobuf_infrastructure_pb from "../protobuf/infrastructure_pb";
import * as protobuf_user_pb from "../protobuf/user_pb";
import { Interceptor } from "@/api/services/interceptor";
import { UserServiceClient } from "@/api/protobuf/UserServiceClientPb";

export class UserService {
  static client_ = new UserServiceClient(
    "https://localhost:5000",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_user_pb.CreateUserRequest.AsObject): Promise<string>{
    const request = new protobuf_user_pb.CreateUserRequest()
      .setName(obj.name)
      .setEntryDate(obj.entryDate)
      .setDepartureDate(obj.departureDate)
      .setMobile(obj.mobile)
      .setIdcard(obj.idcard)
      .setJob(obj.job)
      .setComputerIdsList(obj.computerIdsList)
    return this.client_.create(request, {}).then((x) => x.toObject().value);
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_user_pb.UpdateUserRequest.AsObject): Promise<any>{
    const request = new protobuf_user_pb.UpdateUserRequest()
      .setId(obj.id)
      .setName(obj.name)
      .setEntryDate(obj.entryDate)
      .setDepartureDate(obj.departureDate)
      .setMobile(obj.mobile)
      .setIdcard(obj.idcard)
      .setJob(obj.job)
      .setComputerIdsList(obj.computerIdsList)
    return this.client_.update(request, {});
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_user_pb.FindUserReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static query(obj: protobuf_user_pb.QueryUserRequest.AsObject): Promise<protobuf_user_pb.QueryUserReply.AsObject>{
    const request = new protobuf_user_pb.QueryUserRequest()
      .setContains(obj.contains)
      .setOrderRequest(obj.orderRequest == undefined ? undefined : new protobuf_infrastructure_pb.OrderRequest().setOrderBy(obj.orderRequest.orderBy).setDescending(obj.orderRequest.descending))
      .setPageRequest(obj.pageRequest == undefined ? undefined : new protobuf_infrastructure_pb.PageRequest().setPage(obj.pageRequest.page).setPageSize(obj.pageRequest.pageSize))
    return this.client_.query(request, {}).then((x) => x.toObject());
  }
}

export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
export type CreateUserRequest = protobuf_user_pb.CreateUserRequest.AsObject;
export type FindUserReply = protobuf_user_pb.FindUserReply.AsObject;
export type QueryUserReply = protobuf_user_pb.QueryUserReply.AsObject;
export type QueryUserRequest = protobuf_user_pb.QueryUserRequest.AsObject;
export type UpdateUserRequest = protobuf_user_pb.UpdateUserRequest.AsObject;
