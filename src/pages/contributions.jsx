import React, { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import clsx from "clsx";
import styles from "./contributions.module.css";

import ContributionsTable from "../Components/ContributionsTable/ContributionsTable";
import { apiGetContributions } from "../services/apiContributions";

let apiContributionData = [];

const productTypeLookup = {
  Learn: "Learn",
  Student: "Student",
  Reach: "Reach",
};

export default function Contributions() {
  const [allContributions, setAllContributions] = useState([]);

  function filterByProduct() {
    const dataByProduct = apiContributionData
      .filter((repo) => !repo.name.startsWith("."))
      .map((repo) => {
        const productType =
          Object.keys(productTypeLookup).find((key) =>
            repo.name.startsWith(key)
          ) || "Other";

        return {
          ...repo,
          product_type: productType,
        };
      });
    console.log(`Filtered by product data`);
    console.log(dataByProduct);
    return dataByProduct;
  }

  useEffect(() => {
    async function getData() {
      apiContributionData = await apiGetContributions();
      setAllContributions(filterByProduct());
    }
    getData();
  }, []);

  return (
    <Layout title="Home">
      <div className={clsx(styles["contributions-section"])}>
        <h1>Welcome to the Community Contributions page!</h1>
        <p>
          This is the index of the applications/programs/documentation currently
          available for our different products, along with the language and a
          brief description of its purpose.
          <br />
          If you find any specific error or issue with any of the code
          repositories, feel free to open a new issue within the repository of
          the affected source and we'll review it.
        </p>
      </div>
      <main className={clsx(styles["contributions-main"])}>
        <ContributionsTable contributionDataRows={allContributions} />
      </main>
    </Layout>
  );
}
