import { ActionIcon, Tabs } from "@mantine/core";
import { IconPhoto, IconMessageCircle, IconSettings } from "@tabler/icons";
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
import {
  IconChevronRight,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`
const Amaranth = localFont({ src: "../../fonts/Amaranth-Bold.ttf" });
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
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Group mb={20}>
              <Text fz={20} color="#0E49B5" className={SpecialElite.className}>
                02.
              </Text>
              <Text
                color="gray.5"
                component="a"
                className={SpecialElite.className}
                fz={25}
                fw="bold"
              >
                Where I’ve Worked
              </Text>
            </Group>
            <Tabs
              orientation="vertical"
              defaultValue="Encode"
              color="blue"
              variant="outline"
            >
              <Tabs.List>
                <Tabs.Tab value="Encode">
                  <Text
                    color="dimmed"
                    fz="lg"
                    fw={500}
                    className={Jaldi.className}
                  >
                    Encode Club
                  </Text>
                </Tabs.Tab>
                <Tabs.Tab value="EthGlobal">
                  <Text
                    color="dimmed"
                    fz="lg"
                    fw={500}
                    className={Jaldi.className}
                  >
                    EthGlobal
                  </Text>
                </Tabs.Tab>
                <Tabs.Tab value="Gitcoin">
                  <Text
                    color="dimmed"
                    fz="lg"
                    fw={500}
                    className={Jaldi.className}
                  >
                    Gitcoin
                  </Text>
                </Tabs.Tab>
                <Tabs.Tab value="DivineVibrations">
                  <Text
                    color="dimmed"
                    fz="lg"
                    fw={500}
                    className={Jaldi.className}
                  >
                    D.V Tech Studio
                  </Text>
                </Tabs.Tab>
                <Tabs.Tab value="DESE">
                  <Text
                    color="dimmed"
                    fz="lg"
                    fw={500}
                    className={Jaldi.className}
                  >
                    DESE Projects Solution
                  </Text>
                </Tabs.Tab>
              </Tabs.List>
              <Tabs.Panel value="Encode" pl="xs">
                <Group>
                  <Text
                    fs="lg"
                    fw={500}
                    color="white"
                    className={Jaldi.className}
                  >
                    Encode Club
                  </Text>
                  <ActionIcon
                    component="a"
                    href="https://twitter.com/encodeclub"
                    target="_blank"
                    color="#0E49B5"
                  >
                    <IconBrandTwitter color="#0E49B5" size={17} />
                  </ActionIcon>
                </Group>
                <Text fs="xs" fw="normal" color="dimmed">
                  December 2022 - Present
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
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Participating in web3 Hackathons and workshops, and
                      contribute by building decentralized Dapps using tools
                      provided by sponsor on various hackathons{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text color="dimmed">
                      With a 4 week timeline and collaboration to complete the
                      task on projects.{" "}
                    </Text>
                  </List.Item>
                </List>
              </Tabs.Panel>
              <Tabs.Panel value="EthGlobal" pl="xs">
                <Group>
                  <Text
                    fs="lg"
                    fw={500}
                    color="white"
                    className={Jaldi.className}
                  >
                    EthGlobal
                  </Text>
                  <ActionIcon
                    component="a"
                    href="https://twitter.com/ethglobal"
                    target="_blank"
                    color="#0E49B5"
                  >
                    <IconBrandTwitter color="#0E49B5" size={17} />
                  </ActionIcon>
                </Group>
                <Text fs="lg" fw="normal" color="dimmed">
                  January 2022 - Present
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
                      fs="lg"
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
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      With a timeline and collaboration to complete the task on
                      projects.{" "}
                    </Text>
                  </List.Item>
                </List>
              </Tabs.Panel>
              <Tabs.Panel value="Gitcoin" pl="xs">
                <Group>
                  <Text
                    fs="lg"
                    fw={500}
                    color="white"
                    className={Jaldi.className}
                  >
                    Gitcoin
                  </Text>
                  <ActionIcon
                    component="a"
                    href="https://twitter.com/gitcoin"
                    target="_blank"
                    color="#0E49B5"
                  >
                    <IconBrandTwitter color="#0E49B5" size={17} />
                  </ActionIcon>
                </Group>
                <Text fs="lg" fw="normal" color="dimmed">
                  November 2021 - Present
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
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Select an open issue, work on a project, participating in
                      hackathons, collaborating, building my skills, and
                      contribute towards the open source projects in the web3
                      ecosystem{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      With a timeline and collaboration to complete the task on
                      projects.{" "}
                    </Text>
                  </List.Item>
                </List>
              </Tabs.Panel>

              <Tabs.Panel value="DivineVibrations" pl="xs">
                <Text
                  fs="lg"
                  fw={500}
                  color="white"
                  className={Jaldi.className}
                >
                  D.V Tech Studio
                </Text>

                <Text fs="lg" fw="normal" color="dimmed">
                  March 2020 - April 2021
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
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Writing efficient code Creating websites/a website using
                      standard HTML/CSS practices.{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Maintaining and expanding/enhancing the website once built{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Stay connected with emerging technologies/industry trends
                      and apply them into operations and activities
                    </Text>
                  </List.Item>
                </List>
              </Tabs.Panel>

              <Tabs.Panel value="DESE" pl="xs">
                <Group>
                  <Text
                    fs="lg"
                    fw={500}
                    color="white"
                    className={Jaldi.className}
                  >
                    Construction Estimator
                  </Text>
                  <ActionIcon
                    component="a"
                    href="https://www.linkedin.com/company/david-swartz-engineering-services/"
                    target="_blank"
                    color="#0E49B5"
                  >
                    <IconBrandLinkedin color="#0E49B5" />
                  </ActionIcon>
                </Group>
                <Text
                  fs="lg"
                  fw="normal"
                  color="dimmed"
                  className={Jaldi.className}
                >
                  August 2018 - April 2019
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
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Understand the project and its requirements using
                      blueprint drawings and other resource information.{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Determine key variables for cost and other estimates,
                      Gather first-hand information from sites.{" "}
                    </Text>
                  </List.Item>
                  <List.Item>
                    <Text
                      fs="lg"
                      fw={500}
                      color="dimmed"
                      className={Jaldi.className}
                    >
                      Using software to creating and submit estimates reports or
                      bids to appropriate persons (project managers, clients,
                      bidding competitions etc.)
                    </Text>
                  </List.Item>
                </List>
              </Tabs.Panel>
            </Tabs>
          </div>
        </div>
      </Container>
    </div>
  );
}
