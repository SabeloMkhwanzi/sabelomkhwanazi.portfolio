import { ActionIcon, Tabs } from "@mantine/core";
import {
  createStyles,
  Container,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import {
  IconChevronRight,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons";
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
    textDecoration: "none",
    fontWeight: 700,
    fontSize: theme.fontSizes.xs * 2,
    fontFamily: "Segoe UI Emoji",

    "&:hover": {
      color: theme.colors.blue[9],
    },
  },

  content: {
    maxWidth: 700,
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

export default function Experience() {
  const { classes } = useStyles();
  return (
    <>
      <Transitions>
        <Container id="experiencePage">
          <div className={classes.inner}>
            <div className={classes.content}>
              <Group mb={20}>
                {/* <Text
                  fz={20}
                  color="#0E49B5"
                  className={SpecialElite.className}
                >
                  02.
                </Text> */}
                <Text
                  color="gray.5"
                  component="a"
                  className={SpecialElite.className}
                  fz={25}
                  fw="bold"
                >
                  Experience
                </Text>
              </Group>
              <Tabs orientation="vertical" defaultValue="Encode" color="blue">
                <Tabs.List>
                  <Tabs.Tab value="Encode">
                    <Text
                      color="dimmed"
                      fz="lg"
                      fw={500}
                      className={Jaldi.className}
                    >
                      RWAX Exchange
                    </Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="EthGlobal">
                    <Text
                      color="dimmed"
                      fz="lg"
                      fw={500}
                      className={Jaldi.className}
                    >
                      Gitcoin, EthGlobal, and Encode
                    </Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="Gitcoin">
                    <Text
                      color="dimmed"
                      fz="lg"
                      fw={500}
                      className={Jaldi.className}
                    >
                      Unstoppable Domains
                    </Text>
                  </Tabs.Tab>
                  <Tabs.Tab value="DivineVibrations">
                    <Text
                      color="dimmed"
                      fz="lg"
                      fw={500}
                      className={Jaldi.className}
                    >
                      Digital Studio
                    </Text>
                  </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="Encode" pl="xs">
                  <Group>
                    <Text
                      fz="xl"
                      fw={500}
                      color="white"
                      className={Jaldi.className}
                    >
                      RWAX Exchange
                    </Text>
                    <ActionIcon
                      component="a"
                      href="https://twitter.com/The_RWAX"
                      target="_blank"
                      color="#0E49B5"
                    >
                      <IconBrandTwitter color="#0E49B5" size={17} />
                    </ActionIcon>
                  </Group>
                  <Text fs="xs" fw="normal" color="dimmed">
                    Nov 2023 - Present
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
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Designed and developed the RWAX Exchange frontend,
                        ensuring a seamless and user-friendly trading
                        experience.{" "}
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Built responsive UI components using React.js and
                        TypeScript, optimizing performance for decentralized
                        trading.{" "}
                      </Text>
                    </List.Item>
                  </List>
                </Tabs.Panel>
                <Tabs.Panel value="EthGlobal" pl="xs">
                  <Group>
                    <Text
                      fz="xl"
                      fw={500}
                      color="white"
                      className={Jaldi.className}
                    >
                      Gitcoin, EthGlobal, and Encode
                    </Text>
                    <ActionIcon
                      component="a"
                      href="//https://twitter.com/gitcoin"
                      target="_blank"
                      color="#0E49B5"
                      about="Gitcoin"
                    >
                      <IconBrandTwitter color="#0E49B5" size={17} />
                    </ActionIcon>
                    <ActionIcon
                      component="a"
                      href="https://twitter.com/ethglobal"
                      target="_blank"
                      color="#0E49B5"
                      about="EthGlobal"
                    >
                      <IconBrandTwitter color="#0E49B5" size={17} />
                    </ActionIcon>
                    <ActionIcon
                      component="a"
                      href="https://twitter.com/encodeclub"
                      target="_blank"
                      color="#0E49B5"
                      about="Encode"
                    >
                      <IconBrandTwitter color="#0E49B5" size={17} />
                    </ActionIcon>
                  </Group>

                  <Text fs="lg" fw="normal" color="dimmed">
                    Oct 2021 - May 2023
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
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Participating in web3 Hackathons and summits,
                        collaborating, building my skills, and contribute by
                        building decentralized Dapps using tools provided by
                        sponsor on various hackathons{" "}
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        With a timeline and collaboration to complete the task
                        on projects.{" "}
                      </Text>
                    </List.Item>
                  </List>
                </Tabs.Panel>
                <Tabs.Panel value="Gitcoin" pl="xs">
                  <Group>
                    <Text
                      fz="xl"
                      fw={500}
                      color="white"
                      className={Jaldi.className}
                    >
                      Unstoppable Domains
                    </Text>
                    <ActionIcon
                      component="a"
                      href="https://twitter.com/unstoppableweb"
                      target="_blank"
                      color="#0E49B5"
                    >
                      <IconBrandTwitter color="#0E49B5" size={17} />
                    </ActionIcon>
                  </Group>
                  <Text fs="lg" fw="normal" color="dimmed">
                    Jan 2023 - Mar 2023
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
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Integrated login and resolution functionality into 4 web
                        applications, enhancing user authentication and
                        blockchain identity solutions.{" "}
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Collaborated with cross-functional teams to address
                        project-specific requirements and ensure seamless login
                        feature integration{" "}
                      </Text>
                    </List.Item>
                  </List>
                </Tabs.Panel>

                <Tabs.Panel value="DivineVibrations" pl="xs">
                  <Text
                    fz="xl"
                    fw={500}
                    color="white"
                    className={Jaldi.className}
                  >
                    Digital Studio
                  </Text>

                  <Text fs="lg" fw="normal" color="dimmed">
                    Sep 2020 - Apr 2021
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
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Worked directly with clients to understand their website
                        design needs, business goals, and technical
                        requirements.{" "}
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Designed, developed, and deployed responsive websites,
                        ensuring high performance, scalability, and mobile
                        optimization.{" "}
                      </Text>
                    </List.Item>
                    <List.Item>
                      <Text
                        fz="xl"
                        fw={500}
                        color="dimmed"
                        className={Jaldi.className}
                      >
                        Wrote clean, testable, and efficient code following best
                        software development practices.
                      </Text>
                    </List.Item>
                  </List>
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </Container>
      </Transitions>
    </>
  );
}
