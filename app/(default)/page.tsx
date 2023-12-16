export const metadata = {
  title: 'xLogic Labs - AI powered tailored & reconfigurable Industrial Automation',

}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import ContactInfo from '@/components/contact-info'

export default function Home() {
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
