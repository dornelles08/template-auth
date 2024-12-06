import { TwoFaAuthenticator } from "@/domain/application/twoFa/authenticator";
import { Injectable } from "@nestjs/common";
import { authenticator } from "otplib";

@Injectable()
export class TwoFaAuthenticatorService implements TwoFaAuthenticator {
  constructor() {}

  generateSecret(): string {
    return authenticator.generateSecret();
  }

  verify(token: string, secret: string): boolean {
    return authenticator.verify({ token, secret });
  }

  keyuri(accountName: string, issuer: string, secret: string): string {
    return authenticator.keyuri(accountName, issuer, secret);
  }
}
