import Header from "../src/components/music/header"
import Description from "../src/components/music/description"
import Package from "../src/components/music/package"
import Portfolio from "../src/components/music/portfolio"

const songs = [
  {
    name: "Song Name",
    audioFile: "URL to the song's audio file",
    image: "./music.js",
  },
  // Add more songs as necessary...
];


export default function Music() {

    return (
      <div>
        <Header />
        <Description />
        <Package />
        <Portfolio songs={songs}/>
      </div>
    )
  }