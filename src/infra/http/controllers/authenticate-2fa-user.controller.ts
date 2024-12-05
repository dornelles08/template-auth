import { AuthenticateTwoFaUserUseCase } from "@/domain/application/use-cases/authenticate-2fa-user";
import { CurrentUser } from "@/infra/auth/currentUser.decorator";
import { UserPayload } from "@/infra/auth/jwt.strategy";
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Res
} from "@nestjs/common";
import { Response } from "express";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";

const AuthenticateTwoFaUserBodySchema = z.object({
  token: z.string(),
});

type AuthenticateTwoFaUserBodySchema = z.infer<
  typeof AuthenticateTwoFaUserBodySchema
>;

@Controller("/authenticate/twoFa")
export class AuthenticateTwoFaUserController {
  constructor(private AuthenticateTwoFaUser: AuthenticateTwoFaUserUseCase) {}

  @Post()
  @HttpCode(200)  
  async handle(
    @Body(new ZodValidationPipe(AuthenticateTwoFaUserBodySchema)) body: AuthenticateTwoFaUserBodySchema,
    @CurrentUser() user: UserPayload,
    @Res({ passthrough: true }) res: Response
  ) {
    const { token } = body;
    const userId = user.sub;

    const { accessToken, refreshToken } =
      await this.AuthenticateTwoFaUser.execute({ token, userId });

    res.cookie("refreshToken", refreshToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return { accessToken };
  }
}
