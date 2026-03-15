import { Box, type BoxProps } from "@chakra-ui/react";

type GlassCardProps = BoxProps;

export default function GlassCard(props: GlassCardProps) {
  return (
    <Box
      bg="var(--card-bg)"
      border="1px solid var(--card-border)"
      borderRadius="24px"
      backdropFilter="blur(16px)"
      boxShadow="inset 0 1px 0 rgba(255,255,255,0.08), 0 18px 45px rgba(2, 6, 23, 0.4)"
      transition="border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease"
      transformStyle="preserve-3d"
      _hover={{
        borderColor: "var(--accent)",
        boxShadow: "0 26px 75px rgba(34, 211, 238, 0.2)",
        transform: "translateY(-6px) rotateX(2deg) rotateY(-2deg)",
      }}
      {...props}
    />
  );
}
