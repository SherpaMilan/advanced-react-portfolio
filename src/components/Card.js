import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      align="start"
      border="1px"
      borderColor="#14532d"
      backgroundColor="white"
      borderRadius="md"
      maxW="400px"
      overflow="hidden"
    >
      <Image
        src={imageSrc}
        alt={title}
        boxSize="100%"
        borderRadius={["sm", "sm", "md", "md"]}
      />
      <Heading fontSize="l" color="black" mb={2}>
        {title}
      </Heading>
      <HStack spacing={4} align="center">
        <Text color="gray.600" fontSize="sm">
          {description}{" "}
        </Text>
      </HStack>
      <Text fontSize="sm" color="blue.500">
        See more <FontAwesomeIcon icon={faArrowRight} size="1x" />
      </Text>
    </VStack>
  );
};

export default Card;
