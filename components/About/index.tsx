import {
  createStyles,
  Image,
  Container,
  Title,
  SimpleGrid,
  Group,
  Text,
  Code,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconChevronRight } from "@tabler/icons";

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
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Group>
              <Title>
                <Text color="gray.5" component="a" className={classes.link}>
                  <Text color="#0E49B5" px={7}>
                    01.
                  </Text>
                  About
                </Text>
              </Title>
            </Group>

            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes{" "}
              <Text td="underline" span c="blue" inherit>
                highlight
              </Text>{" "}
              more than 120 customizable components and hooks to cover you in
              any situation
            </Text>
            <br />
            <Text color="dimmed" mt="md">
              Build fully functional accessible web applications faster than
              ever – Mantine includes{" "}
              <Text td="underline" span c="blue" inherit>
                highlight
              </Text>{" "}
              more than 120 customizable components and hooks to cover you in
              any situation
            </Text>
            <br />
            <Text color="white" mt="md" fw={700}>
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
                  <Text color="dimmed">JavaScript</Text>
                </List.Item>
                <List.Item>
                  <Text color="dimmed">TypeScript</Text>
                </List.Item>
                <List.Item>
                  <Text color="dimmed">Next JS</Text>
                </List.Item>
                <List.Item>
                  <Text color="dimmed">Node JS</Text>
                </List.Item>
                <List.Item>
                  <Text color="dimmed">Solidity</Text>
                </List.Item>
                <List.Item>
                  <Text color="dimmed">Chakra-UI & Mantine</Text>
                </List.Item>
              </SimpleGrid>
            </List>
          </div>
          <Image
            src="/Sabelologo.png"
            alt="Sabelologo"
            className={classes.image}
          />
        </div>
      </Container>
    </div>
  );
}
