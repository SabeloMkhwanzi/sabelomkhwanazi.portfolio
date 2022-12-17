import React, { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { AppShell, ScrollArea } from "@mantine/core";

import {
  About,
  Contact,
  Experience,
  HomePage,
  Loading,
  Navbar,
  SideIcon,
  Transitions,
  Work,
} from "../components";

import DividerComp from "../components/DivderComp";

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
        <title>Sabelo Mkhwanazi</title>
        <meta name="description" content="Sabelo Personal portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell
        navbar={<SideIcon />}
        header={<Navbar />}
        styles={{
          main: {
            backgroundColor: "#0A1A2F",
          },
        }}
      >
        <ScrollArea style={{ height: 1000 }}>
          <Transitions>
            <HomePage />
            <DividerComp />
            <About />
            <DividerComp />
            <Experience />
            <Work />
            <DividerComp />
            <Contact />
          </Transitions>
        </ScrollArea>
      </AppShell>
    </div>
  );
};

export default Home;

// {loading ? (
//         <Loading />
//       ) : (
// //      <Box>
// //        <Navbar />
// //        <HomePage />
// //      </Box>
//  )}
