import { Text, Group, Center } from "@mantine/core";
import localFont from "@next/font/local";

// Font files can be colocated inside of `pages`

const SpecialElite = localFont({ src: "../../fonts/SpecialElite-Regular.ttf" });

export default function Footer() {
  return (
    <>
      <Center>
        <Group>
          <Text size="lg" color="#0D49B0" className={SpecialElite.className}>
            Made with ❤ by
          </Text>
          <Text
            component="a"
            href="https://github.com/SabeloMkhwanzi/sabelo_portfolio"
            target="_blank"
            color="dimmed"
            className={SpecialElite.className}
          >
            Sabelo M.
          </Text>
        </Group>
      </Center>
    </>
  );
}
