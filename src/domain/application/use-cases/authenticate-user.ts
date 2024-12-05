import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Encrypter } from "../cryptography/encrypter";
import { HashComparator } from "../cryptography/hash-comparator";
import { UserRepository } from "../repositories/user.repository";

interface AuthenticateUserUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUserUseCaseResponse {
  refreshToken: string;
  accessToken: string;
  twoFaToken: string;
}

@Injectable()
export class AuthenticateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashComparator: HashComparator,
    private readonly encrypter: Encrypter
  ) {}

  async execute({
    email,
    password,
  }: AuthenticateUserUseCaseRequest): Promise<AuthenticateUserUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException();
    }

    const isPasswordValid = await this.hashComparator.compare(
      password,
      user.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException();
    }

    if (user.twoFactorEnabled) {
      const twoFaToken = await this.encrypter.twoFaToken({
        sub: user.id,
      });
      return {
        twoFaToken,
        accessToken: "",
        refreshToken: "",
      };
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
      twoFaToken: "",
    };
  }
}
