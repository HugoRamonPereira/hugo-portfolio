import Link from 'next/link';
import React from 'react';
import { Button, useColorMode, HStack, UnorderedList, ListItem } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

// type SidebarProps = {
//   home: string
//   about: string
//   skills: string
//   services: string
//   projects: string
//   contact: string
// }

export const Sidebar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack backgroundColor={'purple.500'} width={'96'} height={'100vh'} alignItems='center' justifyContent='center'>
      <div>
        <UnorderedList listStyleType={'none'} >
          <ListItem>
            <Link href='/'><Button mb={5} width='72'>Home</Button></Link>
          </ListItem>
          <ListItem>
            <Link href='/'><Button mb={5} width='72'>About</Button></Link>
          </ListItem>
          <ListItem>
            <Link href='/'><Button mb={5} width='72'>Skills</Button></Link>
          </ListItem>
          <ListItem>
            <Link href='/'><Button mb={5} width='72'>Services</Button></Link>
          </ListItem>
          <ListItem>
            <Link href='/'><Button mb={5} width='72'>Projects</Button></Link>
          </ListItem>
          <ListItem>
            <Link href='/'><Button mb={5} width='72'>Contact</Button></Link>
          </ListItem>
          <Button onClick={toggleColorMode} mb={5}>
            {colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </UnorderedList>
      </div>
    </HStack>
  );
};

