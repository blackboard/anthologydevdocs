import React, { useEffect } from "react";

import { useHistory } from "react-router-dom";
import NotFound from "@theme-original/NotFound";
import customRedirects from "../../page-redirects";

export default function NotFoundWrapper(props) {
  const history = useHistory();

  useEffect(() => {
    const currentUrl = window.location.pathname;
    console.log("🚀 ~ useEffect ~ currentUrl:", currentUrl);
    const targetLocation = customRedirects[currentUrl];

    if (targetLocation) {
      window.history.replaceState({}, "", targetLocation);
      history.push(targetLocation);
    }
  }, [history]);

  return (
    <>
      <NotFound {...props} />
    </>
  );
}

/// Taken from: https://stackoverflow.com/questions/76000415/in-docusaurus-v2-is-there-a-way-to-handle-redirects-to-some-url-path-default and tweaked for specific routes
