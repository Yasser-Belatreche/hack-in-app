import {IActivityJoiningRequest} from '../../../Domain/ActivityJoiningRequest';

export interface IActivitiesJoiningRequestsGateway {
  save(request: IActivityJoiningRequest): Promise<IActivityJoiningRequest>;
  findRequestsFor(receiverId: string): Promise<IActivityJoiningRequest[]>;
}
