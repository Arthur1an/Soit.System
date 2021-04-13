import * as protobuf_authenticate_pb from "../protobuf/authenticate_pb";
import { Interceptor } from "@/api/services/interceptor";
import { AuthenticateServiceClient } from "@/api/protobuf/AuthenticateServiceClientPb";

export class AuthenticateService {
  static client_ = new AuthenticateServiceClient(
    "https://localhost:5000",
    null,
    Interceptor.options
  );

  static login(obj: protobuf_authenticate_pb.LoginRequest.AsObject): Promise<protobuf_authenticate_pb.LoginReply.AsObject>{
    const request = new protobuf_authenticate_pb.LoginRequest()
      .setUserName(obj.userName)
      .setCipher(obj.cipher)
    return this.client_.login(request, {}).then((x) => x.toObject());
  }
}

export type LoginReply = protobuf_authenticate_pb.LoginReply.AsObject;
export type LoginRequest = protobuf_authenticate_pb.LoginRequest.AsObject;
