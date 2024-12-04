import { Encrypter } from "@/domain/application/cryptography/encrypter";

export class FakeEncrypter implements Encrypter {
  async refreshToken(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload);
  }
  async encrypt(payload: Record<string, unknown>): Promise<string> {
    return JSON.stringify(payload);
  }
}
