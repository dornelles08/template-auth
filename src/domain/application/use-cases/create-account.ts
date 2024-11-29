import { Injectable } from "@nestjs/common";
import { User } from "src/domain/enterprise/entities/User";
import { HashGenerator } from "../cryptography/hash-generator";
import { UserRepository } from "../repositories/user.repository";
import { UserAlreadyExistsError } from "./errors/user-already-exists.error";

interface CreateAccountUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

interface CreateAccountUseCaseResponse {
  user: User;
}

@Injectable()
export class CreateAccountUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly hashGenerator: HashGenerator
  ) {}

  async execute({
    email,
    name,
    password,
  }: CreateAccountUseCaseRequest): Promise<CreateAccountUseCaseResponse> {
    const userWithSameEmail = await this.userRepository.findByEmail(email);

    if (userWithSameEmail) {
      throw new UserAlreadyExistsError();
    }

    const hashedPassword = await this.hashGenerator.hash(password);

    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await this.userRepository.create(user);

    return { user };
  }
}
