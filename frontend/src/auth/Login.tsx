import { Button } from "react-daisyui";
import AuthService from "../Services/AuthService";

const buildGithubOauthURL = () => {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', import.meta.env.VITE_GITHUB_CLIENT_ID);
  url.searchParams.set('client_secret', import.meta.env.VITE_GITHUB_CLIENT_SECRET);
  url.searchParams.set('redirect_uri', import.meta.env.VITE_OAUTH_REDIRECT_URI);
  url.searchParams.set('scope', import.meta.env.VITE_GITHUB_OAUTH_SCOPE);
  url.searchParams.set('state', import.meta.env.VITE_GITHUB_SECRET_STATE);
  return url;
}

function Login() {
  
  let popUpRef: Window | null = null;
  let previousUrl: URL | null = null;
  
  function openSigninPopup (url: URL, name: string) {
    window.removeEventListener('message', receiveMessage);
    const options = `toolbar=no, menubar=no, width=600, height=700, top=100, left=100`;
    if (popUpRef === null || popUpRef.closed) {
      popUpRef = window.open(url, name, options) as Window;
    } else if (previousUrl !== url) {
      popUpRef = window.open(url, name, options) as Window;
      popUpRef.focus();
    } else {
      popUpRef.focus();
    }
    
    window.addEventListener('message', (event) => receiveMessage(event), false);
    previousUrl = url;
  }

  function receiveMessage(event: MessageEvent) {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const state = import.meta.env.VITE_GITHUB_SECRET_STATE;
    const redirectURI = new URL(event.data);

    if (redirectURI.origin !== baseURL) {
      console.log('false origin')
      return;
    }
    if (redirectURI.searchParams.get('state') !== state) {
      console.log('false state')
      return;
    }
    const code = redirectURI.searchParams.get('code') as string;
    AuthService.authenticateWithGithub(code);
  }

  function handleGithubSignin() {
    const url = buildGithubOauthURL();
    const windowName = "Cloudspaces - Github Signin"
    openSigninPopup(url, windowName);
  }

  return (
    <Button  onClick={handleGithubSignin} color="ghost" className="normal-case text-xl">
      Continue with Github
    </Button>
  )
}

export default Login;