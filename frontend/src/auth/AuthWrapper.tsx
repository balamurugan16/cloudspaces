import { FC } from 'react';
import { Button } from 'react-daisyui';
import OauthPopup from 'react-oauth-popup';
import { Provider } from '../models/types';
import AuthService from '../Services/AuthService';

interface IProps {
  url: string;
  label: string;
  provider: Provider;
  icon: string;
}

const AuthWrapper: FC<IProps> = ({ url, label, provider, icon }) => {
  
  function signInHandler(code: string, params: URLSearchParams) {
    const state = import.meta.env.VITE_OAUTH_SECRET_STATE;
    console.log(params);
    if (params.get('state') !== state) {
      console.log('false state')
      return;
    }
    AuthService.authenticate(code, provider);
  }

  return (
      <OauthPopup
        height={700}
        width={600}
        title="Cloudsapces"
        url={url}
        children={
          <Button color="ghost" className="normal-case text-xl" endIcon={icon}>
            { label }
          </Button>
        }
        onClose={() => {}}
        onCode={signInHandler}
      />
  )
}

export default AuthWrapper;