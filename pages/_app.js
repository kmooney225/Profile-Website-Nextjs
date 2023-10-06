import '../src/styles/index.scss'
import Header from '../src/components/layouts/header';
import Footer from '../src/components/layouts/footer';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}



export default MyApp
