import Image from 'next/image';
import React from 'react';

// import aboutPic from '../assets/HugoRamon.png';

const About = () => {
  return (
    <>
      <div>
        <div>About Me</div>
      </div>
      <div>
        <div>
          <p>Hi, I&apos;m a Frontend Developer who loves creating new projects, styling stuff and and turning ideas, static projects into dynamic ones.</p>
          <p>I love working with nice teams and people where I can learn and maybe share something I know. I have 2 years of software development experience, where I focus on building modern-looking interfaces that also provide the users with great experience.</p>
          <Image src='/assets/pics/HugoRamon.png' width={300} height={500} alt='Hugo Ramon Picture' />
        </div>
        <div>
          <div>
            <h3>Information</h3>
            <p>Hugo Ramon Pereira</p>
            <p>+55 88 99772-5550</p>
            <p>ramone.techie@gmail.com</p>
          </div>
          <div>
            <h3>Experience</h3>
            <div>
              <p>2 years of experience</p>
              <p>Frontend experience</p>
            </div>
            <div>
              <p>10+ projects</p>
              <p>Completed</p>
            </div>
            <div>
              <p>Support</p>
              <p>24/7</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
