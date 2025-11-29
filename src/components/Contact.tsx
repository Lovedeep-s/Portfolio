import {
  Box,
  Heading,
  Text,
  Stack,
  SimpleGrid,
  Button,
  Input,
  Textarea,
  HStack,
  Link,
} from '@chakra-ui/react'
import { Field } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { useState } from 'react'

const MotionBox = motion.create(Box as any)

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 's.lovedeepparmarpta@gmail.com',
    href: 'mailto:s.lovedeepparmarpta@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 70875 71659',
    href: 'tel:+917087571659',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Patiala, India',
    href: '#',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert("Thank you for reaching out! I'll get back to you soon.")
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <Box id="contact" py={20}>
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
            Get In Touch
          </Heading>
          <Text fontSize={{ base: 'lg', md: 'xl' }} color="gray.400" maxW="3xl" mx="auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} maxW="6xl" mx="auto">
          <MotionBox
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Stack gap={6}>
              <Box>
                <Heading size="lg" mb={4}>
                  Let's Talk
                </Heading>
                <Text color="gray.400" mb={8}>
                  I'm always interested in hearing about new projects and opportunities.
                  Whether you have a question or just want to say hi, feel free to drop me a message!
                </Text>
              </Box>

              <Stack gap={4}>
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <Link
                      key={info.label}
                      href={info.href}
                      textDecoration="none"
                      _hover={{ textDecoration: 'none' }}
                    >
                      <Box
                        p={4}
                        bg="rgba(255, 255, 255, 0.05)"
                        borderRadius="lg"
                        border="1px solid rgba(255, 255, 255, 0.1)"
                        color="white"
                        _hover={{
                          borderColor: 'blue.400',
                        }}
                      >
                      <HStack gap={4}>
                        <Box
                          p={3}
                          bg="rgba(33, 150, 243, 0.1)"
                          borderRadius="lg"
                          border="1px solid rgba(33, 150, 243, 0.2)"
                        >
                          <Icon size={20} color="#2196f3" />
                        </Box>
                        <Box>
                          <Text fontSize="sm" color="gray.400">
                            {info.label}
                          </Text>
                          <Text fontWeight="medium">{info.value}</Text>
                        </Box>
                      </HStack>
                      </Box>
                    </Link>
                  )
                })}
              </Stack>
            </Stack>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Box
              as="form"
              onSubmit={handleSubmit}
              p={8}
              bg="linear-gradient(to bottom, #0f172a, #090b0f)"
              borderRadius="xl"
              border="1px solid rgba(255, 255, 255, 0.1)"
            >
              <Stack gap={6}>
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={4}>
                  <Field.Root required>
                    <Field.Label>Name</Field.Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      _hover={{ borderColor: 'blue.400' }}
                      _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #2196f3' }}
                      p={4}
                      color="white"
                    />
                  </Field.Root>

                  <Field.Root required>
                    <Field.Label>Email</Field.Label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      bg="rgba(0, 0, 0, 0.2)"
                      border="1px solid rgba(255, 255, 255, 0.1)"
                      _hover={{ borderColor: 'blue.400' }}
                      _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #2196f3' }}
                      p={4}
                      color="white"
                    />
                  </Field.Root>
                </SimpleGrid>

                <Field.Root required>
                  <Field.Label>Subject</Field.Label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    bg="rgba(0, 0, 0, 0.2)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    _hover={{ borderColor: 'blue.400' }}
                    _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #2196f3' }}
                    p={4}
                    color="white"
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label>Message</Field.Label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    bg="rgba(0, 0, 0, 0.2)"
                    border="1px solid rgba(255, 255, 255, 0.1)"
                    _hover={{ borderColor: 'blue.400' }}
                    _focus={{ borderColor: 'blue.400', boxShadow: '0 0 0 1px #2196f3' }}
                    p={4}
                    color="white"
                  />
                </Field.Root>

                <Button
                  type="submit"
                  colorScheme="blue"
                  size="lg"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: '0 10px 30px rgba(33, 150, 243, 0.4)' }}
                  color="white"
                >
                  <Send size={20} style={{ marginRight: '8px' }} />
                  Send Message
                </Button>
              </Stack>
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Box>
    </Box>
  )
}

