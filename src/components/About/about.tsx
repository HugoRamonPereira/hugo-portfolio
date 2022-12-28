import { Center, Container, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
// import aboutPic from '../assets/HugoRamon.png';

const About = () => {
  return (
    <Flex bg='yellow.200' w='100vw' flexDirection='column'>

      <Center bg='pink.200' w='100vw'>
        <Text fontSize='4xl'>About Me</Text>
      </Center>

      <Container w='100vw' >

        <Flex gap='5rem' >

          <Flex flexDirection='column' bg='blue.200'>
            <>Hi, I&apos;m a Frontend Developer who loves creating new projects, styling stuff and and turning ideas, static projects into dynamic ones.</>
            <>I love working with nice teams and people where I can learn and maybe share something I know. I have 2 years of software development experience, where I focus on building modern-looking interfaces that also provide the users with great experience.</>
            <Image src='/assets/pics/HugoRamon.png' width={300} height={500} alt='Hugo Ramon Picture' />
          </Flex>

          <Flex flexDirection='column' bg='green.200'>

            <>
              <Text fontSize='2xl'>Information</Text>
              <Text>Hugo Ramon Pereira</Text>
              <Text>+55 88 99772-5550</Text>
              <Text>ramone.techie@gmail.com</Text>
            </>

            <>
              <Text fontSize='2xl'>Experience</Text>
              <>
                <Text>2 years of experience</Text>
                <Text>Frontend experience</Text>
              </>
              <>
                <Text>10+ projects</Text>
                <Text>Completed</Text>
              </>
              <>
                <Text>Support</Text>
                <Text>24/7</Text>
              </>
            </>

          </Flex>

        </Flex>

      </Container>

    </Flex>
  );
};

export default About;
