import React from "react";
import { Container, Text, Group } from "@mantine/core";
import Work1 from "./Work2";
import Work2 from "./Work3";
import Work3 from "./Work4";
import Work4 from "./Work1";

import localFont from "@next/font/local";
import Transitions from "../Transitions";

// Font files can be colocated inside of `pages`
const SpecialElite = localFont({ src: "../../fonts/SpecialElite-Regular.ttf" });

export default function Work() {
  return (
    <>
      <Transitions>
        <Container my="lg" id="workPage">
          <Group>
            {/* <Text fz={20} color="#0E49B5" className={SpecialElite.className}>
              03.
            </Text> */}
            <Text
              color="gray.5"
              component="a"
              className={SpecialElite.className}
              fz={25}
              fw="bold"
            >
              Portfolio Projects
            </Text>
          </Group>
          <Work4 />
          <Work1 />
          <Work2 />
          <Work3 />
        </Container>
      </Transitions>
    </>
  );
}
