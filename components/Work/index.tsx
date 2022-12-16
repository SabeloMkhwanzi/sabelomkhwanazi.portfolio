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
      <Group my={50}>
        <Title>
          <Text color="gray.5" component="a" className={classes.link}>
            <Text color="#0E49B5" px={7}>
              03.
            </Text>
            Some Things I’ve Built
          </Text>
        </Title>
      </Group>
      <Work1 />
      <Work2 />
      <Work3 />
      <Work4 />
    </Container>
  );
}
