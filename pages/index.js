import { useEffect } from 'react';
import Hero from '../src/components/home/hero';
import Bio from '../src/components/home/bio';
import Services from '../src/components/home/services';
import Background from '../src/components/layouts/background';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Bio />
      <Services />
      <Background />
    </div>
  )
}




