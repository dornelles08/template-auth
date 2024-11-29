import { User } from "@/domain/enterprise/entities/User";
import { Prisma, User as PrismaUser } from "@prisma/client";

export class PrismaUserMapper {
  static toDomain(raw: PrismaUser): User {
    return new User(
      {
        name: raw.name,
        email: raw.email,
        password: raw.password,
        recoveryCode: raw.recoveryCode ? raw.recoveryCode : undefined,
        twoFactorEnabled: raw.twoFactorEnabled
          ? raw.twoFactorEnabled
          : undefined,
        twoFactorSecret: raw.twoFactorSecret ? raw.twoFactorSecret : undefined,
      },
      raw.id
    );
  }

  static toPrisma(user: User): Prisma.UserUncheckedCreateInput {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      password: user.password,
    };
  }
}
