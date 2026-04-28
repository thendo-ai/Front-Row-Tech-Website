import { motion } from 'motion/react';
import { Linkedin, Phone, Instagram, Mail } from 'lucide-react';

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
      { label: 'Custom Solutions', href: '#services' },
      { label: 'IT Consulting', href: '#services' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#0A0E27] to-[#050714] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              Front Row Tech
            </motion.div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Building smart digital solutions that help businesses grow. Where ideas go live.
            </p>
            
            {/* Social Links */}
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
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Company Links */}
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
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
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
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-white font-bold mb-4">Contact</h5>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:info@frontrowtech.co.za" className="hover:text-cyan-400 transition-colors duration-200">
                  info@frontrowtech.co.za
                </a>
              </li>
              <li>
                <a href="tel:+27614132858" className="hover:text-cyan-400 transition-colors duration-200">
                  +27 (0) 61 413 2858
                </a>
              </li>
              <li>
                200 Harvard Avenue <br />Centurion<br />South Africa<br />0157
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Front Row Tech. All rights reserved.
            </p>

            {/* Legal Links */}
            <div className="flex gap-6">
              {footerLinks.legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
    </footer>
  );
}
