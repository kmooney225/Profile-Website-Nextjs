import axios from 'axios'
import Hero from '../src/components/home/Hero';
import Service from '../src/components/home/services';
import BlogGallery from '../src/components/home/blog-gallery';
import Contact from '../src/components/home/contact';
import Background from '../src/components/layouts/background';

export default function Home() {

  return (
    <div>
		<Hero />
		<Service />
		{/* <BlogGallery /> */}
		<Contact />
		<Background />
    </div>
  )
}



