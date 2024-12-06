import { TwoFaAuthenticator } from "@/domain/application/twoFa/authenticator";
import { Module } from "@nestjs/common";
import { TwoFaAuthenticatorService } from "./twoFa.service";

@Module({
  providers: [
    {
      provide: TwoFaAuthenticator,
      useClass: TwoFaAuthenticatorService,
    },
  ],
  exports: [TwoFaAuthenticator],
})
export class TwoFaAuthenticatorModule {}
