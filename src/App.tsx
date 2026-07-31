/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Classes from './components/Classes';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen font-sans scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Classes />
      <Gallery />
      <Footer />
    </div>
  );
}

