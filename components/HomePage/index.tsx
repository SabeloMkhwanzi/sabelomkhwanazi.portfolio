import {
  createStyles,
  Container,
  Text,
  Button,
  Group,
  Code,
} from "@mantine/core";

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
}));

export default function HomePage() {
  const { classes } = useStyles();

  return (
    <div className={classes.wrapper}>
      <Container size={900} className={classes.inner} bg="bgColor">
        <Text px={7} color="gray.5" className={classes.text}>
          Hi, my name is
        </Text>
        <h1 className={classes.title}>
          <Text component="span" color="#CCD6F6" inherit>
            Sabelo Mkhwanazi
          </Text>
          <br />I build with code...
        </h1>

        <Text className={classes.description} color="#8892B0">
          I’m a software developer specializing in building, blockchain
          Enthusiast hacking and building dapps that promotes decentralization.
        </Text>

        <Group className={classes.controls}>
          <Button size="lg" variant="outline" color="#364FC7" radius="md">
            Check My Build
          </Button>
        </Group>
      </Container>
    </div>
  );
}
