import { Box, Heading, Text, Stack, HStack, Badge } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const MotionBox = motion.create(Box as any)

const experiences = [
  {
    type: 'work',
    title: 'Associate Software Engineer',
    company: 'Vimo India Private Limited',
    period: 'July 2025 - Present',
    description: 'Leading accessibility improvements and modernization of web platform for Health Insurance Exchange.',
    achievements: [
      'Led accessibility improvements across the web platform, conducting comprehensive audits using Axe, WAVE, and screen readers to ensure WCAG 2.2 AA compliance',
      'Migrated core frontend modules from JavaScript to TypeScript, enhancing code maintainability and reducing bugs',
      'Designed and developed a content editing microservice that decouples static text from the monolithic frontend',
      'Reduced frontend page load times by 30% through code optimization and TypeScript migration',
      'Improved accessibility score across core modules from 75% to 95% WCAG 2.2 AA compliance',
      'Enabled non-developers to manage UI content independently, reducing deployment dependency by 40%',
    ],
  },
  {
    type: 'work',
    title: 'Software Development Engineer (SDE) Intern',
    company: 'Vimo India Private Limited',
    period: 'January 2025 - June 2025',
    description: 'Built and scaled backend systems for content-serving APIs with CI/CD integration.',
    achievements: [
      'Built and scaled a content-serving backend API integrated with Bitbucket to support dynamic updates',
      'Collaborated with DevOps to integrate the system into CI/CD pipelines using Jenkins',
      'Worked closely with designers and stakeholders to refine user experience and ensure accessibility enhancements',
    ],
  },
  {
    type: 'work',
    title: 'Software Development Engineer (SDE) Intern',
    company: 'Arvat AI',
    period: 'July 2024 - December 2024',
    description: 'Contributed to building a customer success platform using React and Go.',
    achievements: [
      'Developed a customizable dashboard with drag-and-drop functionality using the react-grid-layout library',
      'Designed APIs for layout persistence and user configurations',
      'Utilized Go interfaces and modular architecture to promote clean separation of concerns',
      'Implemented a background task queuing system using goroutines to automate scheduled processes',
      'Integrated Slack notifications via API tokens to deliver real-time alerts',
      'Designed and implemented a custom queueing system from scratch, eliminating reliance on AWS SQS',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Engineering in Computer Science and Business Systems',
    company: 'Thapar Institute of Engineering and Technology',
    period: 'October 2021 - June 2025',
    description: 'Patiala, India - 8.69 CGPA',
    achievements: [
      'Focused on Software Engineering, Data Structures, Algorithms, and Web Technologies',
      'Completed projects in Computer Vision, Web Development, and System Design',
    ],
  },
]

export default function Experience() {
  return (
    <Box id="experience" py={20}>
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
            Experience & Education
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400" maxW="3xl" mx="auto">
            My professional journey and academic background
          </Text>
        </MotionBox>

        <Stack gap={8} maxW="4xl" mx="auto">
          {experiences.map((exp, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              position="relative"
            >
              <Box
                p={8}
                bg="rgba(17, 25, 40, 0.5)"
                borderRadius="xl"
                border="1px solid rgba(255, 255, 255, 0.1)"
                _hover={{
                  borderColor: 'blue.400',
                  boxShadow: '0 10px 30px rgba(33, 150, 243, 0.2)',
                }}
              >
                <HStack gap={4} mb={4}>
                  <Box
                    p={3}
                    bg="rgba(33, 150, 243, 0.1)"
                    borderRadius="lg"
                    border="1px solid rgba(33, 150, 243, 0.2)"
                  >
                    {exp.type === 'work' ? (
                      <Briefcase size={24} color="#2196f3" />
                    ) : (
                      <GraduationCap size={24} color="#2196f3" />
                    )}
                  </Box>
                  <Box flex="1">
                    <HStack justify="space-between" flexWrap="wrap">
                      <Heading size="md">{exp.title}</Heading>
                      <Badge colorPalette="blue" fontSize="sm">
                        {exp.period}
                      </Badge>
                    </HStack>
                    <Text color="blue.400" fontWeight="medium" mt={1}>
                      {exp.company}
                    </Text>
                  </Box>
                </HStack>

                <Text color="gray.400" mb={4}>
                  {exp.description}
                </Text>

                <Stack gap={2}>
                  {exp.achievements.map((achievement, i) => (
                    <HStack key={i} align="start">
                      <Text color="blue.400" mt={1}>
                        •
                      </Text>
                      <Text color="gray.300" fontSize="sm">
                        {achievement}
                      </Text>
                    </HStack>
                  ))}
                </Stack>
              </Box>
            </MotionBox>
          ))}
        </Stack>
      </Box>
    </Box>
  )
}

