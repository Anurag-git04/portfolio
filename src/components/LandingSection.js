import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Avatar, Heading, Text } from "@chakra-ui/react";
import Anurag from '../images/Anurag.png'

const greeting = "Hello, my name is Anurag Shaw!";
const bio1 = "A computer engineering Student";
const bio2 = "currently pursuing a Bachelor's degree in Computer Science ";
const bio3 = "and an aspiring web-developer";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    >
    <Avatar src={Anurag} />
    <Text>{greeting}</Text>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
    <Heading>{bio3}</Heading>
  </FullScreenSection>
);

export default LandingSection;
