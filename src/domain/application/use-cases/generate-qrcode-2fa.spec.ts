import { FakeHasher } from "test/cryptography/fake-hasher";
import { makeUser } from "test/factories/make-user";
import { InMemoryUserRepository } from "test/repositories/in-memory-user.repository";
import { FakeAuthenticator } from "test/twoFa/fake-authenticator";
import { GenerateQrCodeUseCase } from "./generate-qrcode-2fa";

let inMemoryUserRepository: InMemoryUserRepository;
let fakeHasher: FakeHasher;
let fakeAuthenticator: FakeAuthenticator;
// System under test
let sut: GenerateQrCodeUseCase;

describe("Generate QrCode 2FA", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    fakeHasher = new FakeHasher();
    fakeAuthenticator = new FakeAuthenticator();

    sut = new GenerateQrCodeUseCase(inMemoryUserRepository, fakeAuthenticator);
  });

  it("should be able to generate qrcode 2fa", async () => {
    const user = makeUser({
      email: "johndoe@example.com",
      password: await fakeHasher.hash("123456"),
    });

    inMemoryUserRepository.items.push(user);

    const result = await sut.execute({
      userId: user.id!,
      appName: "My App",
    });

    expect(result).toEqual({
      qrCode: expect.any(String),
    });
  });
});
