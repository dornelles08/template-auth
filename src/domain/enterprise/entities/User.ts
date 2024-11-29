import { randomUUID } from "crypto";

export interface UserProps {
  id?: string;
  email: string;
  name: string;
  password: string;
  twoFactorSecret?: string;
  twoFactorEnabled?: boolean;
  recoveryCode?: string;
}

export class User {
  constructor(private props: UserProps, id?: string) {
    this.props = {
      ...props,
      id: id ?? randomUUID(),
    };
  }

  get id() {
    return this.props.id;
  }
  get email() {
    return this.props.email;
  }
  get name() {
    return this.props.name;
  }
  get password() {
    return this.props.password;
  }
  get twoFactorSecret() {
    return this.props.twoFactorSecret;
  }
  get twoFactorEnabled() {
    return this.props.twoFactorEnabled;
  }
  get recoveryCode() {
    return this.props.recoveryCode;
  }
}
