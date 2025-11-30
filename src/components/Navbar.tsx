import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { open, onToggle } = useDisclosure();

  return (
    <Box
      position="fixed"
      top={0}
      w="100%"
      bg="rgba(2, 6, 23, 0.8)"
      backdropFilter="blur(20px)"
      borderBottom="1px solid rgba(148, 163, 184, 0.1)"
      zIndex={1000}
    >
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <Flex h={20} alignItems="center" justifyContent="space-between">
          <Box
            fontSize="2xl"
            fontWeight="black"
            color="white"
            letterSpacing="-0.02em"
          >
            Portfolio
          </Box>

          <HStack as="nav" gap={10} display={{ base: "none", md: "flex" }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                fontSize="md"
                fontWeight="medium"
                color="gray.400"
                _hover={{
                  color: "cyan.400",
                  textDecoration: "none",
                }}
                transition="all 0.2s"
              >
                {link.name}
              </Link>
            ))}
          </HStack>

          <IconButton
            aria-label="Toggle navigation"
            onClick={onToggle}
            display={{ md: "none" }}
            variant="ghost"
            color="white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </IconButton>
        </Flex>

        {open && (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" gap={4}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  fontSize="sm"
                  fontWeight="medium"
                  color="gray.300"
                  _hover={{
                    color: "cyan.400",
                    textDecoration: "none",
                  }}
                  onClick={onToggle}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
        )}
      </Box>
    </Box>
  );
}
