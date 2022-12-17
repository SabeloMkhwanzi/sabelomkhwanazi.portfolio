import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Flex,
  Box,
  Image,
} from "@mantine/core";
import localFont from "@next/font/local";
import BackgroundAnimation from "../BackgroundAnimation";

import Transitions from "../Transitions";

// Font files can be colocated inside of `pages`
const Amaranth = localFont({ src: "../../fonts/Amaranth-Bold.ttf" });
const SpecialElite = localFont({ src: "../../fonts/SpecialElite-Regular.ttf" });
const Jaldi = localFont({ src: "../../fonts/Jaldi-Regular.ttf" });

const BREAKPOINT = "@media (max-width: 755px)";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxSizing: "border-box",
    backgroundColor: "#0A1A2F",
  },

  inner: {
    position: "relative",
    paddingTop: 150,
    paddingBottom: 321,

    [BREAKPOINT]: {
      paddingBottom: 80,
      paddingTop: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: "#8892B0",

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },

  text: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: theme.fontSizes.lg,
    color: theme.colors.blue[9],
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("lg")]: {
      display: "none",
    },
  },

  hero: {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <>
      <Transitions>
        <div className={classes.wrapper}>
          <Container size={900} className={classes.inner} bg="bgColor">
            <Text fz={25} color="#0E49B5" className={SpecialElite.className}>
              Hi, There 👋 I’m
            </Text>
            <h1 className={classes.title}>
              <Text
                className={Amaranth.className}
                component="span"
                color="#CCD6F6"
                inherit
              >
                Sabelo Mkhwanazi
              </Text>

              <br />
              <Text className={Amaranth.className} color="#0E49B5">
                I enjoy building with code...
              </Text>
            </h1>

            <Text fz={24} className={Jaldi.className} color="#8892B0">
              I’m a software developer specializing in building amazing Apps. A
              blockchain Enthusiast, hacking and building dapps that promotes
              decentralization.
            </Text>

            <Group className={classes.controls}>
              <Button
                size="lg"
                variant="outline"
                color="#364FC7"
                radius="md"
                href="#workPage"
                component="a"
              >
                Check My Builds
              </Button>
            </Group>
          </Container>
        </div>
      </Transitions>
    </>
  );
}
