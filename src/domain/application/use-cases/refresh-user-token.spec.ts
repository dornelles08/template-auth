import { FakeEncrypter } from "test/cryptography/fake-encrypter";
import { FakeHasher } from "test/cryptography/fake-hasher";
import { makeUser } from "test/factories/make-user";
import { InMemoryUserRepository } from "test/repositories/in-memory-user.repository";
import { RefreshUserTokenUseCase } from "./refresh-user-token";

let inMemoryUserRepository: InMemoryUserRepository;
let fakeHasher: FakeHasher;
let fakeEncrypter: FakeEncrypter;
// System under test
let sut: RefreshUserTokenUseCase;

describe("Refresh USer Token", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    fakeHasher = new FakeHasher();
    fakeEncrypter = new FakeEncrypter();

    sut = new RefreshUserTokenUseCase(inMemoryUserRepository, fakeEncrypter);
  });

  it("should be able to authenticate a user", async () => {
    const user = makeUser({
      email: "johndoe@example.com",
      password: await fakeHasher.hash("123456"),
    });

    inMemoryUserRepository.items.push(user);

    const result = await sut.execute({
      userId: user.id!,
    });

    expect(result).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
    });
  });
});
