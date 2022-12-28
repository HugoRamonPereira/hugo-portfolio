import React from 'react';
import { Button, useColorMode, Text, Icon, Menu, MenuButton, MenuList, MenuItem, Box, Wrap, WrapItem, IconButton, Center, Link, ListItem, UnorderedList, VStack,  HStack } from '@chakra-ui/react';
import { HiOutlineMoon, HiOutlineSun, HiChevronDown, HiOutlineCodeBracket, HiOutlineEnvelope, HiOutlineHome, HiOutlineStar, HiOutlineUser } from  'react-icons/hi2';
import { AiFillGithub } from 'react-icons/ai';
import { RiLinkedinFill, RiFacebookCircleFill, RiInstagramFill, RiTwitterFill } from 'react-icons/ri';
import { MdOutlineSimCardDownload } from 'react-icons/md';
import Image from 'next/image';
import { BsPinMap } from 'react-icons/bs';
import styles from './Home.module.css';
import { useRouter } from 'next/router';
import { Saira } from '@next/font/google';

// type HomeProps = {
//   home: string
//   about: string
//   skills: string
//   services: string
//   projects: string
//   contact: string
// }

const saira = Saira({ subsets: ['latin'] });

const Home = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Box bg='gray.100' w='100vw' h='100vh' className={saira.className}>
      {/* Theme and language toggler */}
      <HStack w='100vw' h='5rem' display='flex' justifyContent='flex-end' gap='5' pt='6' pr='20'>

        <HStack>
          <Button onClick={toggleColorMode} mb='5' fontWeight={'light'} bg='purple.100' variant='solid'>
            {colorMode === 'dark' ?
              <Text width='30' fontSize='larger'><Icon as={HiOutlineSun} verticalAlign={'middle'} mb={0.5} mr={2} />Light</Text> :
              <Text width='30' fontSize='larger' color='purple.500'><Icon as={HiOutlineMoon} verticalAlign={'middle'} mb={0.5} mr={2} />Dark </Text>
            }
          </Button>
        </HStack>

        <HStack>
          <Menu>
            <MenuButton as={Button} rightIcon={<Icon as={HiChevronDown} />} bg='purple.100' mb='5' variant='solid' >
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
        </HStack>

      </HStack>

      {/* Sidebar Menu */}
      <Center bg='purple.100' width='80' height='93vh' borderRadius='3xl' ml='8' mt='-12' position='fixed'>
        <UnorderedList listStyleType='none' marginInline='auto' >
          <ListItem>
            <Link href='/' _active={{ bg: 'yellow', transform: 'scale(0.97)', border: '2px solid #A555EC' }}>
              <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' justifyContent='flex-start' _hover={{ bg: 'green' }}>
                <Icon as={HiOutlineHome} mr={2} /> Home
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/about' _active={{ bg: 'yellow', transform: 'scale(0.97)', border: '2px solid #A555EC' }}>
              <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='unset' variant='unstyled'  justifyContent='flex-start'>
                <Icon as={HiOutlineUser} mr={2} /> About
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/skills' className={currentRoute === '/skills' ? styles.activeLink : styles.nonActive}>
              <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='unset' variant='unstyled'  justifyContent='flex-start'>
                <Icon as={HiOutlineCodeBracket} mr={2} /> Skills
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/projects' className={currentRoute === '/projects' ? styles.activeLink : styles.nonActive}>
              <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='unset' variant='unstyled' justifyContent='flex-start'>
                <Icon as={HiOutlineStar} mr={2} /> Projects
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/contact' className={currentRoute === '/contact' ? styles.activeLink : styles.nonActive}>
              <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='unset' variant='unstyled' justifyContent='flex-start'>
                <Icon as={HiOutlineEnvelope} mr={2} /> Contact
              </Button>
            </Link>
          </ListItem>
          <ListItem>
            <Link href='/location' className={currentRoute === '/location' ? styles.activeLink : styles.nonActive}>
              <Button mb={7} width='56' p='7' fontSize='larger' fontWeight='light' color='purple.700' variant='ghost' justifyContent='flex-start'>
                <Icon as={BsPinMap} mr={2} /> Location
              </Button>
            </Link>
          </ListItem>
        </UnorderedList>
      </Center>


      {/* Ramon Main */}
      <VStack>
        <Box display='flex' justifyContent='center' width='90%' height='35vh' pt='5rem' pl='32'>
          <Wrap>
            <WrapItem>
              <Box height='240' borderRadius='50%' overflow='hidden' display='flex'>
                <Image src='/assets/pics/HRamonP.jpg' width='200' height='200' alt='Hugo Profile Picture' />
              </Box>
            </WrapItem>
          </Wrap>
        </Box>

        <Box display='flex' justifyContent='center' width='90%' height='15vh' pt='1rem' pl='32'>
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

        <Box display='flex' justifyContent='center' width='90%' height='15vh' pt='1rem' pl='32'>
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

        <Box display='flex' justifyContent='center' width='90%' height='20vh' pt='1rem' pl='32'>
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
      </VStack>

    </Box>
  );
};

export default Home;
