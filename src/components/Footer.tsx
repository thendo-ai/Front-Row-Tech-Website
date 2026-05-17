import { motion } from 'motion/react';
import { Linkedin, Phone, Instagram, Mail } from 'lucide-react';
import logo from '../assets/logo.png';

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Process', href: '#process' },
      { label: 'Our Work', href: '#work' },
      { label: 'Contact', href: '#contact' },
    ],
    services: [
      { label: 'Web Development', href: '#services' },
      { label: 'E-Commerce', href: '#services' },
      { label: 'Automation', href: '#services' },
      { label: 'AI Solutions', href: '#services' },
      { label: 'Software Testing', href: '#services' },
      { label: 'Digital Strategy', href: '#services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-[#050714] border-t border-white/10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* LOGO SECTION */}
          <div className="lg:col-span-2">

            <motion.div
  className="mb-6 flex items-center"
  whileHover={{ scale: 1.03 }}
>
  <img
    src={logo}
    alt="Front Row Tech"
    className="h-14 md:h-16 w-auto object-contain 
               drop-shadow-[0_0_12px_rgba(255,38,38,0.3)]"
  />
</motion.div>

            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Building smart digital solutions that help South African businesses grow. Where ideas go live.
            </p>

            {/* Socials */}
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: '#' },
                { Icon: Phone, href: '#' },
                { Icon: Instagram, href: '#' },
                { Icon: Mail, href: '#contact' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  onClick={(e) => {
                    if (href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(href);
                    }
                  }}
                  className="w-10 h-10 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#ff3b3b] hover:border-[#ff2626]/50 hover:shadow-[0_0_15px_rgba(255,38,38,0.25)] transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h5 className="text-white font-bold mb-4">Company</h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#ff3b3b] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h5 className="text-white font-bold mb-4">Services</h5>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#ff3b3b] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h5 className="text-white font-bold mb-4">Contact</h5>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:info@frontrowtech.co.za" className="hover:text-[#ff3b3b]">
                  info@frontrowtech.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27614132858" className="hover:text-[#ff3b3b]">
                  +27 (0) 61 413 2858
                </a>
              </li>
              <li>
                Centurion, Gauteng<br />
                South Africa
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Front Row Tech. All rights reserved.
          </p>

          <div className="flex gap-6">
            {footerLinks.legal.map((link, index) => (
              <a key={index} href={link.href} className="text-gray-400 hover:text-[#ff3b3b] text-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000]" />
    </footer>
  );
}