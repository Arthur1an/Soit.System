import * as google_protobuf_wrappers_pb from "google-protobuf/google/protobuf/wrappers_pb";
import * as protobuf_account_pb from "../protobuf/account_pb";
import * as protobuf_infrastructure_pb from "../protobuf/infrastructure_pb";
import { Interceptor } from "@/api/services/interceptor";
import { AccountServiceClient } from "@/api/protobuf/AccountServiceClientPb";

export class AccountService {
  static client_ = new AccountServiceClient(
    "https://localhost:5000",
    null,
    Interceptor.options
  );

  static create(obj: protobuf_account_pb.CreateAccountRequest.AsObject): Promise<string>{
    const request = new protobuf_account_pb.CreateAccountRequest()
      .setName(obj.name)
      .setCipher(obj.cipher)
      .setLegalName(obj.legalName == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.legalName.value))
      .setDescription(obj.description == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.description.value))
      .setMobile(obj.mobile == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.mobile.value))
      .setEmail(obj.email == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.email.value))
    return this.client_.create(request, {}).then((x) => x.toObject().value);
  }

  static remove(obj: protobuf_infrastructure_pb.IdentifyArray.AsObject): Promise<any>{
    const request = new protobuf_infrastructure_pb.IdentifyArray()
      .setIdsList(obj.idsList)
    return this.client_.remove(request, {});
  }

  static update(obj: protobuf_account_pb.UpdateAccountRequest.AsObject): Promise<any>{
    const request = new protobuf_account_pb.UpdateAccountRequest()
      .setId(obj.id)
      .setName(obj.name)
      .setCipher(obj.cipher)
      .setLegalName(obj.legalName == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.legalName.value))
      .setDescription(obj.description == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.description.value))
      .setMobile(obj.mobile == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.mobile.value))
      .setEmail(obj.email == undefined ? undefined : new google_protobuf_wrappers_pb.StringValue().setValue(obj.email.value))
    return this.client_.update(request, {});
  }

  static find(obj: protobuf_infrastructure_pb.Identify.AsObject): Promise<protobuf_account_pb.FindAccountReply.AsObject>{
    const request = new protobuf_infrastructure_pb.Identify()
      .setId(obj.id)
    return this.client_.find(request, {}).then((x) => x.toObject());
  }

  static query(obj: protobuf_account_pb.QueryAccountRequest.AsObject): Promise<protobuf_account_pb.QueryAccountReply.AsObject>{
    const request = new protobuf_account_pb.QueryAccountRequest()
      .setContains(obj.contains)
      .setOrderRequest(obj.orderRequest == undefined ? undefined : new protobuf_infrastructure_pb.OrderRequest().setOrderBy(obj.orderRequest.orderBy).setDescending(obj.orderRequest.descending))
      .setPageRequest(obj.pageRequest == undefined ? undefined : new protobuf_infrastructure_pb.PageRequest().setPage(obj.pageRequest.page).setPageSize(obj.pageRequest.pageSize))
    return this.client_.query(request, {}).then((x) => x.toObject());
  }
}

export type CreateAccountRequest = protobuf_account_pb.CreateAccountRequest.AsObject;
export type FindAccountReply = protobuf_account_pb.FindAccountReply.AsObject;
export type QueryAccountReply = protobuf_account_pb.QueryAccountReply.AsObject;
export type QueryAccountRequest = protobuf_account_pb.QueryAccountRequest.AsObject;
export type UpdateAccountRequest = protobuf_account_pb.UpdateAccountRequest.AsObject;
export type Identify = protobuf_infrastructure_pb.Identify.AsObject;
export type IdentifyArray = protobuf_infrastructure_pb.IdentifyArray.AsObject;
