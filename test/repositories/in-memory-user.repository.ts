import { UserRepository } from "@/domain/application/repositories/user.repository";
import { User } from "@/domain/enterprise/entities/User";

export class InMemoryUserRepository implements UserRepository {
  public items: User[] = [];

  async findByEmail(email: string) {
    const user = this.items.find((item) => item.email === email);

    if (!user) return null;

    return user;
  }

  async findById(id: string) {
    const user = this.items.find((item) => item.id === id);

    if (!user) return null;

    return user;
  }

  async create(user: User) {
    this.items.push(user);
  }

  async save(user: User) {
    const itemIndex = this.items.findIndex((item) => item.id === user.id);

    this.items[itemIndex] = user;
  }
}
