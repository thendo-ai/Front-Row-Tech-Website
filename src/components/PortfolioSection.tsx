import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

import businessWebsite from '../assets/sa-business-website.png';
import ecommerceStore from '../assets/sa-ecommerce-store.png';
import bookingSystem from '../assets/sa-booking-system.png';
import aiDashboard from '../assets/sa-ai-dashboard.png';

export function PortfolioSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      category: 'Business Website',
      title: 'Service Business Website',
      description:
        'A professional website built for local service businesses such as consultants, electricians, beauty studios, cleaning companies, and agencies.',
      image: businessWebsite,
      tags: ['Local SEO', 'Lead Forms', 'WhatsApp'],
    },
    {
      category: 'E-Commerce',
      title: 'Online Store for Local Retail',
      description:
        'A clean online shop for South African retailers selling products, managing stock, taking payments, and growing beyond walk-in customers.',
      image: ecommerceStore,
      tags: ['PayFast', 'Stock Control', 'Mobile Friendly'],
    },
    {
      category: 'Automation',
      title: 'Booking & Admin System',
      description:
        'A custom booking and admin workflow system for businesses that handle appointments, client enquiries, invoices, and follow-ups.',
      image: bookingSystem,
      tags: ['Bookings', 'Admin Tools', 'Automation'],
    },
    {
      category: 'AI & Data',
      title: 'Business Insights Dashboard',
      description:
        'A smart dashboard that helps business owners track leads, sales, customer activity, and marketing performance in one place.',
      image: aiDashboard,
      tags: ['AI Insights', 'Reports', 'Sales Data'],
    },
  ];

  return (
    <section
      id="work"
      className="relative py-24 lg:py-32 bg-[#050714] overflow-hidden"
      ref={ref}
    >
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-[#ff2626] mb-4">
            Featured Work
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital Tools for{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Growing SA Businesses
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Practical websites, systems, and automation built for South African business owners who want more enquiries, smoother operations, and stronger growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#ff2626]/40 hover:shadow-[0_0_30px_rgba(255,38,38,0.22)] transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-72 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050714] via-[#050714]/50 to-transparent" />

                <div className="absolute top-4 left-4 px-4 py-2 bg-[#ff2626]/15 backdrop-blur-md border border-[#ff2626]/40 rounded-full text-[#ff3b3b] text-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-[#ff3b3b] transition-colors duration-300">
                  {project.title}
                </h4>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/[0.04] border border-white/10 rounded-full text-gray-300 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="flex items-center gap-2 text-[#ff3b3b] font-medium group-hover:gap-4 transition-all duration-300">
                  View Project
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-4 bg-white/[0.03] border border-white/10 text-white rounded-full hover:bg-white/[0.06] hover:border-[#ff2626]/50 hover:shadow-[0_0_25px_rgba(255,38,38,0.25)] transition-all duration-300">
            View More Work
          </button>
        </motion.div>
      </div>
    </section>
  );
}