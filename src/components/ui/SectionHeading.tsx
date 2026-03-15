import { Box, Heading, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion.create(Box);

type SectionHeadingProps = {
  title: string;
  subtitle: string;
};

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      textAlign="center"
      mb={{ base: 12, md: 16 }}
    >
      <Heading
        fontFamily="'Archivo', sans-serif"
        fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
        fontWeight="700"
        lineHeight="0.95"
        letterSpacing="-0.02em"
        color="var(--text-primary)"
        textShadow="0 0 24px rgba(34, 211, 238, 0.12)"
        mb={5}
      >
        {title}
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl" }}
        color="var(--text-secondary)"
        maxW="3xl"
        mx="auto"
        opacity={0.92}
      >
        {subtitle}
      </Text>
    </MotionBox>
  );
}
