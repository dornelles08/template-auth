import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const RefreshToken = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const cookieHeader = request.headers.cookie;

    const refreshToken = cookieHeader
      ?.split(";")
      .find((cookie: string) => cookie.trim().startsWith("refreshToken="))
      ?.split("=")[1];

    return refreshToken;
  }
);
