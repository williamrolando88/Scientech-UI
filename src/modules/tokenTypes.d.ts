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
