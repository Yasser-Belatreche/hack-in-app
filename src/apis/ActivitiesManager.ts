import axios from 'axios';

axios.defaults.baseURL = 'https://hack-in-server.herokuapp.com/api';

interface AddActivityArg {
  authToken: string;
  title: string;
  desc: string;
}

interface SendActivityRequestArgs {
  authToken: string;
  activityId: string;
}

interface ResponseToRequestArgs {
  authToken: string;
  requestId: string;
  response: 'accept' | 'decline';
}

class ActivitiesManager {
  static async addActivity({authToken, title, desc}: AddActivityArg) {
    try {
      const {data} = await axios.post(
        '/addActivity',
        {title, desc},
        {
          headers: {
            authorization: authToken,
          },
        },
      );
      return data.data;
    } catch (error) {
      throw new Error(`Login Error ${error}`);
    }
  }

  static async getActivity(authToken: string) {
    try {
      const {data} = await axios.get('/activities', {
        headers: {
          authorization: authToken,
        },
      });

      return data.data;
    } catch (error) {
      throw new Error(`Get Activity Error: ${error}`);
    }
  }

  // static async sendActivityJoinRequest(args: SendActivityRequestArgs) {
  //   try {
  //     return await activitiesService.sendActivityJoinRequest(args);
  //   } catch (error) {
  //     throw new Error(`Send Activity Join Request Error: ${error}`);
  //   }
  // }

  // static async getActivityJoinRequests(authToken: string) {
  //   try {
  //     return await activitiesService.getActivityJoinRequests(authToken);
  //   } catch (error) {
  //     throw new Error(`Get Activity Joining Requests Error: ${error}`);
  //   }
  // }

  // static async responseToJoiningRequest(args: ResponseToRequestArgs) {
  //   try {
  //     return await activitiesService.responseToJoiningRequest(args);
  //   } catch (error) {
  //     throw new Error(`Get Activity Joining Requests Error: ${error}`);
  //   }
  // }
}

export {ActivitiesManager};
