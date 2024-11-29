import { User } from "src/domain/enterprise/entities/User";

export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract create(user: User): Promise<void>;
}
