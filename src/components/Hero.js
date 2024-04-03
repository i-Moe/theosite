// Hero.jsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
  return (
    <Box bg="teal.500" color="white" py="10" textAlign="center">
      <Heading as="h1" size="2xl" mb="4">
        Welcome to Our Website
      </Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante
        dapibus diam. Sed nisi.
      </Text>
      <ScrollLink to="tagSection" smooth={true} duration={500}>
        <button style={{ marginTop: '20px', backgroundColor: 'white', color: 'teal', border: '1px solid teal', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' }}>Scroll to Tags</button>
      </ScrollLink>
    </Box>
  );
};

export default Hero;
