import { Provider } from '../models/types';
import { RequestHandler } from "../auth/RequestHandler";

class AuthService extends RequestHandler {
  constructor() {
    super();
  }

  authenticate(code: string, provider: Provider) {
    return this.http().post(`user/authenticate?provider=${provider}`, { code });
  }

}

export default new AuthService();