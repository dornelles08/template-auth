export abstract class Encrypter {
  abstract encrypt(payload: Record<string, unknown>): Promise<string>;
  abstract twoFaToken(payload: Record<string, unknown>): Promise<string>;
  abstract refreshToken(payload: Record<string, unknown>): Promise<string>;
}
