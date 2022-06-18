import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Footer, Navbar } from "../components";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sabelo Mkhwanazi - Home</title>
        <meta name="description" content="Sabelo Personal portfolio site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box>
        <Navbar />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
