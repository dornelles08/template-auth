import { Injectable } from "@nestjs/common";
import { authenticator } from "otplib";
import { UserRepository } from "../repositories/user.repository";

interface ActiveteTwoFaUseCaseRequest {
  userId: string;
  token: string;
}

interface ActiveteTwoFaUseCaseResponse {}

@Injectable()
export class ActiveteTwoFaUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute({
    userId,
    token,
  }: ActiveteTwoFaUseCaseRequest): Promise<ActiveteTwoFaUseCaseResponse> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new Error("User not found");
    }

    if (!user.twoFactorSecret) {
      throw new Error("2FA not setup");
    }

    const isVerify = authenticator.verify({
      token,
      secret: user.twoFactorSecret,
    });

    if (!isVerify) {
      throw new Error("Invalid token");
    }

    user.twoFactorEnabled = true;

    await this.userRepository.save(user);

    return {};
  }
}
