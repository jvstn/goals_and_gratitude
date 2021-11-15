import { ReactNode } from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from "@chakra-ui/react";
import { TestimonialAvatar, TestimonialContent, TestimonialHeading, TestimonialText } from "./testimonialComponents";


export default function TestimonialSection() {
  return (
    <Box id={"testimonial"} bg={useColorModeValue("gray.100", "gray.700")}>
      <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={"center"}>
          <Heading>Testimonials</Heading>
          <Text>Thoughts From Our Users</Text>
        </Stack>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 10, md: 4, lg: 10 }}
        >
          <Box>
            <TestimonialContent>
              <TestimonialHeading>Efficient Tracking</TestimonialHeading>
              <TestimonialText>
                So cool to have a tool that can track your goals and things
                you&apos;re thankful for.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://miro.medium.com/max/1500/1*isr5KXoLhLGhDFquf_cr7g.png"
              }
              name={"Andrea Dickerson"}
              title={"Developer's Mother"}
            />
          </Box>
          <Box>
            <TestimonialContent>
              <TestimonialHeading>Minimal Design</TestimonialHeading>
              <TestimonialText>
                I love the easy to use design and the minimalistic feel.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1528763380143-65b3ac89a3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2433&q=80"
              }
              name={"Eric Cooper"}
              title={"Friend of the Developer"}
            />
          </Box>
          <Box>
            <TestimonialContent>
              <TestimonialHeading>Inspiring Quotes</TestimonialHeading>
              <TestimonialText>
                The quotes are so inspiring and the app is so easy to use.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2067&q=80"
              }
              name={"Patricia London"}
              title={"Developer's Sister"}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
