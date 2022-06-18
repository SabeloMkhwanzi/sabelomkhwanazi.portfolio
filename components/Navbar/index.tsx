import React from "react";
import {
  Box,
  Flex,
  HStack,
  useDisclosure,
  Stack,
  Text,
  Image,
  Link as CharkaLink,
} from "@chakra-ui/react";

import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import NextLink from "next/link";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size="md"
      fontSize="lg"
      variant="ghost"
      color="current"
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const BodyBgColor = useColorModeValue("#FFF8D5", "gray.600");

  return (
    <>
      <Box bg={BodyBgColor} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            bgColor="#F8ECD1"
            color="black"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} mx="auto">
            <Stack direction="row">
              <Image
                width="3rem"
                height="3rem"
                src="/Sabelologo.png"
                alt="Sabelologo"
              />
              <Text fontFamily="mono" fontSize="3xl" fontWeight="bold">
                Sabelo
              </Text>
            </Stack>

            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              <Stack
                direction="row"
                spacing={12}
                justifyContent="center"
                ml="20"
              >
                <NextLink href="/" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={2}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    Home
                  </CharkaLink>
                </NextLink>
                <NextLink href="about" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={1}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    About
                  </CharkaLink>
                </NextLink>

                <NextLink href="blog" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={2}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    Blog
                  </CharkaLink>
                </NextLink>

                <NextLink href="projects" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={2}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    Projects
                  </CharkaLink>
                </NextLink>

                <NextLink href="github" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={2}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    Github
                  </CharkaLink>
                </NextLink>

                <NextLink href="youtube" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={2}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    YouTube
                  </CharkaLink>
                </NextLink>
                <NextLink href="connect" passHref>
                  <CharkaLink
                    as="button"
                    fontSize="md"
                    textTransform="uppercase"
                    fontWeight="semibold"
                    letterSpacing={2}
                    px={1}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("#6FDFDF", "gray.800"),
                    }}
                  >
                    Connect
                  </CharkaLink>
                </NextLink>

                <Flex alignItems={"center"} py={3}>
                  <ColorModeSwitcher variant="ghost" size="sm" mr={4} />
                </Flex>
              </Stack>
            </HStack>
          </HStack>

          {/* <Flex alignItems={"center"}>
            <ColorModeSwitcher variant="ghost" size="sm" mr={4} />
          </Flex> */}
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <ColorModeSwitcher variant="ghost" size="sm" mr={4} />
              <NextLink href="/" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={2}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  Home
                </CharkaLink>
              </NextLink>
              <NextLink href="about" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={2}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  About
                </CharkaLink>
              </NextLink>
              <NextLink href="blog" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={2}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  Blog
                </CharkaLink>
              </NextLink>
              <NextLink href="projects" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={3}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  Projects
                </CharkaLink>
              </NextLink>
              <NextLink href="github" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={3}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  Github
                </CharkaLink>
              </NextLink>
              <NextLink href="youtube" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={3}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  YouTube
                </CharkaLink>
              </NextLink>
              <NextLink href="connect" passHref>
                <CharkaLink
                  px={2}
                  py={1}
                  fontSize="md"
                  textTransform="uppercase"
                  fontWeight="semibold"
                  letterSpacing={3}
                  color="black"
                  rounded="md"
                  _hover={{
                    textDecoration: "none",
                    bg: "NavButtonBg",
                  }}
                >
                  Connect
                </CharkaLink>
              </NextLink>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
