export type LoginResponseModel = {
  authenticationToken: string;
  refreshToken: string;
  expiresIn: number;
  username: string;
};
