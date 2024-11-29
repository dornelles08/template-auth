
import { HashComparator } from "@/domain/application/cryptography/hash-comparator";
import { HashGenerator } from "@/domain/application/cryptography/hash-generator";
import { compare, hash } from "bcryptjs";

export class BcryptHasher implements HashGenerator, HashComparator {
  private HASH_SALT_LENGHT = 8;
  compare(plain: string, hash: string): Promise<boolean> {
    return compare(plain, hash);
  }

  hash(plain: string): Promise<string> {
    return hash(plain, this.HASH_SALT_LENGHT);
  }
}
