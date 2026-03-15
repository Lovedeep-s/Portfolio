import { Box, Heading, Text, SimpleGrid, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Code, Rocket, Users, Award } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import GlassCard from "./ui/GlassCard";

const MotionBox = motion.create(Box);

const highlights = [
  {
    icon: Code,
    title: "Accessibility Expert",
    description:
      "Skilled in implementing WCAG 2.2 AA standards and improving accessibility scores from 75% to 95%.",
  },
  {
    icon: Rocket,
    title: "Performance Optimizer",
    description:
      "Reduced frontend page load times by 30% through code optimization and TypeScript migration.",
  },
  {
    icon: Users,
    title: "Full Stack Development",
    description:
      "Experienced in building scalable applications using React, Go, TypeScript, and Python.",
  },
  {
    icon: Award,
    title: "DevOps Integration",
    description:
      "Proficient in CI/CD pipelines using Jenkins, Docker, and automated testing workflows.",
  },
];

export default function About() {
  return (
    <Box id="about" py={32}>
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <Stack gap={20}>
          <SectionHeading
            title="Software Engineer & Problem Solver"
            subtitle="Building scalable platforms and user-focused applications with measurable impact."
          />

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <MotionBox
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <GlassCard p={8} h="100%">
                    <Box mb={6} color="var(--accent)">
                      <Icon size={42} />
                    </Box>
                    <Heading size="lg" mb={4} fontWeight="700" color="var(--text-primary)">
                      {item.title}
                    </Heading>
                    <Text color="var(--text-secondary)" fontSize="lg" lineHeight="tall">
                      {item.description}
                    </Text>
                  </GlassCard>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
}
