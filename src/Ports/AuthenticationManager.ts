import {authService} from '../app';

interface SignupArgs {
  name: string;
  email: string;
  password: string;
  sex: 'male' | 'female';
}

class AuthenticationMananger {
  static async login(email: string, password: string): Promise<string> {
    try {
      return await authService.login(email, password);
    } catch (error) {
      throw new Error(`Login Error ${error}`);
    }
  }

  static async signup(args: SignupArgs): Promise<string> {
    try {
      return await authService.register(args);
    } catch (error) {
      throw new Error(`Signup Error ${error}`);
    }
  }
}

export {AuthenticationMananger};
