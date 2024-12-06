import { Injectable, UnauthorizedException } from "@nestjs/common";
import { toDataURL } from "qrcode";
import { UserRepository } from "../repositories/user.repository";
import { TwoFaAuthenticator } from "../twoFa/authenticator";

interface GenerateQrCodeUseCaseRequest {
  userId: string;
  appName: string;
}

interface GenerateQrCodeUseCaseResponse {
  qrCode: string;
}

@Injectable()
export class GenerateQrCodeUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly twoFaAuthenticator: TwoFaAuthenticator
  ) {}

  async execute({
    userId,
    appName,
  }: GenerateQrCodeUseCaseRequest): Promise<GenerateQrCodeUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    if (user.twoFactorSecret) {
      throw new Error("User already has a 2FA secret");
    }

    const secret = this.twoFaAuthenticator.generateSecret();

    user.twoFactorSecret = secret;

    await this.userRepository.save(user);

    const uri = this.twoFaAuthenticator.keyuri(user.email, appName, secret);

    const qrCode = await toDataURL(uri);

    return {
      qrCode,
    };
  }
}
