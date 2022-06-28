import jwtDecode from 'jwt-decode';

interface DecodedToken {
  user_id: string;
  role: string;
  exp: number;
}

export const notExpiredToken = (token: string): boolean => {
  const { exp } = jwtDecode(token) as DecodedToken;
  const now = new Date().getTime();
  if (exp * 1000 > now) return true;
  return false;
};
