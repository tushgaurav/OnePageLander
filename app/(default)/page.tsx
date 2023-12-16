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
  await delay(2000);

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
