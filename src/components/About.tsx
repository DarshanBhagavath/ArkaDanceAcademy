import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-orange-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-orange-200 rounded-[2rem] transform -rotate-3 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80"
              alt="Dance Performance"
              className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-4xl font-serif font-bold text-orange-600 mb-1">10+</p>
              <p className="text-gray-600 font-medium text-sm">Years of<br/>Excellence</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6 tracking-wide uppercase">
              About The Academy
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6 leading-tight">
              Preserving Tradition, <br />
              <span className="text-orange-600">Inspiring Innovation.</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Arka Dance Academy is a premier institution dedicated to imparting the highest quality of dance education. We believe that dance is not just movement, but a divine expression of the soul.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our comprehensive curriculum embraces the rich heritage of classical dance forms while fostering creativity through contemporary styles. Whether you are a beginner taking your first steps or an advanced student perfecting your craft, our academy provides a nurturing environment to help you shine.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Expert Faculty</h4>
                <div className="text-gray-600 text-sm space-y-2">
                  <p>
                    <strong className="text-gray-900 font-semibold">Director:</strong>{' '}
                    <a href="https://instagram.com/darshi.06" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">@darshi.06</a>
                  </p>
                  <p>
                    <strong className="text-gray-900 font-semibold">Choreographers:</strong><br />
                    <a href="https://instagram.com/darshi.06" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">@darshi.06</a>,{' '}
                    <a href="https://instagram.com/kaushiksuvarna_ks" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">@kaushiksuvarna_ks</a>,{' '}
                    <a href="https://instagram.com/sumith_salian_" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">@sumith_salian_</a>,{' '}
                    <a href="https://instagram.com/ajay_dancer_official" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 transition-colors">@ajay_dancer_official</a>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Global Stage</h4>
                <p className="text-gray-600">Opportunities to perform at prestigious cultural events.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
