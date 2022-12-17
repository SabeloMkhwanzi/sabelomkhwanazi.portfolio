import {
  createStyles,
  Image,
  Container,
  SimpleGrid,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";
import localFont from "@next/font/local";
import Transitions from "../Transitions";

// Font files can be colocated inside of `pages`

const SpecialElite = localFont({ src: "../../fonts/SpecialElite-Regular.ttf" });

const Jaldi = localFont({ src: "../../fonts/Jaldi-Regular.ttf" });

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

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

  Paper: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    backgroundColor: theme.fn.variant({
      variant: "light",
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function About() {
  const { classes } = useStyles();
  return (
    <>
      <Transitions>
        <Container id="aboutPage">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Group>
                <Text
                  fz={20}
                  color="#0E49B5"
                  className={SpecialElite.className}
                >
                  01.
                </Text>
                <Text
                  color="gray.5"
                  component="a"
                  className={SpecialElite.className}
                  fz={25}
                  fw="bold"
                >
                  About
                </Text>
              </Group>

              <Text
                color="dimmed"
                mt="md"
                className={Jaldi.className}
                fw={500}
                fz="xl"
              >
                Hi there! My name is Sabelo and I enjoy building amazing things
                with code. My interest in web development started with a
                curiosity to create a blog using Wordpress, but its turns out I
                wasn’t satisfied with just drag n drop - I wanted know how its
                workout in the background. Which lead me to discovering,
                learning programming in it whole.{" "}
              </Text>
              <br />
              <Text
                color="dimmed"
                mt="md"
                className={Jaldi.className}
                fw={500}
                fz="xl"
              >
                As of now, I’ve grown my development skills, had the privilege
                of working, Participating at some projects, including web3 open
                projects and hackathons
              </Text>
              <Text
                color="dimmed"
                mt="md"
                className={Jaldi.className}
                fw={500}
                fz="xl"
              >
                My main focus these days is leveling up my skills and being
                involved with the emerging Web3 ecosystem.
              </Text>
              <br />
              <Text
                color="white"
                mt="md"
                fw={500}
                fz="lg"
                className={Jaldi.className}
              >
                Here are a few technologies I’ve been working with recently
              </Text>

              <List
                mt={30}
                size="sm"
                icon={
                  <ThemeIcon size={20} bg="#0A1A2F">
                    <IconChevronRight size={15} color="#0E49B5" />
                  </ThemeIcon>
                }
              >
                <SimpleGrid cols={2} spacing="sm">
                  <List.Item>
                    <Text
                      color="dimmed"
                      fw={500}
                      fz="lg"
                      className={Jaldi.className}
                    >
                      JavaScript
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color="dimmed"
                      fw={500}
                      fz="lg"
                      className={Jaldi.className}
                    >
                      TypeScript
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color="dimmed"
                      fw={500}
                      fz="lg"
                      className={Jaldi.className}
                    >
                      Next JS
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color="dimmed"
                      fw={500}
                      fz="lg"
                      className={Jaldi.className}
                    >
                      Node JS
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color="dimmed"
                      fw={500}
                      fz="lg"
                      className={Jaldi.className}
                    >
                      Solidity
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      color="dimmed"
                      fw={500}
                      fz="lg"
                      className={Jaldi.className}
                    >
                      Chakra-UI & Mantine
                    </Text>
                  </List.Item>
                </SimpleGrid>
              </List>
            </div>
            <Image
              src="/Sabelologo.png"
              alt="Sabelologo"
              className={classes.image}
              sx={{
                transition: "transform 150ms ease, box-shadow 150ms ease",
                "&:hover": {
                  transform: "scale(1.01)",
                  boxShadow: "md",
                  color: "blue",
                },
              }}
            />
          </div>
        </Container>
      </Transitions>
    </>
  );
}
