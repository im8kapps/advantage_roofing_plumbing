import { Header } from '../components/Header';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';
import { Hero } from '../sections/Hero';
import { Highlights } from '../sections/Highlights';
import { Process } from '../sections/Process';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Testimonials } from '../sections/Testimonials';
import { WhyUs } from '../sections/WhyUs';
import { Blog } from '../sections/Blog';

export function HomePage() {
  return (
    <div className="bg-slate-950 text-white">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <WhyUs />
        <Projects />
        <Process />
        <Blog />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
