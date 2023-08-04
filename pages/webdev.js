import Header from "../src/components/webdev/header"
import Description from "../src/components/webdev/description"
import Package from "../src/components/webdev/package"
import Portfolio from "../src/components/webdev/portfolio"
import BackgroundWeb from '../src/components/layouts/backgroundWeb';
import { NextSeo } from 'next-seo';

export default function Webdev() {

    return (
      <div>
        <NextSeo
            title="Kevin Mooney - Web Development"
            description="I am a professional saxophone player and web developer. Here is my digital portfolio!"
        />
        <Header />
        <Description />
        <Portfolio />
        <Package />
        <BackgroundWeb />
      </div>
    )
  }