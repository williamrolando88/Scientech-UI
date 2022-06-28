import jwtDecode from 'jwt-decode';

type DecodedToken = {
  user_id: string;
  user_data: {
    name: string;
    email: string;
  };
  role: string;
  exp: number;
};

type UserData = {
  name: string;
  email: string;
  role: string;
};

export const notExpiredToken = (token: string): boolean => {
  const { exp } = jwtDecode(token) as DecodedToken;
  const now = new Date().getTime();
  if (exp * 1000 > now) return true;
  return false;
};

export const userInfo = (token: string): UserData => {
  const { user_data, role } = jwtDecode(token) as DecodedToken;
  return { ...user_data, role };
};
