import { Box, Text, HStack, Link, Stack } from "@chakra-ui/react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <Box
      as="footer"
      py={16}
      borderTop="1px solid rgba(148, 163, 184, 0.1)"
      mt={32}
    >
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <Stack gap={8} align="center">
          <HStack gap={8}>
            <Link
              href="https://github.com/lovedeepsingh"
              target="_blank"
              _hover={{
                color: "cyan.400",
                transform: "translateY(-2px)",
                opacity: 1,
              }}
              transition="all 0.2s"
              opacity={0.7}
              color="white"
            >
              <Github size={28} />
            </Link>
            <Link
              href="https://linkedin.com/in/lovedeepsingh"
              target="_blank"
              _hover={{
                color: "cyan.400",
                transform: "translateY(-2px)",
                opacity: 1,
              }}
              transition="all 0.2s"
              opacity={0.7}
              color="white"
            >
              <Linkedin size={28} />
            </Link>
            <Link
              href="mailto:lovedeep@example.com"
              _hover={{
                color: "cyan.400",
                transform: "translateY(-2px)",
                opacity: 1,
              }}
              transition="all 0.2s"
              opacity={0.7}
              color="white"
            >
              <Mail size={28} />
            </Link>
          </HStack>

          <Text fontSize="lg" color="gray.500" fontWeight="medium">
            © {new Date().getFullYear()} Lovedeep Singh. All rights reserved.
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
