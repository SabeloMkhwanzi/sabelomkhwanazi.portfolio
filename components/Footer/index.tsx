import { createStyles, Container, Group, Anchor } from "@mantine/core";
import { IconHexagonLetterS } from "@tabler/icons";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
}));

export default function Footer() {
  const { classes } = useStyles();

  return (
    <Container className={classes.inner} bg="#0A1A2F">
      <IconHexagonLetterS size={28} color="#0E49B5" />
      <Group>♥ By Sabelo You can Give it ★ </Group>
    </Container>
  );
}
