import { HashComparator } from "@/domain/application/cryptography/hash-comparator";
import { HashGenerator } from "@/domain/application/cryptography/hash-generator";

export class FakeHasher implements HashGenerator, HashComparator {
  async compare(plain: string, hash: string) {
    return plain.concat("-hashed") === hash;
  }
  async hash(plain: string) {
    return plain.concat("-hashed");
  }
}
