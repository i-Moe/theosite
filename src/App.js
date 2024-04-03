import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage'; // Importando a página AboutPage
import Container from './components/Container';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Box minH="100vh">
          <Box bg="gray.100">
            <Container>
              <Navbar />
            </Container>
          </Box>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} /> {/* Adicionando a rota para a página AboutPage */}
            {/* Add other routes here */}
          </Routes>
          <Box bg="gray.100">
            <Container>
              <Footer />
            </Container>
          </Box>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
