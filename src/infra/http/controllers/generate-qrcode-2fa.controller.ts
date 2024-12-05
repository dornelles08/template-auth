import { GenerateQrCodeUseCase } from "@/domain/application/use-cases/generate-qrcode-2fa";
import { CurrentUser } from "@/infra/auth/currentUser.decorator";
import { UserPayload } from "@/infra/auth/jwt.strategy";
import { EnvService } from "@/infra/env/env.service";
import { Controller, HttpCode, Post } from "@nestjs/common";

@Controller("/auth/qrcode/generate")
export class GenerateQrCodeController {
  constructor(
    private readonly generateQrCode: GenerateQrCodeUseCase,
    private readonly envService: EnvService
  ) {}

  @Post()
  @HttpCode(200)
  async handle(@CurrentUser() user: UserPayload) {
    const userId = user.sub;

    const appName = this.envService.get("TWO_FACTOR_AUTHENTICATION_APP_NAME");

    const { qrCode } = await this.generateQrCode.execute({
      userId,
      appName,
    });

    return {
      qrCode,
    };
  }
}
