import { Contact } from '../sections/Contact';
import { Hero } from '../sections/Hero';
import { Highlights } from '../sections/Highlights';
import { Process } from '../sections/Process';
import { Projects } from '../sections/Projects';
import { Services } from '../sections/Services';
import { Testimonials } from '../sections/Testimonials';
import { WhyUs } from '../sections/WhyUs';
import { BlogPreview } from '../sections/BlogPreview';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Highlights />
      <Services />
      <WhyUs />
      <Projects />
      <Process />
      <Testimonials />
      <BlogPreview />
      <Contact />
    </main>
  );
}
