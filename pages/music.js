import Header from "../src/components/music/header"
import Description from "../src/components/music/description"
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
        <Portfolio />
        <Package />
      </div>
    )
  }