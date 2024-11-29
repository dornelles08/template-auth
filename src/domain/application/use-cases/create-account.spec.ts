import { FakeHasher } from "test/cryptography/fake-hasher";
import { InMemoryUserRepository } from "test/repositories/in-memory-user.repository";
import { CreateAccountUseCase } from "./create-account";
import { UserAlreadyExistsError } from "./errors/user-already-exists.error";

let inMemoryUserRepository: InMemoryUserRepository;
let fakeHasher: FakeHasher;
// System under test
let sut: CreateAccountUseCase;

describe("Create Account", () => {
  beforeEach(() => {
    inMemoryUserRepository = new InMemoryUserRepository();
    fakeHasher = new FakeHasher();
    sut = new CreateAccountUseCase(inMemoryUserRepository, fakeHasher);
  });

  it("should create a new account", async () => {
    const result = await sut.execute({
      email: "johndoe@example.com",
      name: "John Doe",
      password: "123456",
    });

    expect(result).toEqual({
      user: inMemoryUserRepository.items[0],
    });
  });

  it("should not be able to create a new account with same e-mail", async () => {
    const email = "johndoe@example.com";

    await sut.execute({
      email,
      name: "John Doe",
      password: "123456",
    });

    await expect(() =>
      sut.execute({ email, name: "John Doe", password: "123456" })
    ).rejects.toBeInstanceOf(UserAlreadyExistsError);
  });

  it("should hash user password upon account creation", async () => {
    await sut.execute({
      email: "johndoe@example.com",
      name: "John Doe",
      password: "123456",
    });

    const hashedPassword = await fakeHasher.hash("123456");

    expect(inMemoryUserRepository.items[0].password).toEqual(hashedPassword);
  });
});
