import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  Button,
  HStack,
  Badge,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const MotionBox = motion.create(Box as any);

const projects = [
  {
    title: "GreenLight",
    description:
      "Developed portal which informs administrators which rooms are empty and lights are on using footage from a CCTV camera. Uses YOLOv3 and OpenCV for real-time human detection to save electricity.",
    tags: ["Django", "JavaScript", "YOLOv3", "OpenCV", "HTML/CSS"],
    github:
      "https://github.com/Lovedeep-s/CNN-based-human-detection-to-save-electricity",
    live: "#",
  },
  {
    title: "Tagit",
    description:
      "Developed a cutting-edge portal that enables the generation of unique QR codes for efficient luggage tracking and management. Successfully implemented a seamless system allowing users to easily attach the QR codes to their belongings for effortless identification and tracking.",
    tags: ["Django", "JavaScript", "HTML/CSS", "QR Codes"],
    github: "https://github.com/Lovedeep-s/TagIT.git",
    live: "#",
  },
  {
    title: "Content Editing Microservice",
    description:
      "Designed and developed a content editing microservice that decouples static text from the monolithic frontend, enabling non-developers to update UI content via a user-friendly interface. Integrated with Bitbucket for dynamic content updates.",
    tags: ["React", "TypeScript", "Go", "Bitbucket", "Microservices"],
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <Box id="projects" py={32}>
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={20}
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="black"
            lineHeight="0.9"
            mb={8}
          >
            Featured Work
          </Heading>
          <Text
            fontSize={{ base: "2xl", md: "3xl" }}
            color="gray.400"
            maxW="4xl"
            mx="auto"
            fontWeight="medium"
          >
            Projects that showcase my technical expertise and creative
            problem-solving
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={8}>
          {projects.map((project) => (
            <MotionBox
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              p={8}
              bg="rgba(15, 23, 42, 0.8)"
              borderRadius="2xl"
              border="1px solid rgba(148, 163, 184, 0.1)"
              backdropFilter="blur(10px)"
              _hover={{
                transform: "translateY(-4px)",
                borderColor: "cyan.400",
                boxShadow: "0 20px 60px rgba(34, 211, 238, 0.2)",
              }}
            >
              <Stack gap={6} h="100%">
                <Heading size="xl" fontWeight="bold">
                  {project.title}
                </Heading>
                <Text color="gray.400" fontSize="lg" lineHeight="tall" flex="1">
                  {project.description}
                </Text>
                <HStack gap={3} flexWrap="wrap">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      colorPalette="blue"
                      variant="subtle"
                      fontSize="sm"
                      px={3}
                      py={1}
                      borderRadius="full"
                    >
                      {tag}
                    </Badge>
                  ))}
                </HStack>
                <HStack gap={4} pt={4}>
                  {project.github !== "#" && (
                    <Link href={project.github} target="_blank">
                      <Button
                        size="md"
                        variant="ghost"
                        _hover={{ color: "blue.600" }}
                        fontSize="md"
                        p={4}
                        color="white"
                      >
                        <Github size={20} style={{ marginRight: "8px" }} />
                        Code
                      </Button>
                    </Link>
                  )}
                  {project.live !== "#" && (
                    <Link href={project.live} target="_blank">
                      <Button
                        size="md"
                        bgGradient="to-r"
                        gradientFrom="cyan.400"
                        gradientTo="blue.500"
                        color="white"
                        _hover={{ transform: "translateY(-2px)" }}
                        fontSize="md"
                        p={4}
                      >
                        <ExternalLink
                          size={20}
                          style={{ marginRight: "8px" }}
                        />
                        View Live
                      </Button>
                    </Link>
                  )}
                </HStack>
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
