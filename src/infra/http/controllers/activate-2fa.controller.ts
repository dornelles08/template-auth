import { ActiveteTwoFaUseCase } from "@/domain/application/use-cases/activate-2fa";
import { CurrentUser } from "@/infra/auth/currentUser.decorator";
import { UserPayload } from "@/infra/auth/jwt.strategy";
import { Body, Controller, HttpCode, Post } from "@nestjs/common";
import { z } from "zod";
import { ZodValidationPipe } from "../pipes/zod-validation-pipe";

const activeteTwoFaBodySchema = z.object({
  token: z.string(),
});

type ActiveteTwoFaBodySchema = z.infer<typeof activeteTwoFaBodySchema>;

@Controller("/account/activeTwoFa")
export class ActiveteTwoFaController {
  constructor(private readonly activeteTwoFa: ActiveteTwoFaUseCase) {}

  @Post()
  @HttpCode(204)
  async handle(
    @CurrentUser() user: UserPayload,
    @Body(new ZodValidationPipe(activeteTwoFaBodySchema))
    body: ActiveteTwoFaBodySchema
  ) {
    const userId = user.sub;
    const { token } = body;

    await this.activeteTwoFa.execute({
      userId,
      token,
    });
  }
}
