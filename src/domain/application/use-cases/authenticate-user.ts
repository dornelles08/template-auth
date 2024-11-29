import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Encrypter } from "../cryptography/encrypter";
import { HashComparator } from "../cryptography/hash-comparator";
import { UserRepository } from "../repositories/user.repository";

interface AuthenticateUserUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUserUseCaseResponse {
  accessToken: string;
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

    let accessToken;

    try {
      accessToken = await this.encrypter.encrypt({
        sub: user.id,
      });
    } catch (error) {
      console.log(error);
    }

    return {
      accessToken,
    };
  }
}
