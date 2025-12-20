export interface AuthRegisterInterface {
  email: string;
  password: string;
  name: string;
}

export interface AuthRegisterResponse extends AuthRegisterInterface {
  createdAt: string;
}
