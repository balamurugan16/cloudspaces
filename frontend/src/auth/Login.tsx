import { buildGithubOauthURL, buildGitlabOauthURL } from "../utils/buildOAuthURL";
import AuthWrapper from "./AuthWrapper";
import GithubIcon from '../../src/assets/github.svg'
import GitlabIcon from '../../src/assets/gitlab.svg'

function Login() {
  return (
    <>
      <AuthWrapper
        label="Continue With Github"
        url={buildGithubOauthURL()}
        provider='github'
        icon={GithubIcon}
      />
      <AuthWrapper
        label="Continue With Gitlab"
        url={buildGitlabOauthURL()}
        provider='gitlab'
        icon={GitlabIcon}
      />
    </>
  )
}

export default Login;