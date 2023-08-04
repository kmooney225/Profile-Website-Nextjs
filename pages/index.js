import { useEffect } from 'react';
import Hero from '../src/components/home/hero';
import Bio from '../src/components/home/bio';
import Services from '../src/components/home/services';
import Background from '../src/components/layouts/background';
import { NextSeo } from 'next-seo';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NextSeo
            title="Kevin Mooney"
            description="I am a professional saxophone player and web developer. Here is my digital portfolio!"
        />
      <Hero />
      <Bio />
      <Services />
      <Background />
    </div>
  )
}




