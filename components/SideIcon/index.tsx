import { useState } from "react";
import { Navbar, createStyles, Stack, Flex, Divider } from "@mantine/core";
import {
  TablerIcon,
  IconBrandCodepen,
  IconBrandYoutube,
  IconBrandMedium,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandTwitter,
} from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.sm,
    color: "#8892B0",

    "&:hover": {
      color: theme.colors.blue[9],
    },
  },

  board: {
    borderWidth: "0",
    //borderColor: "#0A1A2F",
  },
}));

function DividerComp() {
  return (
    <Divider size="sm" orientation="vertical" color="#8892B0" variant="solid" />
  );
}

export default function SideIcon() {
  const { classes } = useStyles();

  return (
    <Navbar
      bg="#0A1A2F"
      height={750}
      width={{ base: 80 }}
      p="md"
      className={classes.board}
    >
      <Navbar.Section grow mt={50}>
        <Stack justify="center" spacing={0}></Stack>
      </Navbar.Section>

      <Navbar.Section>
        <Stack justify="center" spacing={25}>
          <Flex className={classes.link}>
            <IconBrandGithub size={30} />
          </Flex>
          <Flex className={classes.link}>
            <IconBrandTwitter size={30} />
          </Flex>
          <Flex className={classes.link}>
            <IconBrandLinkedin size={30} />
          </Flex>
          <Flex className={classes.link}>
            <IconBrandYoutube size={30} />
          </Flex>
        </Stack>
        <DividerComp />
      </Navbar.Section>
    </Navbar>
  );
}
