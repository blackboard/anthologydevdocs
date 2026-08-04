import React, { useEffect, useState } from "react";
import styles from "./RedirectBanner.module.css";

const REDIRECT_PARAM = "from";
const REDIRECT_VALUE = "anthology-redirect";
const DISMISS_KEY = "anthology-redirect-banner-dismissed";

const RedirectBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const wasRedirected = params.get(REDIRECT_PARAM) === REDIRECT_VALUE;

    if (wasRedirected && !window.localStorage.getItem(DISMISS_KEY)) {
      setVisible(true);
    }

    if (params.has(REDIRECT_PARAM)) {
      params.delete(REDIRECT_PARAM);
      const newSearch = params.toString();
      const newUrl =
        window.location.pathname +
        (newSearch ? `?${newSearch}` : "") +
        window.location.hash;
      window.history.replaceState({}, "", newUrl);
    }
  }, []);

  const dismiss = () => {
    setVisible(false);
    window.localStorage.setItem(DISMISS_KEY, "1");
  };

  if (!visible) {
    return null;
  }

  return (
    <div className={styles["redirect-banner"]} role="status">
      <button
        type="button"
        className={styles["dismiss-button"]}
        onClick={dismiss}
        aria-label="Dismiss"
      >
        &times;
      </button>
      <span>
        Did you notice? our url is now <strong>docs.blackboard.com</strong>!
      </span>
    </div>
  );
};

export default RedirectBanner;
