import Contacts from '../src/components/contact/index';
import { NextSeo } from 'next-seo';

export default function Contact() {

    return (
      <div>
        <NextSeo
            title="Kevin Mooney - Contact"
            description="A professional saxophone player and software engineer based out of Denver, Colorado.
            Kevin Mooney have played many type of musical venues including the Hard Rock Cafe, Ritz Carlton and Four Seasons.
            Originally being from a town in Alabama near New Orleans, Kevin have experience with playing Jazz and RnB music
            along with his adventures with busking."
        />
        <Contacts />
      </div>
    )
  }