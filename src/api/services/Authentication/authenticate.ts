import * as protobuf_Authentication_authenticate_pb from "../../protobuf/Authentication/authenticate_pb";
import { Interceptor } from "@/api/services/interceptor";
import { AuthenticateServiceClient } from "@/api/protobuf/Authentication/AuthenticateServiceClientPb";

export class AuthenticateService {
  static client_ = new AuthenticateServiceClient(
    "http://27.115.33.30:5002",
    null,
    Interceptor.options
  );

  static login(obj: protobuf_Authentication_authenticate_pb.LoginRequest.AsObject): Promise<protobuf_Authentication_authenticate_pb.LoginReply.AsObject>{
    const request = new protobuf_Authentication_authenticate_pb.LoginRequest()
      .setUserName(obj.userName)
      .setCipher(obj.cipher)
    return this.client_.login(request, {}).then((x) => x.toObject());
  }
}

export type LoginReply = protobuf_Authentication_authenticate_pb.LoginReply.AsObject;
export type LoginRequest = protobuf_Authentication_authenticate_pb.LoginRequest.AsObject;
