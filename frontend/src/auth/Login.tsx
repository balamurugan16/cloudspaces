import { buildGithubOauthURL, buildGitlabOauthURL } from "../utils/buildOAuthURL";
import AuthWrapper from "./AuthWrapper";
import { ReactComponent as GithubIcon } from '../assets/github.svg'
import { ReactComponent as GitlabIcon } from '../assets/gitlab.svg'

function Login() {
  return (
    <>
      <AuthWrapper
        label="Continue With Github"
        url={buildGithubOauthURL()}
        provider='github'
        icon={<GithubIcon className="h-5 w-5 text-white" />}
      />
      <AuthWrapper
        label="Continue With Gitlab"
        url={buildGitlabOauthURL()}
        provider='gitlab'
        icon={<GitlabIcon className="h-5 w-5"/>}
      />
    </>
  )
}

export default Login;