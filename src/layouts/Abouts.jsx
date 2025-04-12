import React, { useState, useEffect } from 'react'
import Container from '../components/Container';
import Heading from '../components/Heading';
import Flex from '../components/Flex';
import Button from '../components/Button';
import DeveloperCard from '../components/DeveloperCard';
import dev1img from '../assets/dev (1).jpg'
import dev2img from '../assets/dev (2).jpg'
import dev3img from '../assets/dev (3).jpg'


const Abouts = () => {
  const [userCount, setUserCount] = useState(1000);

  useEffect(() => {
    // Simulate counter animation
    const target = 5000;
    const interval = setInterval(() => {
      setUserCount(prev => {
        if (prev >= target) {
          clearInterval(interval);
          return prev;
        }
        return prev + 500;
      });
    }, 10);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 font-poppins">
      <Container>
      <Heading className='w-full py-10 text-center' 
        text='iTech Innovation Meets Community'/>
  
      <div className='w-full flex flex-col text-center items-center justify-center'>
          <div className="w-[70%] flex flex-col">
            <p className="text-lg mb-4">
              iTech is a premier platform connecting technology enthusiasts, developers, 
              and innovators worldwide. Since our inception, we've been committed to 
              fostering a collaborative environment for sharing knowledge and 
              cutting-edge solutions.
            </p>
            <p className="text-lg mb-8">
              Our platform offers comprehensive resources including tutorials, 
              project collaborations, and the latest tech trends. Whether you're 
              learning to code or deploying enterprise solutions, iTech provides 
              the tools and community support you need.
            </p>
          </div>

          <Flex className="w-[50%] items-center justify-center mb-10">
            <div className="bg-gray-300 p-12 rounded-lg">
              <Heading text='Our Community'/>
              <div className="text-6xl font-bold text-primary mb-4">
                {userCount.toLocaleString()}+
              </div>
              <p className="text-lg">Developers Trusting iTech</p>
            </div>
          </Flex>
      </div>

      <div className="text-center">
        <Button text='Join Now'/>
      </div>

      <Heading className='w-full pt-20 text-center' text='Our Core Team'/>
      <Flex className="flex-wrap justify-center gap-x-10">
      <DeveloperCard
        
        name="John Doe"
        role="Lead Developer"
        bio="Full-stack developer with 10+ years experience in building scalable web applications."
        image ={dev1img}
        social={{
          github: "#",
          linkedin: "#",
          twitter: "#"
        }}
      />
      
      <DeveloperCard
        name="Jane Smith"
        role="UI/UX Designer"
        bio="Creative designer specializing in user-centered interfaces and design systems."
        image={dev2img}
        social={{
          github: "#",
          linkedin: "#",
          twitter: "#"
        }}
      />
      
      <DeveloperCard
        name="Mike Johnson"
        role="DevOps Engineer"
        bio="Infrastructure specialist ensuring seamless deployment and system reliability."
        image={dev3img}
        social={{
          github: "#",
          linkedin: "#",
          twitter: "#"
        }}
      />
      </Flex>
      </Container>
    </section>
  )
}

export default Abouts
