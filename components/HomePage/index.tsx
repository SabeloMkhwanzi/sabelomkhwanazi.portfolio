import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Link,
  useColorModeValue,
  Link as CharkaLink,
} from "@chakra-ui/react";

import NextLink from "next/link";

export default function HomePage() {
  const BodyBgColor = useColorModeValue("#FFF8D5", "gray.600");
  const SubHeaderTextColor = useColorModeValue("gray.600", "white");
  const SubHeaderTextColor2 = useColorModeValue("#14C38E", "white");
  const ButtonColorMode = useColorModeValue("#4B7BE5", "#4B7BE5");
  const ButtonColorMode2 = useColorModeValue("#14C38E", "#14C38E");
  const ButtonTextColor = useColorModeValue("white", "black");
  const HeaderTextColor = useColorModeValue("#733C3C", "#B4ECE3");

  return (
    <Stack
      pt={5}
      bg={BodyBgColor}
      minH={"100vh"}
      direction={{ base: "column", md: "row" }}
    >
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              fontFamily="cursive"
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: { base: "20%", md: "30%" },
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "purple.400",
                zIndex: -1,
              }}
            >
              Hello There, I`m
            </Text>
            <br />
            <Text fontFamily="cursive" color={SubHeaderTextColor2} as={"span"}>
              Sabelo Mkhwanazi
            </Text>{" "}
          </Heading>
          <Text
            fontFamily="monospace"
            fontSize={{ base: "md", lg: "2xl" }}
            color={SubHeaderTextColor}
          >
            A Software Developer, Blockchain Enthusiast thanks for passing to
            explore what I`ve been Busy with!
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              textColor={ButtonTextColor}
              borderRadius="lg"
              bgColor={ButtonColorMode}
              shadow="lg"
              fontSize="m"
              textTransform="uppercase"
              fontWeight="normal"
              as="kbd"
              letterSpacing={2}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#6FDFDF", "#6FDFDF"),
              }}
            >
              <NextLink href="about" passHref>
                <CharkaLink
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  About Me
                </CharkaLink>
              </NextLink>
            </Button>
            <Button
              textColor={ButtonTextColor}
              borderRadius="lg"
              bgColor={ButtonColorMode2}
              shadow="lg"
              fontSize="m"
              textTransform="uppercase"
              fontWeight="normal"
              as="kbd"
              letterSpacing={2}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("#B8F1B0", "#B8F1B0"),
              }}
            >
              <NextLink href="about" passHref>
                <CharkaLink
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  Projects
                </CharkaLink>
              </NextLink>
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          width="770px"
          height="770px"
          objectFit="cover"
          src="/Sabelologo.png"
          alt="Sabelologo"
        />
      </Flex>
    </Stack>
  );
}
