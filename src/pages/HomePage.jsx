import React, { useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Tag from '../components/Tag';
import Container from '../components/Container';

function HomePage() {
  // Função para enviar o evento do Pixel do Facebook quando a página for montada
  useEffect(() => {
    fbq('track', 'PageView');
  }, []);

  return (
    <Box minH="100vh">
      <Box bg="blue.200">
        <Container>
          <Hero />
        </Container>
      </Box>
      <Box bg="green.200">
        <Container>
          <Tag />
        </Container>
      </Box>
    </Box>
  );
}

export default HomePage;
