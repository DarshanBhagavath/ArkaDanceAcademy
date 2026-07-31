import { Music, Star, Heart, Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Classes() {
  const classes = [
    {
      title: "Bharatanatyam",
      description: "Learn the ancient classical dance form known for its grace, purity, and sculptural poses.",
      icon: <Star className="w-8 h-8 text-orange-600" />,
      image: "https://i.pinimg.com/736x/1c/31/a9/1c31a97ce58385d4919cf62c5dee3245.jpg"
    },
    {
      title: "Kathak",
      description: "Master the intricate footwork and fast spins of this mesmerizing classical art form.",
      icon: <Music className="w-8 h-8 text-orange-600" />,
      image: "https://media.easy-peasy.ai/3e082cb5-361c-432e-bd82-30bf3d6563b3/63554951-b9e3-448f-bfe8-3f98c01fe13d_medium.webp"
    },
    {
      title: "Contemporary",
      description: "Explore freedom of movement, fluidity, and emotional expression through modern techniques.",
      icon: <Heart className="w-8 h-8 text-orange-600" />,
      image: "https://media.easy-peasy.ai/ef9ae787-ab2e-4ec4-866f-84be507646cc/1911556d-f4b3-4533-9e8f-2ee812d3b60e_medium.webp"
    },
    {
      title: "Folk & Bollywood",
      description: "High-energy sessions focusing on vibrant folk traditions and popular cinematic styles.",
      icon: <Users className="w-8 h-8 text-orange-600" />,
      image: "https://t3.ftcdn.net/jpg/08/70/66/94/360_F_870669414_jYsw1WNEzIstG6ZZfg3yznFzbjtG9Tep.jpg"
    }
  ];

  return (
    <section id="classes" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-4 tracking-wide uppercase">
            Our Offerings
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Discover Your Dance Style
          </h2>
          <p className="text-lg text-gray-600">
            We offer comprehensive training in various dance forms, catering to all age groups and skill levels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors z-10" />
                <img 
                  src={cls.image} 
                  alt={cls.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-orange-100 transition-all">
                  {cls.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{cls.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {cls.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
