import React from "react";
import {
  Container,
  SimpleGrid,
  Text,
  Title,
  Group,
  createStyles,
} from "@mantine/core";
import Work1 from "./Work1";
import Work2 from "./Work2";
import Work3 from "./Work3";
import Work4 from "./Work4";

import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const Amaranth = localFont({ src: "../../fonts/Amaranth-Bold.ttf" });
const SpecialElite = localFont({ src: "../../fonts/SpecialElite-Regular.ttf" });
const Jaldi = localFont({ src: "../../fonts/Jaldi-Regular.ttf" });

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs * 2,
    fontFamily: "Segoe UI Emoji",

    "&:hover": {
      color: theme.colors.blue[9],
    },
  },
}));

export default function Work() {
  const { classes } = useStyles();

  return (
    <Container my="lg">
      <Group>
        <Text fz={20} color="#0E49B5" className={SpecialElite.className}>
          03.
        </Text>
        <Text
          color="gray.5"
          component="a"
          className={SpecialElite.className}
          fz={25}
          fw="bold"
        >
          Some Things I’ve Built
        </Text>
      </Group>
      <Work1 />
      <Work2 />
      <Work3 />
      <Work4 />
    </Container>
  );
}
