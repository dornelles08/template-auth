import { AuthenticateUserUseCase } from "@/domain/application/use-cases/authenticate-user";
import { Public } from "@/infra/auth/public";
import { Body, Controller, HttpCode, Post, UsePipes } from "@nestjs/common";
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
  async handle(@Body() body: AuthenticateUserBodySchema) {
    const { email, password } = body;

    const { accessToken } = await this.authenticateUser.execute({
      email,
      password,
    });

    return { accessToken };
  }
}
