import {
  Navbar,
  createStyles,
  Stack,
  Flex,
  UnstyledButton,
  ActionIcon,
} from "@mantine/core";
import {
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
  },

  hidden: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  icon: {
    transition: "transform 150ms ease, box-shadow 150ms ease",

    "&:hover": {
      transform: "scale(1.01)",
      boxShadow: theme.shadows.md,
    },
  },
}));

export default function SideIcon() {
  const { classes } = useStyles();

  return (
    <Navbar
      bg="#0A1A2F"
      height={700}
      width={{ base: 10, xl: 80 }}
      p="md"
      title="Navigation"
      className={classes.hidden}
      style={{
        borderWidth: "0",
      }}
    >
      <Navbar.Section grow mt={30}>
        <Stack justify="center" spacing={0}></Stack>
      </Navbar.Section>

      <Navbar.Section>
        <Stack justify="center" spacing={25}>
          <Flex className={classes.link}>
            <ActionIcon
              color="#8892B0"
              component="a"
              href="https://github.com/SabeloMkhwanzi"
              target="_blank"
              variant="subtle"
            >
              <IconBrandGithub color="#0E49B5" size={30} />
            </ActionIcon>
          </Flex>
          <Flex className={classes.link}>
            <ActionIcon
              component="a"
              href="https://twitter.com/SabeloMkhwanaz"
              target="_blank"
            >
              <IconBrandTwitter color="#0E49B5" size={30} />
            </ActionIcon>
          </Flex>
          <Flex className={classes.link}>
            <ActionIcon
              component="a"
              href="https://www.linkedin.com/in/sabelomkhwanazi/"
              target="_blank"
            >
              <IconBrandLinkedin color="#0E49B5" size={30} />
            </ActionIcon>
          </Flex>
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
