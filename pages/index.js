import React from "react";
import Head from "next/head";

import AppLayout from "../components/AppLayout";

const Home = () => {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="UTF-8" />
        <title>Next Practice</title>
      </Head>
      <AppLayout>
        <div>Hello</div>
      </AppLayout>
    </div>
  );
};

export default Home;
