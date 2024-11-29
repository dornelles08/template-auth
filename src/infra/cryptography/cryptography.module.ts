import { Encrypter } from "@/domain/application/cryptography/encrypter";
import { HashComparator } from "@/domain/application/cryptography/hash-comparator";
import { HashGenerator } from "@/domain/application/cryptography/hash-generator";
import { Module } from "@nestjs/common";
import { BcryptHasher } from "./bcrypt-hasher";
import { JwtEncrypter } from "./jwt-encrypter";

@Module({
  providers: [
    {
      provide: HashComparator,
      useClass: BcryptHasher,
    },
    {
      provide: HashGenerator,
      useClass: BcryptHasher,
    },
    {
      provide: Encrypter,
      useClass: JwtEncrypter,
    },
  ],
  exports: [Encrypter, HashComparator, HashGenerator],
})
export class CryptographyModule {}
