import jwtDecode from 'jwt-decode';

class Token {
  #token: string;
  constructor() {
    this.#token = '';
  }

  tokenExists = () => {
    if (sessionStorage.getItem('User')) return true;
    else return false;
  };

  getToken = () => {
    return sessionStorage.getItem('User') as string;
  };

  isValid = (token: string) => {
    const { exp } = jwtDecode(token) as DecodedToken;
    const now = new Date().getTime();
    if (exp * 1000 > now) return true;
    return false;
  };

  getUserInfo = (token: string): UserData => {
    const { user_data, role } = jwtDecode(token) as DecodedToken;
    return { ...user_data, role };
  };

  loadToken = () => {
    if (this.tokenExists()) {
      this.#token = this.getToken();
      if (this.isValid(this.#token)) {
        return this.getUserInfo(this.#token);
      } else {
        sessionStorage.removeItem('User');
      }
    }

    return null;
  };

  static setSessionToken = (token: string) => {
    sessionStorage.setItem('User', JSON.stringify(token));
  };
}

export default Token;
