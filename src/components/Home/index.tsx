import React from 'react';
import Link from 'next/link';
import { Button, useColorMode, HStack, UnorderedList, ListItem, Text, Icon, Menu, MenuButton, MenuList, MenuItem, Flex, Center, Box, Wrap, WrapItem, IconButton } from '@chakra-ui/react';
import { HiOutlineHome, HiOutlineUser, HiOutlineCodeBracket, HiOutlineWrenchScrewdriver, HiOutlineEnvelope, HiOutlineStar, HiOutlineMoon, HiOutlineSun, HiChevronDown } from  'react-icons/hi2';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinFill, RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import Image from 'next/image';

// type HomeProps = {
//   home: string
//   about: string
//   skills: string
//   services: string
//   projects: string
//   contact: string
// }

const Home = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex>
      <Center w='96' h='100vh' bg='gray.50'>
        <HStack backgroundColor='purple.100' width='80' height='93vh' borderRadius='3xl'>
          <UnorderedList listStyleType='none' marginInline='auto' >
            <ListItem>
              <Link href='/'>
                <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                  <Icon as={HiOutlineHome} mr={2} /> Home
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='/'>
                <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                  <Icon as={HiOutlineUser} mr={2} /> About
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='/'>
                <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                  <Icon as={HiOutlineCodeBracket} mr={2} /> Skills
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='/'>
                <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                  <Icon as={HiOutlineWrenchScrewdriver} mr={2} /> Services
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='/'>
                <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                  <Icon as={HiOutlineStar} mr={2} /> Projects
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href='/'>
                <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                  <Icon as={HiOutlineEnvelope} mr={2} /> Contact
                </Button>
              </Link>
            </ListItem>
          </UnorderedList>
        </HStack>
      </Center>
      <Box flex='1' bg='gray.50'>
        <Box w='90%' h='5rem' p='6' m='auto' display='larger' justifyContent='flex-end' gap='5'>
          <Box>
            <Button onClick={toggleColorMode} mb={5} fontWeight={'light'} bg='purple.100' variant='solid'>
              {colorMode === 'dark' ?
                <Text width='30' fontSize='larger'><Icon as={HiOutlineSun} verticalAlign={'middle'} mb={0.5} mr={2} />Light</Text> :
                <Text width='30' fontSize='larger' color='purple.500'><Icon as={HiOutlineMoon} verticalAlign={'middle'} mb={0.5} mr={2} />Dark </Text>
              }
            </Button>
          </Box>
          <Box>
            <Menu>
              <MenuButton as={Button} rightIcon={<Icon as={HiChevronDown} />} bg='purple.100' variant='solid' >
                <Box display='flex' alignItems='center' w='28' >
                  <Image src='/assets/flags/united-states.png' width={25} height={25} alt='United States flag' />
                  <Text pl='3' fontWeight='normal' fontSize='md' color='purple.500'>English</Text>
                </Box>
              </MenuButton>
              <MenuList w='16'>
                <MenuItem>
                  <Image src='/assets/flags/brazil.png' width={30} height={30} alt='Brazil flag' />
                  <Text ml={2} color='purple.500'>Portuguese</Text>
                </MenuItem>
                <MenuItem pl={4}>
                  <Image src='/assets/flags/germany.png' width={22} height={22} alt='Germany flag' />
                  <Text ml={3} color='purple.500'>German</Text>
                </MenuItem>
                <MenuItem pl={4}>
                  <Image src='/assets/flags/spain.png' width={22} height={22} alt='Spain flag' />
                  <Text ml={3} color='purple.500'>Spanish</Text>
                </MenuItem>
                <MenuItem pl={4}>
                  <Image src='/assets/flags/france.png' width={23} height={23} alt='France flag' />
                  <Text ml={3} color='purple.500'>French</Text>
                </MenuItem>
                <MenuItem pl={3.5}>
                  <Image src='/assets/flags/netherlands.png' width={27} height={25} alt='Netherlands flag' />
                  <Text ml={2.5} color='purple.500'>Dutch</Text>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
        <Box display='flex' justifyContent='center' width='90%' height='35vh' pt='5rem'>
          <Wrap>
            <WrapItem>
              <Box height='240' borderRadius='50%' overflow='hidden' display='flex'>
                <Image src='/assets/pics/HRamonP.jpg' width='200' height='200' alt='Hugo Profile Picture' />
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box display='flex' justifyContent='center' width='90%' height='15vh' pt='1rem'>
          <Wrap>
            <WrapItem>
              <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Text fontSize='4xl' pb='1rem'>
                  Hugo Ramon Pereira
                </Text>
                <Text fontSize='2xl' fontWeight='light'>
                  Frontend Developer
                </Text>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box display='flex' justifyContent='center' width='90%' height='15vh' pt='1rem'>
          <Wrap>
            <WrapItem>
              <Box display='flex' justifyContent='center' alignItems='center' gap='5'>
                <IconButton
                  colorScheme='linkedin'
                  aria-label='LinkedIn'
                  size='lg'
                  borderRadius='50%'
                  icon={<Icon as={RiLinkedinFill} />}
                />
                <IconButton
                  bg='blackAlpha.800'
                  color='whiteAlpha.900'
                  aria-label='Github'
                  size='lg'
                  borderRadius='50%'
                  icon={<Icon as={AiFillGithub} />}
                />
                <IconButton
                  colorScheme='facebook'
                  aria-label='Facebook'
                  size='lg'
                  borderRadius='50%'
                  icon={<Icon as={RiFacebookCircleFill} />}
                />
                <IconButton
                  colorScheme='twitter'
                  aria-label='Twitter'
                  size='lg'
                  borderRadius='50%'
                  icon={<Icon as={RiTwitterFill} />}
                />
                <IconButton
                  colorScheme='pink'
                  aria-label='Instagram'
                  size='lg'
                  borderRadius='50%'
                  icon={<Icon as={RiInstagramFill} />}
                />
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
        <Box display='flex' justifyContent='center' width='90%' height='20vh' pt='1rem'>
          <Wrap>
            <WrapItem>
              <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                <Button rightIcon={<Icon as={MdOutlineSimCardDownload} />} colorScheme='purple' variant='solid' fontSize='lg' fontWeight='normal' p='8'>
                  Download Resume
                </Button>
              </Box>
            </WrapItem>
          </Wrap>
        </Box>
      </Box>
    </Flex>
  );
};

export default Home;
