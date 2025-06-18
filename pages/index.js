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
      {/* Background Component */}
      <Background videoSrc="/wedding.mp4" />

      {/* SEO Metadata */}
      <NextSeo
        title="Kevin Mooney"
        description="A professional saxophone player and software engineer based out of Denver, Colorado.
        Kevin Mooney has played many types of musical venues including the Hard Rock Cafe, Ritz Carlton, and Four Seasons.
        Originally from a town in Alabama near New Orleans, Kevin has experience playing Jazz and RnB music
        along with his adventures with busking."
      />

      {/* Page Content */}
      <Hero />
      <Bio />
      <Services />
      <CookieBanner />
    </div>
  );
}




