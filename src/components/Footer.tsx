import { Instagram, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 pt-24 pb-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-500 shadow-sm flex items-center justify-center bg-gray-900">
                <img 
                  src="https://ui-avatars.com/api/?name=Arka+Dance&background=111827&color=f97316&rounded=true&size=100&font-size=0.4"
                  alt="Arka Dance Academy Logo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-serif text-3xl font-bold text-white tracking-tight">
                Arka <span className="text-orange-500">Dance</span>
              </span>
            </a>
            <p className="text-gray-400 max-w-md text-lg leading-relaxed mb-8">
              Empowering individuals through the divine art of dance. Join us in preserving cultural heritage and exploring contemporary expression.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/arka_dance_academy_/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 hover:bg-orange-500 hover:text-white transition-all"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-400 hover:text-orange-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</a></li>
              <li><a href="#classes" className="text-gray-400 hover:text-orange-500 transition-colors">Our Classes</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-orange-500 transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-1 shrink-0" />
                <span className="text-gray-400 text-sm leading-relaxed">24, Bank Colony Rd, next to South grand hotel, KSRTC Layout, Uttarahalli Hobli, Bengaluru, Karnataka 560061, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-gray-400">+91 91641 97597</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="https://www.instagram.com/arka_dance_academy_/?hl=en" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                  DM us on Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Mon</span> <span>6 a.m.–9 p.m.</span></li>
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Tue</span> <span>6 a.m.–9 p.m.</span></li>
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Wed</span> <span>6 a.m.–9 p.m.</span></li>
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Thu</span> <span>6 a.m.–9 p.m.</span></li>
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Fri</span> <span>6 a.m.–9 p.m.</span></li>
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Sat</span> <span>6 a.m.–9 p.m.</span></li>
              <li className="flex justify-between text-gray-400"><span className="text-gray-300">Sun</span> <span>6 a.m.–9 p.m.</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Arka Dance Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            Designed with passion for dance
          </div>
        </div>
      </div>
    </footer>
  );
}
