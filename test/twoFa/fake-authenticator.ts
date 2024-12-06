import { TwoFaAuthenticator } from "@/domain/application/twoFa/authenticator";
import { randomBytes } from "node:crypto";

export class FakeAuthenticator implements TwoFaAuthenticator {
  generateSecret(): string {
    return randomBytes(16).toString("hex");
  }
  verify(token: string, secret: string): boolean {
    return true;
  }
  keyuri(accountName: string, issuer: string, secret: string): string {
    return "otpauth://totp/test:test@test.com?secret=test&issuer=test";
  }
}
