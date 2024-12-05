import { Injectable, UnauthorizedException } from "@nestjs/common";
import { authenticator } from "otplib";
import { Encrypter } from "../cryptography/encrypter";
import { UserRepository } from "../repositories/user.repository";

interface AuthenticateTwoFaUserUseCaseRequest {
  userId: string;
  token: string;
}

interface AuthenticateTwoFaUserUseCaseResponse {
  refreshToken: string;
  accessToken: string;
}

@Injectable()
export class AuthenticateTwoFaUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encrypter: Encrypter
  ) {}

  async execute({
    userId,
    token,
  }: AuthenticateTwoFaUserUseCaseRequest): Promise<AuthenticateTwoFaUserUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isValid = authenticator.verify({
      token,
      secret: user.twoFactorSecret!,
    });

    if (!isValid) {
      throw new UnauthorizedException();
    }

    const refreshToken = await this.encrypter.refreshToken({
      sub: user.id,
    });

    const accessToken = await this.encrypter.encrypt({
      sub: user.id,
    });

    return {
      accessToken,
      refreshToken,
    };
  }
}
