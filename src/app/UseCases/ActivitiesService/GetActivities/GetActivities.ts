import {tokenManager} from '../../../DrivenAdapters';
import {IActivitiesGateway} from '../../../DrivenAdapters/Persistence/ActivitiesGateway/ActivitiesGateway.interface';

class GetActivitiesFactory {
  constructor(private readonly activitesGateway: IActivitiesGateway) {}

  async getList(authToken: string) {
    tokenManager.decode(authToken);

    const activities = await this.activitesGateway.getAll();
    return activities.map(activity => activity.info());
  }
}

export {GetActivitiesFactory};
