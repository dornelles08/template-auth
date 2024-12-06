export enum HashAlgorithms {
  "SHA1" = "sha1",
  "SHA256" = "sha256",
  "SHA512" = "sha512",
}

export function defaultOptions(
  accountName: string,
  issuer: string,
  secret: string
): KeyURIOptions {
  return {
    algorithm: HashAlgorithms.SHA1,
    digits: 6,
    step: 30,
    type: Strategy.TOTP,
    accountName,
    issuer,
    secret,
  };
}

export interface KeyURIOptions {
  accountName: string;
  algorithm?: HashAlgorithms;
  counter?: number;
  digits?: number;
  issuer?: string;
  label?: string;
  secret: string;
  step?: number;
  type: Strategy;
}

export enum Strategy {
  "HOTP" = "hotp",
  "TOTP" = "totp",
}

export const STRATEGY = objectValues<typeof Strategy>(Strategy);

export function objectValues<T extends object>(value: T): string[] {
  return Object.keys(value).map(
    (key): string => value[key as keyof T] as unknown as string
  );
}

export abstract class TwoFaAuthenticator {
  abstract generateSecret(): string;
  abstract verify(token: string, secret: string): boolean;
  abstract keyuri(accountName: string, issuer: string, secret: string): string;
}
