import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Content from "@theme-original/NotFound/Content";

import customRedirects from "../../../../page-redirects";

export default function ContentWrapper(props) {
  const history = useHistory();

  useEffect(() => {
    const currentUrl = window.location.pathname;
    const targetLocation = customRedirects[currentUrl];

    if (targetLocation) {
      window.history.replaceState({}, "", targetLocation);
      history.push(targetLocation);
    }
  }, [history]);

  return (
    <>
      <Content {...props} />
    </>
  );
}
