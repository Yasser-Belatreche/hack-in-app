import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamsList = {
  LoginOrSignup: undefined;
  Login: undefined;
  Signup: undefined;
};

export type AuthStackScreenProps<
  CurrentScreen extends keyof AuthStackParamsList,
> = NativeStackScreenProps<AuthStackParamsList, CurrentScreen>;

export type AuthStackScreenNavigation<
  CurrentScreen extends keyof AuthStackParamsList,
> = AuthStackScreenProps<CurrentScreen>['navigation'];
