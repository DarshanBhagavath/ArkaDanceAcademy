import { Instagram, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { InstagramEmbed } from 'react-social-media-embed';

export default function Gallery() {
  // Replace these URLs with the actual links to Arka Dance Academy's Instagram posts and reels
  const instagramPosts = [
    'https://www.instagram.com/p/CUbHfhpswxt/', // Placeholder from react-social-media-embed docs
    'https://www.instagram.com/p/CuzsY9kL2kI/', // Placeholder
    'https://www.instagram.com/p/CgK7H9-L7z2/', // Placeholder
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-4 tracking-wide uppercase">
              Our Gallery
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Moments of Grace
            </h2>
            <p className="text-lg text-gray-600">
              A glimpse into our vibrant performances, rigorous practice sessions, and cultural celebrations directly from our Instagram.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <a 
              href="https://share.google/kpqk444e8HOBpNiC5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm"
            >
              <ExternalLink size={20} /> View Full Drive Gallery
            </a>
            <a 
              href="https://www.instagram.com/arka_dance_academy_/?hl=en" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              <Instagram size={20} /> Follow on Instagram
            </a>
          </div>
        </motion.div>

        {/* Note about placeholders */}
        <div className="mb-8 p-4 bg-orange-50 text-orange-800 rounded-lg text-sm border border-orange-100 flex items-start gap-3">
          <span className="text-xl">ℹ️</span>
          <p>
            <strong>Note:</strong> We have added live Instagram integration! Because Instagram requires specific post links to embed them, you just need to replace the placeholder URLs in the <code>src/components/Gallery.tsx</code> file with your actual reel/post links.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {instagramPosts.map((url, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="w-full max-w-[328px] overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow bg-white"
            >
              <InstagramEmbed url={url} width="100%" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
