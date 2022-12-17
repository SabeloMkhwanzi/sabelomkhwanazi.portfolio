import React from "react";
import { Spinner, Center } from "@chakra-ui/react";

export default function Loading() {
  return (
    <>
      <Center
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          left: "0px",
          top: "0px",
        }}
      >
        <Spinner size="lg" color="#ED4D31" variant="bars" />
      </Center>
    </>
  );
}
