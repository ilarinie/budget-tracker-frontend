
interface Credentials {
  username: string;
  password: string;
}

export enum LOGIN_STATUS {
  LOGGED_IN, CHECKING_STATUS, LOGGED_OUT
}

class AuthService {

  static instance: AuthService | null = null;
  static API_URL = process.env.REACT_APP_API_URL;

  static getInstance (): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public login = async (credentials: Credentials): Promise<boolean> => {
    const body = JSON.stringify({credentials});
    const res = await fetch(AuthService.API_URL + 'login', {
      method: 'POST',
      body,
      headers: {
        'Content-type': 'application/json',
        'access-control-allow-headers': 'Authorization',
        'access-control-expose-headers': 'Authorization'
      }
    });
    if (res.status !== 200) {
      return false;
    } else {
      const body = await res.json();
      localStorage.setItem('token', body.token);
      return true;
    }
  }

  public checkLoginStatus = async (): Promise<LOGIN_STATUS> => {
    const res = await fetch(AuthService.API_URL + 'logged_in', { headers: { 'Authorization': localStorage.getItem('token') as string }});
    if (res.status !== 200) {
      return LOGIN_STATUS.LOGGED_OUT;
    } else {
      return LOGIN_STATUS.LOGGED_IN;
    }
  }

}

export default AuthService;