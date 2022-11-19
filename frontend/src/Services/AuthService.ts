import { RequestHandler } from "../auth/RequestHandler";

class AuthService extends RequestHandler {
  constructor() {
    super();
  }

  authenticateWithGithub(code: string) {
    return this.http().post('/auth/github', { code });
  }
}

export default new AuthService();