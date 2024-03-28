import Header from "../src/components/music/header"
import Description from "../src/components/music/description"
import LogosDisplay from "../src/components/music/logosDisplay"
import Testimonials from "../src/components/music/testimonials"
import Package from "../src/components/music/package"
import Portfolio from "../src/components/music/portfolio"
import { NextSeo } from 'next-seo';

export default function Music() {

    return (
      <div>
        <NextSeo
            title="Kevin Mooney - Music"
            description="A professional saxophone player and software engineer based out of Denver, Colorado.
            Kevin Mooney have played many type of musical venues including the Hard Rock Cafe, Ritz Carlton and Four Seasons.
            Originally being from a town in Alabama near New Orleans, Kevin have experience with playing Jazz and RnB music
            along with his adventures with busking."
        />
        <Header />
        <Description />
        <LogosDisplay />
        <Testimonials />
        <Portfolio />
        <Package />
      </div>
    )
  }