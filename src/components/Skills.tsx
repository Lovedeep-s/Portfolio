import { Box, Heading, SimpleGrid, Text, Stack } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionBox = motion.create(Box as any)

const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'JavaScript / TypeScript', level: 95 },
      { name: 'Python', level: 85 },
      { name: 'Go (Golang)', level: 85 },
      { name: 'C / C++', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'HTML / CSS', level: 90 },
      { name: 'Accessibility (WCAG 2.2)', level: 90 },
      { name: 'TypeScript Migration', level: 90 },
    ],
  },
  {
    category: 'Backend & Databases',
    skills: [
      { name: 'MySQL / Oracle SQL', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'Django', level: 75 },
      { name: 'Microservices', level: 80 },
    ],
  },
  {
    category: 'DevOps & Tools',
    skills: [
      { name: 'Git / Docker', level: 85 },
      { name: 'Jenkins / CI/CD', level: 80 },
      { name: 'Nginx / Tomcat', level: 75 },
      { name: 'VS Code / Postman', level: 90 },
    ],
  },
]

export default function Skills() {
  return (
    <Box id="skills" py={20}>
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          textAlign="center"
          mb={12}
        >
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} mb={4}>
            Skills & Expertise
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400" maxW="3xl" mx="auto">
            Technologies and tools I work with to bring ideas to life
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2 }} gap={8}>
          {skillCategories.map((category, categoryIndex) => (
            <MotionBox
              key={category.category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              p={8}
              bg="rgba(17, 25, 40, 0.5)"
              borderRadius="xl"
              border="1px solid rgba(255, 255, 255, 0.1)"
              _hover={{
                borderColor: 'blue.400',
                boxShadow: '0 10px 30px rgba(33, 150, 243, 0.2)',
              }}
            >
              <Heading size="lg" mb={6} color="blue.400">
                {category.category}
              </Heading>
              <Stack gap={6}>
                {category.skills.map((skill) => (
                  <Box key={skill.name}>
                    <Text mb={2} fontSize="sm" fontWeight="medium">
                      {skill.name}
                    </Text>
                    <Box
                      w="100%"
                      h="8px"
                      bg="rgba(255, 255, 255, 0.1)"
                      borderRadius="full"
                      overflow="hidden"
                    >
                      <Box
                        h="100%"
                        w={`${skill.level}%`}
                        bg="blue.400"
                        borderRadius="full"
                        transition="width 0.5s ease-in-out"
                      />
                    </Box>
                  </Box>
                ))}
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  )
}

