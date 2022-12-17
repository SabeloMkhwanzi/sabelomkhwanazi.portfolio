import React from "react";
import {
  Container,
  SimpleGrid,
  Text,
  Group,
  createStyles,
  Badge,
  Stack,
  ActionIcon,
  Paper,
} from "@mantine/core";
import { IconExternalLink, IconBrandGithub } from "@tabler/icons";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const Amaranth = localFont({ src: "../../../fonts/Amaranth-Bold.ttf" });

const SpecialElite = localFont({
  src: "../../../fonts/SpecialElite-Regular.ttf",
});

const Jaldi = localFont({ src: "../../../fonts/Jaldi-Regular.ttf" });

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

  card: {
    height: 350,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function Work2() {
  const { classes } = useStyles();

  function ProjectInfo() {
    return (
      <Paper
        p="md"
        radius="md"
        sx={{
          backgroundColor: "#112240",
        }}
      >
        <Text color="gray.5" className={Jaldi.className}>
          A web3-based Airbnb contender. Decentralized DApp for the home-share,
          hosting and NFT user sharing there experiences. Using web3
          Decentralized technology.
        </Text>
        <Stack align="flex-end" justify="flex-end">
          <Group
            sx={(theme) => ({
              fontSize: theme.fontSizes.md,
              "@media (max-width: 755px)": {
                fontSize: theme.fontSizes.sm,
              },
            })}
          >
            <Badge color="#0E49B5" variant="outline">
              TypeScript
            </Badge>
            <Badge color="#0E49B5" variant="outline">
              Rect JS
            </Badge>

            <Badge color="#0E49B5" variant="outline">
              Solidity
            </Badge>
            <Badge color="#0E49B5" variant="outline">
              Chakr-UI
            </Badge>
          </Group>

          <Group>
            <ActionIcon
              component="a"
              href="https://github.com/SabeloMkhwanzi/thirdbnb3"
              target="_blank"
              color="#0E49B5"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://thirdbnb.vercel.app/"
              target="_blank"
              color="#0E49B5"
            >
              <IconExternalLink size={20} />
            </ActionIcon>
          </Group>
        </Stack>
      </Paper>
    );
  }

  function Imag() {
    const { classes } = useStyles();

    return (
      <Paper
        withBorder
        shadow="md"
        p="xl"
        radius="lg"
        sx={{
          backgroundImage: `url(${"/thirdbnb.jpg"})`,
          borderColor: "#0E49B5",
          borderWidth: 1,
        }}
        className={classes.card}
      />
    );
  }

  return (
    <Container my={100}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
        <Stack
          sx={{
            backgroundColor: "#0A1A2F",
            height: 300,
          }}
          my="auto"
        >
          <Stack
            align="flex-end"
            justify="flex-end"
            sx={{
              backgroundColor: "#0A1A2F",
              height: 300,
            }}
          >
            <Text
              color="#0E49B5"
              px={1}
              fw="bold"
              className={SpecialElite.className}
            >
              Featured Project
            </Text>
            <Text
              component="a"
              href="https://thirdbnb.vercel.app/"
              target="_blank"
              tt="uppercase"
              color="gray.5"
              fw="bold"
              td="underline"
              className={Amaranth.className}
            >
              Thirdbnb
            </Text>
          </Stack>

          <ProjectInfo />
        </Stack>
        <Imag />
      </SimpleGrid>
    </Container>
  );
}
