import { ActiveteTwoFaUseCase } from "@/domain/application/use-cases/activate-2fa";
import { AuthenticateTwoFaUserUseCase } from "@/domain/application/use-cases/authenticate-2fa-user";
import { AuthenticateUserUseCase } from "@/domain/application/use-cases/authenticate-user";
import { CreateAccountUseCase } from "@/domain/application/use-cases/create-account";
import { GenerateQrCodeUseCase } from "@/domain/application/use-cases/generate-qrcode-2fa";
import { RefreshUserTokenUseCase } from "@/domain/application/use-cases/refresh-user-token";
import { Module } from "@nestjs/common";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { DatabaseModule } from "../database/database.module";
import { EnvModule } from "../env/env.module";
import { ActiveteTwoFaController } from "./controllers/activate-2fa.controller";
import { AuthenticateTwoFaUserController } from "./controllers/authenticate-2fa-user.controller";
import { AuthenticateUserController } from "./controllers/authenticate-user.controller";
import { CreateAcountController } from "./controllers/create-account.controller";
import { GenerateQrCodeController } from "./controllers/generate-qrcode-2fa.controller";
import { RefreshUserTokenController } from "./controllers/refresh-user-token.controller";

@Module({
  imports: [DatabaseModule, CryptographyModule, EnvModule],
  controllers: [
    CreateAcountController,
    AuthenticateUserController,
    RefreshUserTokenController,
    GenerateQrCodeController,
    ActiveteTwoFaController,
    AuthenticateTwoFaUserController,
  ],
  providers: [
    CreateAccountUseCase,
    AuthenticateUserUseCase,
    RefreshUserTokenUseCase,
    GenerateQrCodeUseCase,
    ActiveteTwoFaUseCase,
    AuthenticateTwoFaUserUseCase,
  ],
})
export class HttpModule {}
