export interface Auth {
  accessToken: string;
  refreshToken: string;
  message: string;
}

export interface AuthError {
  status: number;
  error: { message: string };
}
