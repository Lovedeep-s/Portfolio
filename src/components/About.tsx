import { Box, Heading, Text, SimpleGrid, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Code, Rocket, Users, Award } from 'lucide-react'

const MotionBox = motion.create(Box as any)

const highlights = [
  {
    icon: Code,
    title: 'Accessibility Expert',
    description: 'Skilled in implementing WCAG 2.2 AA standards and improving accessibility scores from 75% to 95%.',
  },
  {
    icon: Rocket,
    title: 'Performance Optimizer',
    description: 'Reduced frontend page load times by 30% through code optimization and TypeScript migration.',
  },
  {
    icon: Users,
    title: 'Full Stack Development',
    description: 'Experienced in building scalable applications using React, Go, TypeScript, and Python.',
  },
  {
    icon: Award,
    title: 'DevOps Integration',
    description: 'Proficient in CI/CD pipelines using Jenkins, Docker, and automated testing workflows.',
  },
]

export default function About() {
  return (
    <Box id="about" py={32}>
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <Stack gap={20}>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            textAlign="center"
          >
          <Heading 
            fontSize={{ base: '4xl', md: '6xl', lg: '7xl' }} 
            fontWeight="black"
            lineHeight="0.9"
            mb={8}
          >
            Software Engineer & Problem Solver
          </Heading>
          <Text fontSize={{ base: '2xl', md: '3xl' }} color="gray.400" maxW="4xl" mx="auto" fontWeight="medium">
            Building scalable web platforms, backend systems, and user-focused applications with a proven track record of delivering impactful solutions in fast-paced environments.
          </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={6}>
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <MotionBox
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  p={8}
                  bg="rgba(15, 23, 42, 0.8)"
                  borderRadius="2xl"
                  border="1px solid rgba(148, 163, 184, 0.1)"
                  backdropFilter="blur(10px)"
                  _hover={{
                    transform: 'translateY(-4px)',
                    borderColor: 'cyan.400',
                    boxShadow: '0 20px 60px rgba(34, 211, 238, 0.2)',
                  }}
                  transition="all 0.3s"
                >
                  <Box mb={6} color="cyan.400">
                    <Icon size={48} />
                  </Box>
                  <Heading size="lg" mb={4} fontWeight="bold">
                    {item.title}
                  </Heading>
                  <Text color="gray.400" fontSize="lg" lineHeight="tall">
                    {item.description}
                  </Text>
                </MotionBox>
              )
            })}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  )
}

