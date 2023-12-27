import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Milan!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.

// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#1A202C"
    padding="4"
  >
    <VStack spacing={4} align="center">
      <Avatar size="XL" name="Pete" src="https://i.pravatar.cc/150?img=7 " />
      <Heading
        as="h1"
        size="2xl"
        color="white"
        textAlign="center"
        fontFamily="sans-serif"
      >
        {greeting}
      </Heading>
      <VStack spacing={4} color="white" fontSize={30} fontFamily="sans-serif">
        <span>{bio1}</span>
        <span>{bio2}</span>
      </VStack>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
