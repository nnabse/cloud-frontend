export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface AuthError {
  status: number;
  error: { message: string };
}
