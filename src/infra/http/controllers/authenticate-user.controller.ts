import { AuthenticateUserUseCase } from "@/domain/application/use-cases/authenticate-user";
import { Public } from "@/infra/auth/public";
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Res,
  UsePipes,
} from "@nestjs/common";
import { Response } from "express";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";

const AuthenticateUserBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type AuthenticateUserBodySchema = z.infer<typeof AuthenticateUserBodySchema>;

@Controller("/authenticate")
@Public()
export class AuthenticateUserController {
  constructor(private authenticateUser: AuthenticateUserUseCase) {}

  @Post()
  @HttpCode(200)
  @UsePipes(new ZodValidationPipe(AuthenticateUserBodySchema))
  async handle(
    @Body() body: AuthenticateUserBodySchema,
    @Res({ passthrough: true }) res: Response
  ) {
    const { email, password } = body;

    const { accessToken, refreshToken, twoFaToken } =
      await this.authenticateUser.execute({
        email,
        password,
      });

    if (twoFaToken) {
      return { twoFaToken };
    }

    res.cookie("refreshToken", refreshToken, {
      path: "/",
      httpOnly: true,
      secure: true,
      sameSite: true,
    });

    return { accessToken };
  }
}
