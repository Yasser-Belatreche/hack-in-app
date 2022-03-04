import {AuthServiceFacade} from './UseCases/AuthService/AuthServiceFacade';

import {FakeStudentsGateway} from './__tests__/__fakes__/Persistence/FakeStudentsGateway';

const authService = new AuthServiceFacade(new FakeStudentsGateway());

export {authService};
