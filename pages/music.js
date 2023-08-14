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
            description="I am a professional saxophone player and web developer. Here is my digital portfolio!"
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