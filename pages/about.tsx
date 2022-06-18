import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { Footer, Navbar } from "../components";

function about() {
  return (
    <>
      <Head>
        <title>Sabelo Mkhwanazi - About </title>
        <meta name="description" content="Sabelo Personal portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Navbar />
        <Footer />
      </Box>
    </>
  );
}

export default about;
