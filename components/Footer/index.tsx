import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  const BodyBgColor = useColorModeValue("#FFF8D5", "gray.600");

  return (
    <Box
      borderTopWidth={0.25}
      borderStyle={"solid"}
      borderColor={useColorModeValue("black", "#4B7BE5")}
      bg={BodyBgColor}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box>
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text
            fontSize={{ base: "xs", md: "sm", lg: "md" }}
            textTransform="uppercase"
            fontWeight="normal"
            as="kbd"
            letterSpacing={2}
            color="black"
          >
            © 2022 Made with ❤ by Sabelo
          </Text>
          <Stack
            direction={"row"}
            spacing={6}
            color={useColorModeValue("#14C38E", "#4B7BE5")}
          >
            <SocialButton
              label={"Twitter"}
              href={"https://twitter.com/SabeloMkhwanaz"}
            >
              <FaTwitter />
            </SocialButton>
            <SocialButton
              label={"Github"}
              href={"https://github.com/SabeloMkhwanzi"}
            >
              <FaGithub />
            </SocialButton>
            <SocialButton
              label={"LinkedIn"}
              href={"https://www.linkedin.com/in/sabelo-mkhwanazi-54ba431b1/"}
            >
              <FaLinkedinIn />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
