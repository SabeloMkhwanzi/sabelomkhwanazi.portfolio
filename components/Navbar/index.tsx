import { Code } from "@chakra-ui/react";
import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
} from "@mantine/core";
import { useDisclosure, useHover } from "@mantine/hooks";
import { IconHexagonLetterS } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: theme.fontSizes.md,

    "&:hover": {
      color: theme.colors.blue[9],
    },
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: -theme.spacing.md,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md}px ${theme.spacing.md * 2}px`,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  board: {
    borderWidth: "0",
    //borderColor: "#0A1A2F",
  },
}));

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const { hovered, ref } = useHover();

  return (
    <Box pb={60} bg="#0A1A2F">
      <Header height={100} px="md" bg="#0A1A2F" className={classes.board}>
        <Group position="apart" sx={{ height: "100%" }}>
          <IconHexagonLetterS size={70} color="#0E49B5" />

          <Group className={classes.hiddenMobile}>
            <Text
              color="gray.5"
              component="a"
              href="#"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                <Code>01.</Code>
              </Text>
              <Code>About</Code>
            </Text>

            <Text
              color="gray.5"
              component="a"
              href="#"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                <Code>02.</Code>
              </Text>
              <Code> Experience</Code>
            </Text>

            <Text
              color="gray.5"
              component="a"
              href="#"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                <Code>03.</Code>
              </Text>
              <Code>Work</Code>
            </Text>

            <Text
              color="gray.5"
              component="a"
              href="#"
              className={classes.link}
            >
              <Text color="#0E49B5" px={7}>
                <Code>04.</Code>
              </Text>
              <Code>Contact</Code>
            </Text>

            <Button variant="outline" radius="md">
              Resume
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <ScrollArea sx={{ height: "calc(100vh - 60px)" }} mx="-md">
          <Divider my="sm" color="#0A1A2F" />

          <Text color="gray.5" component="a" href="#" className={classes.link}>
            <Text color="#0E49B5" px={7}>
              01.
            </Text>
            About
          </Text>

          <Text color="gray.5" component="a" href="#" className={classes.link}>
            <Text color="#0E49B5" px={7}>
              02.
            </Text>
            Experience
          </Text>
          <Text color="gray.5" component="a" href="#" className={classes.link}>
            <Text color="#0E49B5" px={7}>
              03.
            </Text>
            Work
          </Text>
          <Text color="gray.5" component="a" href="#" className={classes.link}>
            <Text color="#0E49B5" px={7}>
              04.
            </Text>
            Contact
          </Text>
          <Divider my="sm" color="#0A1A2F" />

          <Group position="center" pb="xl" px="md">
            <Button variant="outline" radius="md">
              Resume
            </Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
