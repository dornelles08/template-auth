import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Encrypter } from "../cryptography/encrypter";
import { UserRepository } from "../repositories/user.repository";
import { TwoFaAuthenticator } from "../twoFa/authenticator";

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
    private readonly encrypter: Encrypter,
    private readonly twoFaAuthenticator: TwoFaAuthenticator
  ) {}

  async execute({
    userId,
    token,
  }: AuthenticateTwoFaUserUseCaseRequest): Promise<AuthenticateTwoFaUserUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isValid = this.twoFaAuthenticator.verify(
      token,
      user.twoFactorSecret!
    );

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
