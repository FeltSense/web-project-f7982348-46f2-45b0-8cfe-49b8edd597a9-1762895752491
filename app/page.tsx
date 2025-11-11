import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

// Blog page will be created separately

export default function Home() {
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
