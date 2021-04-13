class AuthInterceptor {
  intercept(request: any, invoker: any) {
    const token = sessionStorage.getItem("token");
    if (token) {
      const metadata = request.getMetadata();
      metadata.Authorization = "Bearer " + token;
    }
    return invoker(request);
  }
}
const authInterceptor = new AuthInterceptor();
export class Interceptor {
  static options = {
    unaryInterceptors: [authInterceptor],
    streamInterceptors: [authInterceptor],
  };
}
