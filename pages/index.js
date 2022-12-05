import Head from "next/head";
import Table from "../src/table";
import { Typography } from "@material-ui/core";

export default function Home() {
  const data = require("../data/data.json");
  return (
    <>
      <Head>
        <title>oogle Cloud Career Practitioners Program</title>
      </Head>
      <div className = "main-div">
        <footer className="flex apart">
          <Typography variant="body2" color="textSecondary">
            Last updated: {data.buildDate}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            <a
              href="https://www.github.com/crossphoton"
              target="_blank"
              rel="noopener noreferrer"
            >
              Program Facilitator: Rajan Chaudhary
            </a>
          </Typography>
        </footer>
        <div className="center">
          <Typography className="bolder" variant="h2" color="textPrimary">
            GDSC - {data.institute}
          </Typography>
          <Typography className="bolder" variant="h4" color="secondary">
            GCCP - Leader Board
          </Typography>
        </div>
        <Table data={data.resultsWithRank}></Table>
      </div>
    </>
  );
}
