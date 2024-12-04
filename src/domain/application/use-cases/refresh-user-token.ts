import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Encrypter } from "../cryptography/encrypter";
import { UserRepository } from "../repositories/user.repository";

interface RefreshUserTokenUseCaseRequest {
  userId: string;
}

interface RefreshUserTokenUseCaseResponse {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class RefreshUserTokenUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly encrypter: Encrypter
  ) {}

  async execute({
    userId,
  }: RefreshUserTokenUseCaseRequest): Promise<RefreshUserTokenUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
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
