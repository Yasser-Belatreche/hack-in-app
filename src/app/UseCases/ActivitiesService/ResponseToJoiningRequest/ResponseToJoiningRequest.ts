import {tokenManager} from '../../../DrivenAdapters';
import {IActivitiesJoiningRequestsGateway} from '../../../DrivenAdapters/Persistence/ActivitiesJoiningRequestsGateway/ActivitiesJoiningRequestsGateway.interface';
import {IStudentsGateway} from '../../../DrivenAdapters/Persistence/StudentsGateway/IStudentsGateway.interface';

type ResponseArgs = {
  authToken: string;
  requestId: string;
  response: 'accept' | 'decline';
};

class ResponseToRequestFactory {
  constructor(
    private readonly activitiesJoiningRequestsGateway: IActivitiesJoiningRequestsGateway,
    private readonly studentsGateway: IStudentsGateway,
  ) {}

  async response(args: ResponseArgs) {
    const {authToken, requestId, response} = args;
    const authUserId = tokenManager.decode(authToken);

    return args;
  }
}

export {ResponseToRequestFactory};
