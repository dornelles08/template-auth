import { Encrypter } from "@/domain/application/cryptography/encrypter";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class JwtEncrypter implements Encrypter {
  constructor(private jwtService: JwtService) {}

  twoFaToken(payload: Record<string, unknown>): Promise<string> {
    return this.jwtService.signAsync(payload, {
      expiresIn: "5m",
    });
  }

  refreshToken(payload: Record<string, unknown>): Promise<string> {
    return this.jwtService.signAsync(payload, {
      expiresIn: "7d",
    });
  }

  encrypt(payload: Record<string, unknown>): Promise<string> {
    return this.jwtService.signAsync(payload);
  }
}
