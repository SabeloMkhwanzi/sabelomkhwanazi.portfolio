import { createStyles, Title, Text, Container } from "@mantine/core";
import EmailButton from "../EmailButton";
import Transitions from "../Transitions";

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: "relative",
    paddingTop: 120,
    paddingBottom: 80,

    "@media (max-width: 755px)": {
      paddingTop: 80,
      paddingBottom: 60,
    },
  },

  inner: {
    position: "relative",
    zIndex: 1,
  },

  title: {
    textAlign: "center",
    fontWeight: 800,
    fontSize: 40,
    letterSpacing: -1,
    color: "#8892B0",
    marginBottom: theme.spacing.xs,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    "@media (max-width: 520px)": {
      fontSize: 28,
      textAlign: "left",
    },
  },

  highlight: {
    color:
      theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6],
  },

  description: {
    textAlign: "center",

    "@media (max-width: 520px)": {
      textAlign: "left",
      fontSize: theme.fontSizes.md,
    },
  },

  controls: {
    marginTop: theme.spacing.lg,
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 520px)": {
      flexDirection: "column",
    },
  },

  control: {
    "&:not(:first-of-type)": {
      marginLeft: theme.spacing.md,
    },

    "@media (max-width: 520px)": {
      height: 42,
      fontSize: theme.fontSizes.md,

      "&:not(:first-of-type)": {
        marginTop: theme.spacing.md,
        marginLeft: 0,
      },
    },
  },
}));

export default function Contact() {
  const { classes } = useStyles();

  return (
    <>
      <Transitions>
        <Container className={classes.wrapper} size={1400} id="contactPage">
          <div className={classes.inner}>
            <Title className={classes.title}> Thanks for Passing by</Title>{" "}
            <Container p={0} size={600}>
              <Text size="lg" color="dimmed" className={classes.description}>
                Lets Build some amazing things with code!!!
              </Text>
            </Container>
            <div className={classes.controls}>
              <EmailButton />
            </div>
          </div>
        </Container>
      </Transitions>
    </>
  );
}
