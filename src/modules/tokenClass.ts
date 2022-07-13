import jwtDecode from 'jwt-decode';

class Token {
  #token: string;
  constructor() {
    this.#token = '';
  }

  tokenExists = () => {
    if (localStorage.getItem('User')) return true;
    else return false;
  };

  getToken = () => {
    return localStorage.getItem('User') as string;
  };

  isValid = () => {
    if (this.tokenExists()) {
      this.#token = this.getToken();
      const { exp } = jwtDecode(this.#token) as DecodedToken;
      const now = new Date().getTime();

      if (exp * 1000 > now) return true;
    } else {
      localStorage.removeItem('User');
    }
    return false;
  };

  getUserInfo = (token: string): UserData => {
    const { user_data, role } = jwtDecode(token) as DecodedToken;
    return { ...user_data, role };
  };

  loadToken = () => {
    if (this.isValid()) {
      return this.getUserInfo(this.#token);
    }

    return null;
  };

  static setSessionToken = (token: string) => {
    localStorage.setItem('User', JSON.stringify(token));
  };
}

export default Token;
