import axios from 'axios';

interface SignupArgs {
  name: string;
  email: string;
  password: string;
  sex: 'male' | 'female';
}

axios.defaults.baseURL = 'https://hack-in-server.herokuapp.com/api';

class AuthenticationMananger {
  static async login(email: string, password: string): Promise<string> {
    try {
      const {data} = await axios.post('/login', {email, password});
      return data.data;
    } catch (error) {
      throw new Error(`Login Error ${error}`);
    }
  }

  static async signup(args: SignupArgs): Promise<string> {
    try {
      const {data} = await axios.post('/register', args);
      return data.data;
    } catch (error) {
      throw new Error(`Login Error ${error}`);
    }
  }
}

export {AuthenticationMananger};
