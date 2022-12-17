import React, { useEffect, useState } from "react";
import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { WelcomeScreen } from "../components";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          colors: {
            bgColor: ["#0A1A2F"],
          },
        }}
      >
        {!loading ? <Component {...pageProps} /> : <WelcomeScreen />}
      </MantineProvider>
    </>
  );
}

// {loading ? (
//         <Loading />
//       ) : (
// //      <Box>
// //        <Navbar />
// //        <HomePage />
// //      </Box>
//  )}
