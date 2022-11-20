export const buildGithubOauthURL = () => {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', import.meta.env.VITE_GITHUB_CLIENT_ID);
  url.searchParams.set('redirect_uri', import.meta.env.VITE_OAUTH_REDIRECT_URI);
  url.searchParams.set('scope', import.meta.env.VITE_GITHUB_OAUTH_SCOPE);
  url.searchParams.set('state', import.meta.env.VITE_OAUTH_SECRET_STATE);
  return url.toString();
}

export const buildGitlabOauthURL = () => {
  const url = new URL('https://gitlab.com/oauth/authorize');
  url.searchParams.set('client_id', import.meta.env.VITE_GITLAB_CLIENT_ID);
  url.searchParams.set('redirect_uri', import.meta.env.VITE_OAUTH_REDIRECT_URI);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('state', import.meta.env.VITE_OAUTH_SECRET_STATE);
  url.searchParams.set('scope', import.meta.env.VITE_GITLAB_OAUTH_SCOPE);
  return url.toString();
}