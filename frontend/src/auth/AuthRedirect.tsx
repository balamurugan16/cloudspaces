import { useEffect } from "react"

export default () => {
  useEffect(() => {
    const { href } = window.location;
    if (window.opener) {
      window.opener.postMessage(href);
      window.close();
    };
  }, []);
  return <p>Please wait...</p>
}