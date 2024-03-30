import { useEffect } from 'react';
import Hero from '../src/components/home/hero';
import Bio from '../src/components/home/bio';
import Services from '../src/components/home/services';
import Background from '../src/components/layouts/background';
import { NextSeo } from 'next-seo';
import CookieBanner from '../src/components/home/CookieBanner';

export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <NextSeo
            title="Kevin Mooney"
            description="A professional saxophone player and software engineer based out of Denver, Colorado.
            Kevin Mooney have played many type of musical venues including the Hard Rock Cafe, Ritz Carlton and Four Seasons.
            Originally being from a town in Alabama near New Orleans, Kevin have experience with playing Jazz and RnB music
            along with his adventures with busking."
        />
      <Hero />
      <Bio />
      <Services />
      <Background />
      <CookieBanner/>
    </div>
  )
}




