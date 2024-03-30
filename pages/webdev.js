import Header from "../src/components/webdev/header"
import Description from "../src/components/webdev/description"
import Package from "../src/components/webdev/package"
import Portfolio from "../src/components/webdev/portfolio"
import BackgroundWeb from '../src/components/layouts/backgroundWeb';
import { NextSeo } from 'next-seo';
import CookieBanner from '../src/components/home/CookieBanner';

export default function Webdev() {

    return (
      <div>
        <NextSeo
            title="Kevin Mooney - Web Development"
            description="A professional saxophone player and software engineer based out of Denver, Colorado.
            Kevin Mooney have played many type of musical venues including the Hard Rock Cafe, Ritz Carlton and Four Seasons.
            Originally being from a town in Alabama near New Orleans, Kevin have experience with playing Jazz and RnB music
            along with his adventures with busking."
        />
        <Header />
        <Description />
        <Portfolio />
        <Package />
        <BackgroundWeb />
      </div>
    )
  }