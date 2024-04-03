// HomePage.jsx
import React from 'react';
import { Box } from '@chakra-ui/react';
import Hero from '../components/Hero';
import Tag from '../components/Tag';
import Container from '../components/Container';

function HomePage() {
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



// import React from 'react';
// import { Box, Heading, Text, Flex, Button } from '@chakra-ui/react';
// import { InfoOutlineIcon } from '@chakra-ui/icons'; // Importando ícone de informação do Chakra UI
// import { MdWork } from 'react-icons/md'; // Importando ícone de maleta do Material Design

// const HomePage = () => {
//   return (
//     <Box p="4">
//       <Box bg="gray.100" p="6" borderRadius="md" mb="4">
//         <Heading as="h1" size="xl" mb="2">
//           Bem-vindo à HomePage
//         </Heading>
//         <Text fontSize="lg">Este é um exemplo de página inicial estilizada com Chakra UI.</Text>
//       </Box>

//       <Flex justify="space-between" align="center" mb="4">
//         <Box flex="1" mr="4">
//           <Heading as="h2" size="lg" mb="2">
//             Sobre nós
//           </Heading>
//           <Text>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
//             ante dapibus diam. Sed nisi.
//           </Text>
//         </Box>
//         <Button leftIcon={<InfoOutlineIcon />} colorScheme="blue">
//           Saiba mais
//         </Button>
//       </Flex>

//       <Flex justify="space-between" align="center">
//         <Box flex="1" mr="4">
//           <Heading as="h2" size="lg" mb="2">
//             Nossos Serviços
//           </Heading>
//           <Text>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus
//             ante dapibus diam. Sed nisi.
//           </Text>
//         </Box>
//         <Button leftIcon={<MdWork />} colorScheme="green">
//           Veja mais
//         </Button>
//       </Flex>
//     </Box>
//   );
// };

// export default HomePage;
