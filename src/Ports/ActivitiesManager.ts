import {activitiesService} from '../app';

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
  static async addActivity(args: AddActivityArg) {
    try {
      return await activitiesService.addActivity(args);
    } catch (error) {
      throw new Error(`Add Activity Error: ${error}`);
    }
  }

  static async getActivity(authToken: string) {
    try {
      return await activitiesService.getActivities(authToken);
    } catch (error) {
      throw new Error(`Get Activity Error: ${error}`);
    }
  }

  static async sendActivityJoinRequest(args: SendActivityRequestArgs) {
    try {
      return await activitiesService.sendActivityJoinRequest(args);
    } catch (error) {
      throw new Error(`Send Activity Join Request Error: ${error}`);
    }
  }

  static async getActivityJoinRequests(authToken: string) {
    try {
      return await activitiesService.getActivityJoinRequests(authToken);
    } catch (error) {
      throw new Error(`Get Activity Joining Requests Error: ${error}`);
    }
  }

  static async responseToJoiningRequest(args: ResponseToRequestArgs) {
    try {
      return await activitiesService.responseToJoiningRequest(args);
    } catch (error) {
      throw new Error(`Get Activity Joining Requests Error: ${error}`);
    }
  }
}

export {ActivitiesManager};
