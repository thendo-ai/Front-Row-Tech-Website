import { motion } from 'motion/react';
import { ArrowRight, Linkedin, Mail, MessageCircle, Instagram, Music } from 'lucide-react';
import bgImage from '../assets/City_of_JHB.png';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Subtle Red Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-[#b30000]/10 to-black/75" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-block mb-6 px-4 py-2 bg-[#b30000]/10 border border-[#ff2626]/60 rounded-full text-sm text-[#ff4c4c] backdrop-blur-sm shadow-[0_0_18px_rgba(255,38,38,0.45)]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{
              opacity: [1, 0.65, 1],
              scale: 1,
              boxShadow: [
                '0 0 10px rgba(255,38,38,0.35)',
                '0 0 26px rgba(255,38,38,0.9)',
                '0 0 10px rgba(255,38,38,0.35)',
              ],
            }}
            transition={{
              opacity: { duration: 1.3, repeat: Infinity, ease: 'easeInOut' },
              boxShadow: { duration: 1.3, repeat: Infinity, ease: 'easeInOut' },
              scale: { delay: 0.2 },
            }}
          >
            Where Ideas Go Live
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="block mb-2">Websites, AI Automation &</span>
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#b30000] to-[#ff2626] bg-clip-text text-transparent">
              Software That Scales
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-12 leading-relaxed">
              Front Row Tech builds modern websites, AI-powered automation systems and custom digital tools that help businesses streamline operations, save time and scale smarter online.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.button
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] rounded-full text-lg font-medium flex items-center gap-2 hover:shadow-xl hover:shadow-[#ff2626]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
              <ArrowRight size={20} />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection('#services')}
              className="px-8 py-4 bg-white/10 border border-[#ff2626]/50 rounded-full text-lg font-medium backdrop-blur-md hover:bg-[#b30000]/20 hover:shadow-xl hover:shadow-[#ff2626]/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.button>
          </div>

          {/* Social Links */}
          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { Icon: Mail, href: '#contact' },
              { Icon: MessageCircle, href: 'https://wa.me/+27614132858' },
              { Icon: Instagram, href: 'https://instagram.com/frontrowtech.co.za' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
              { Icon: Music, href: 'https://tiktok.com/@frontrowtech' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target={href.startsWith('#') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center hover:text-[#ff2626] hover:border-[#ff2626] hover:shadow-lg hover:shadow-[#ff2626]/40 transition-all"
                whileHover={{ y: -3 }}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#ff2626]/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#ff2626] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}