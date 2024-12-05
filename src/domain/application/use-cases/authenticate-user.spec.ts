import { UnauthorizedException } from "@nestjs/common";
import { FakeEncrypter } from "test/cryptography/fake-encrypter";
import { FakeHasher } from "test/cryptography/fake-hasher";
import { makeUser } from "test/factories/make-user";
import { InMemoryUserRepository } from "test/repositories/in-memory-user.repository";
import { AuthenticateUserUseCase } from "./authenticate-user";

let inMemoryUserRepository: InMemoryUserRepository;
let fakeHasher: FakeHasher;
let fakeEncrypter: FakeEncrypter;
// System under test
let sut: AuthenticateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    fakeHasher = new FakeHasher();
    fakeEncrypter = new FakeEncrypter();

    sut = new AuthenticateUserUseCase(
      inMemoryUserRepository,
      fakeHasher,
      fakeEncrypter
    );
  });

  it("should be able to authenticate a user without 2fa activated", async () => {
    const user = makeUser({
      email: "johndoe@example.com",
      password: await fakeHasher.hash("123456"),
    });

    inMemoryUserRepository.items.push(user);

    const result = await sut.execute({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(result).toEqual({
      accessToken: expect.any(String),
      refreshToken: expect.any(String),
      twoFaToken: "",
    });
  });

  it("should be able to authenticate a user with 2fa activated", async () => {
    const user = makeUser({
      email: "johndoe@example.com",
      password: await fakeHasher.hash("123456"),
      twoFactorEnabled: true,
    });

    inMemoryUserRepository.items.push(user);

    const result = await sut.execute({
      email: "johndoe@example.com",
      password: "123456",
    });

    expect(result).toEqual({
      twoFaToken: expect.any(String),
      accessToken: "",
      refreshToken: "",
    });
  });

  it("should not be able to authenticate a user with unexist e-mail", async () => {
    const email = "johndoe@example.com";

    const user = makeUser({
      email: email,
      password: await fakeHasher.hash("123456"),
    });

    inMemoryUserRepository.items.push(user);

    await expect(() =>
      sut.execute({ email: "wrongemail@email.com", password: "123456" })
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });

  it("should not be able to authenticate a user with wrong password", async () => {
    const email = "johndoe@example.com";
    makeUser({
      email: email,
      password: await fakeHasher.hash("123456"),
    });

    await expect(() =>
      sut.execute({ email, password: "wrongPass" })
    ).rejects.toBeInstanceOf(UnauthorizedException);
  });
});
