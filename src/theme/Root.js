import React from "react";
import RedirectBanner from "../Components/RedirectBanner/RedirectBanner";

export default function Root({ children }) {
  return (
    <>
      <RedirectBanner />
      {children}
    </>
  );
}
