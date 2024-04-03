import React, { useState } from 'react';
import { Box, Flex, Heading, Spacer, Link, IconButton, useDisclosure } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box py="4" px="4" bg="blue.500" color="white">
      <Flex maxW="container.xl" mx="auto" alignItems="center">
        <Heading as="h1" size="md" mr="4" fontSize="2xl">
          My Website
        </Heading>
        <Spacer />
        <Box display={{ base: 'none', md: 'flex' }}>
          <Link as={RouterLink} to="/" fontSize={{ base: 'sm', md: 'md' }} mr={{ base: '2', md: '4' }}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" fontSize={{ base: 'sm', md: 'md' }} mr={{ base: '2', md: '4' }}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" fontSize={{ base: 'sm', md: 'md' }}>
            Contact
          </Link>
        </Box>
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          aria-label="Toggle navigation"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          onClick={onToggle}
          variant="ghost"
          fontSize="lg"
        />
      </Flex>
      <Box
        display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
        bg="blue.500"
        color="white"
        p={4}
        mt={4}
        borderRadius="md"
      >
        <Flex direction="column">
          <Link as={RouterLink} to="/" fontSize="md" mb="2">
            Home
          </Link>
          <Link as={RouterLink} to="/about" fontSize="md" mb="2">
            About
          </Link>
          <Link as={RouterLink} to="/contact" fontSize="md">
            Contact
          </Link>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;






// import React, { useState } from 'react';
// import { Box, Flex, Heading, Spacer, Link, IconButton, useDisclosure } from '@chakra-ui/react';
// import { Link as RouterLink } from 'react-router-dom';
// import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box py="4" bg="blue.500" color="white">
//       <Flex maxW="container.xl" mx="auto" alignItems="center">
//         <Heading as="h1" size="lg">
//           My Website
//         </Heading>
//         <Spacer />
//         <Box display={{ base: 'none', md: 'flex' }}>
//           <Link as={RouterLink} to="/" mr="4">
//             Home
//           </Link>
//           <Link as={RouterLink} to="/about" mr="4">
//             About
//           </Link>
//           <Link as={RouterLink} to="/contact">
//             Contact
//           </Link>
//         </Box>
//         <IconButton
//           display={{ base: 'flex', md: 'none' }}
//           aria-label="Toggle navigation"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           onClick={onToggle}
//           variant="ghost"
//         />
//       </Flex>
//       <Box
//         display={{ base: isOpen ? 'block' : 'none', md: 'none' }}
//         bg="blue.500"
//         color="white"
//         p={4}
//         mt={4}
//         borderRadius="md"
//       >
//         <Flex direction="column">
//           <Link as={RouterLink} to="/" mb="2">
//             Home
//           </Link>
//           <Link as={RouterLink} to="/about" mb="2">
//             About
//           </Link>
//           <Link as={RouterLink} to="/contact">
//             Contact
//           </Link>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;


// // // Navbar.jsx
// // import React from 'react';
// // import { Box, Flex, Heading, Spacer, Link } from '@chakra-ui/react';
// // import { Link as RouterLink } from 'react-router-dom';

// // const Navbar = () => {
// //   return (
// //     <Box py="4" bg="blue.500" color="white">
// //       <Flex maxW="container.xl" mx="auto" alignItems="center">
// //         <Heading as="h1" size="lg">
// //           Theo Ikedenha
// //         </Heading>
// //         <Spacer />
// //         <Box>
// //           <Link as={RouterLink} to="/" mr="4">
// //             Home
// //           </Link>
// //           <Link as={RouterLink} to="/" mr="4">
// //           {/* <Link as={RouterLink} to="/about" mr="4"> */}
// //             About
// //           </Link>
// //           <Link as={RouterLink} to="/">
// //             Contact
// //           </Link>
// //         </Box>
// //       </Flex>
// //     </Box>
// //   );
// // };

// // export default Navbar;
