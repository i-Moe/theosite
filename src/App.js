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
      {/* Meta Pixel Code */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '319669290782276');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=319669290782276&ev=PageView&noscript=1"
        />
      </noscript>
      {/* End Meta Pixel Code */}
    </ChakraProvider>
  );
}

export default App;
