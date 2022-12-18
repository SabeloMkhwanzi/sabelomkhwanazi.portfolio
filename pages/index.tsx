import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { AppShell, ScrollArea } from "@mantine/core";

import {
  About,
  Contact,
  Experience,
  Footer,
  HomePage,
  Navbar,
  SideIcon,
  Transitions,
  Work,
} from "../components";
import DividerComp from "../components/DivderComp";

const Home: NextPage = () => {
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
            width: "100%",
            height: "100%",
            position: "fixed",
            left: "0px",
            top: "0px",
          },
        }}
      >
        <ScrollArea style={{ height: "100%" }}>
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
          <Footer />
        </ScrollArea>
      </AppShell>
    </div>
  );
};

export default Home;
