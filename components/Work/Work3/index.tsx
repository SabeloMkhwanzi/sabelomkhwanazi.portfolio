import React from "react";
import {
  Container,
  SimpleGrid,
  Text,
  Title,
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

export default function Work3() {
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
          A web3 freelance marketplace service, That connects talents to open
          projects or opportunities looking to hire. Accelerating the use of
          decentralized world.
        </Text>
        <Stack align="flex-end" justify="flex-end">
          <Group>
            <Badge color="#0E49B5" variant="outline">
              JavaScript
            </Badge>
            <Badge color="#0E49B5" variant="outline">
              Next JS
            </Badge>
            <Badge color="#0E49B5" variant="outline">
              Chakra-UI
            </Badge>
            <Badge color="#0E49B5" variant="outline">
              IPFS-NFT.Storage
            </Badge>
            <Badge color="#0E49B5" variant="outline">
              XMPT-Protocol
            </Badge>
          </Group>

          <Group>
            <ActionIcon
              component="a"
              href="https://github.com/SabeloMkhwanzi/Gigiblock-social-hour-web3"
              target="_blank"
              color="#0E49B5"
            >
              <IconBrandGithub size={20} />
            </ActionIcon>
            <ActionIcon
              component="a"
              href="https://gigiblock-social-hour-web3.vercel.app/"
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
          backgroundImage: `url(${"/gigiblock.jpg"})`,
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
        <Imag />

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
              href="https://gigiblock-social-hour-web3.vercel.app/"
              target="_blank"
              tt="uppercase"
              color="gray.5"
              fw="bold"
              td="underline"
              className={Amaranth.className}
            >
              GigiBlock
            </Text>
          </Stack>

          <ProjectInfo />
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
