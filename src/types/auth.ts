export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IUpdatePassword {
  email: string;
  currentPassword: string;
  newPassword: string;
}
