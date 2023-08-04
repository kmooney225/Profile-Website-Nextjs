import Contacts from '../src/components/contact/index';
import { NextSeo } from 'next-seo';

export default function Contact() {

    return (
      <div>
        <NextSeo
            title="Kevin Mooney - Contact"
            description="I am a professional saxophone player and web developer. Here is my digital portfolio!"
        />
        <Contacts />
      </div>
    )
  }