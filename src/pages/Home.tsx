import { Hero } from '../sections/Hero'
import { Companies } from '../sections/Companies'
import { About } from '../sections/About'
import { Services } from '../sections/Services'
import { Solutions } from '../sections/Solutions'
import { Industries } from '../sections/Industries'
import { Portfolio } from '../sections/Portfolio'
import { Process } from '../sections/Process'
import { WhyChooseUs } from '../sections/WhyChooseUs'
import { Achievements } from '../sections/Achievements'
import { Testimonials } from '../sections/Testimonials'
import { CTABanner } from '../sections/CTABanner'
import { FAQ } from '../sections/FAQ'
import { Contact } from '../sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <Companies />
      <About />
      <Services />
      <Solutions />
      <Industries />
      <Portfolio />
      <Process />
      <WhyChooseUs />
      <Achievements />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Contact />
    </>
  )
}
