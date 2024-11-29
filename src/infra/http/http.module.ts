import { AuthenticateUserUseCase } from "@/domain/application/use-cases/authenticate-user";
import { CreateAccountUseCase } from "@/domain/application/use-cases/create-account";
import { Module } from "@nestjs/common";
import { CryptographyModule } from "../cryptography/cryptography.module";
import { DatabaseModule } from "../database/database.module";
import { AuthenticateUserController } from "./controllers/authenticate-user.controller";
import { CreateAcountController } from "./controllers/create-account.controller";

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [CreateAcountController, AuthenticateUserController],
  providers: [CreateAccountUseCase, AuthenticateUserUseCase],
})
export class HttpModule {}
