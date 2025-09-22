export type ApiResponse<T> = {
  message: string;
  data: T;
};

export async function getHello(): Promise<ApiResponse<{ hello: string }>> {
  return { message: "ok", data: { hello: "world" } };
}


