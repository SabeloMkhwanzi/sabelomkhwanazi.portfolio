import React from "react";
import { createStyles, Button } from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
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

export default function EmailButton() {
  const { classes } = useStyles();
  const router = useRouter();
  return (
    <Button
      component="a"
      className={classes.control}
      size="lg"
      variant="default"
      color="gray"
      onClick={() => router.push("mailto:sabelo.mailme@gmail.com")}
    >
      You can Say Hi👋
    </Button>
  );
}
