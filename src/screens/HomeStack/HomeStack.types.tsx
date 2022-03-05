import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type HomeStackParamsList = {
  Home: undefined;
  Notifications: undefined;
  AddActivity: undefined;
};

export type HomeStackScreenProps<
  CurrentScreen extends keyof HomeStackParamsList,
> = NativeStackScreenProps<HomeStackParamsList, CurrentScreen>;
export type HomeStackNavigation<
  CurrentScreen extends keyof HomeStackParamsList,
> = HomeStackScreenProps<CurrentScreen>['navigation'];
