import { Box, Heading, Text, Button, Stack, HStack, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const MotionBox = motion.create(Box)
const MotionHeading = motion.create(Heading)
const MotionText = motion.create(Text as any)

export default function Hero() {
  return (
    <Box
      id="home"
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt={16}
      position="relative"
    >
      <Box maxW="100%" px={{ base: 6, md: 12, lg: 20 }}>
        <Stack gap={12} textAlign="center">
          <MotionHeading
            fontSize={{ base: '5xl', md: '7xl', lg: '8xl' }}
            fontWeight="black"
            lineHeight="0.9"
            letterSpacing="-0.02em"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Building the Future
            <br />
            <Text as="span" bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500" bgClip="text">
              One Line at a Time.
            </Text>
          </MotionHeading>

          <MotionText
            fontSize={{ base: '2xl', md: '3xl' }}
            fontWeight="medium"
            color="gray.300"
            maxW="4xl"
            mx="auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Software Engineer building scalable web platforms with React, Go, TypeScript, and Python
          </MotionText>

          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <HStack gap={6} justify="center" mb={12}>
              <Link href="#contact">
                <Button 
                  size="xl" 
                  colorScheme="blue"
                  fontSize="lg"
                  px={10}
                  py={7}
                  borderRadius="full"
                  bgGradient="to-r"
                  gradientFrom="cyan.400"
                  gradientTo="blue.500"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: '0 20px 60px rgba(34, 211, 238, 0.4)',
                  }}
                >
                  Let's Talk
                </Button>
              </Link>
              <Link href="/Lovedeep_s_Resume.pdf" download>
                <Button 
                  size="xl" 
                  variant="outline"
                  fontSize="lg"
                  px={10}
                  py={7}
                  borderRadius="full"
                  borderWidth="2px"
                  borderColor="gray.600"
                  color="white"
                  _hover={{
                    borderColor: 'cyan.400',
                    transform: 'translateY(-2px)',
                  }}
                >
                  View Resume
                </Button>
              </Link>
            </HStack>

            <HStack gap={8} justify="center">
              <Link href="https://github.com/Lovedeep-s" target="_blank">
                <Box 
                  color="gray.300" 
                  _hover={{ color: 'cyan.400', transform: 'translateY(-2px)' }} 
                  transition="all 0.2s"
                >
                  <Github size={28} />
                </Box>
              </Link>
              <Link href="https://linkedin.com/in/lovedeepsingh102" target="_blank">
                <Box 
                  color="gray.300" 
                  _hover={{ color: 'cyan.400', transform: 'translateY(-2px)' }} 
                  transition="all 0.2s"
                >
                  <Linkedin size={28} />
                </Box>
              </Link>
              <Link href="mailto:s.lovedeepparmarpta@gmail.com">
                <Box 
                  color="gray.300" 
                  _hover={{ color: 'cyan.400', transform: 'translateY(-2px)' }} 
                  transition="all 0.2s"
                >
                  <Mail size={28} />
                </Box>
              </Link>
            </HStack>
          </MotionBox>
        </Stack>
      </Box>
    </Box>
  )
}

