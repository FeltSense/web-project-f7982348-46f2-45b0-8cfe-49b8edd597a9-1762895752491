import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Programs />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}


