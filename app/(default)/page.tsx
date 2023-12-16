export const metadata = {
  title: 'xLogic Labs - AI powered tailored & reconfigurable Industrial Automation',

}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ContactInfo from '@/components/contact-info'

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default async function Home() {
  // Choose a random delay between 1 and 5 seconds
  await delay(
    Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
  );

  return (
    <>
      <Hero />
      {/* <Features /> */}
      <Zigzag />
      {/* <Testimonials /> */}
      <ContactInfo />
      {/* <Newsletter /> */}
    </>
  )
}
