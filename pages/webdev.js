import Header from "../src/components/webdev/header"
import Description from "../src/components/webdev/description"
import Package from "../src/components/webdev/package"
import Portfolio from "../src/components/webdev/portfolio"
import BackgroundWeb from '../src/components/layouts/backgroundWeb';

export default function Webdev() {

    return (
      <div>
        <Header />
        <Description />
        <Portfolio />
        <Package />
        <BackgroundWeb />
      </div>
    )
  }