import { AuthenticateUserUseCase } from "@/domain/application/use-cases/authenticate-user";
import { CreateAccountUseCase } from "@/domain/application/use-cases/create-account";
import { RefreshUserTokenUseCase } from "@/domain/application/use-cases/refresh-user-token";
import { Module } from "@nestjs/common";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { DatabaseModule } from "../database/database.module";
import { AuthenticateUserController } from "./controllers/authenticate-user.controller";
import { CreateAcountController } from "./controllers/create-account.controller";
import { RefreshUserTokenController } from "./controllers/refresh-user-token.controller";

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAcountController,
    AuthenticateUserController,
    RefreshUserTokenController,
  ],
  providers: [
    CreateAccountUseCase,
    AuthenticateUserUseCase,
    RefreshUserTokenUseCase,
  ],
})
export class HttpModule {}
