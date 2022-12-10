import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { AppShell } from "@mantine/core";
import { HomePage, Loading, Navbar } from "../components";

const Home: NextPage = () => {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  return (
    <div>
      <Head>
        <title>Sabelo Mkhwanazi - Home</title>
        <meta name="description" content="Sabelo Personal portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppShell
        // navbar={}
        header={<Navbar />}
        // footer={}
      >
        <HomePage />
      </AppShell>
    </div>
  );
};

export default Home;

//  {
//    loading ? (
//      <Loading />
//    ) : (
//      <Box>
//        <Navbar />
//        <HomePage />
//      </Box>
//    );
//  }
