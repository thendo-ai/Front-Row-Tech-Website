import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Globe, ShoppingCart, Workflow, Lightbulb, Bot, Bug } from 'lucide-react';

export function ServicesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks. Fast, responsive, and optimized for performance and SEO.',
      features: ['React & Next.js', 'Custom CMS', 'API Integration', 'Progressive Web Apps'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platforms',
      description: 'Complete e-commerce solutions that drive sales and deliver exceptional shopping experiences at scale.',
      features: ['Shopify & WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics & Tracking'],
    },
    {
      icon: Workflow,
      title: 'Automation & Integrations',
      description: 'Streamline operations with intelligent automation that connects your tools and eliminates manual tasks.',
      features: ['Workflow Automation', 'API Development', 'Third-Party Integration', 'Process Optimization'],
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'AI-powered tools that help businesses work smarter, automate decisions, and unlock useful insights from data.',
      features: ['AI Chatbots', 'Predictive Insights', 'Content Automation', 'Machine Learning Tools'],
    },
    {
      icon: Bug,
      title: 'Software Testing',
      description: 'Quality assurance and testing services that help ensure your platforms are reliable, user-friendly, and launch-ready.',
      features: ['Manual Testing', 'Automation Testing', 'API Testing', 'Bug Reporting'],
    },
    {
      icon: Lightbulb,
      title: 'IT Consulting & Strategy',
      description: 'Strategic technology guidance to help you make informed decisions and maximize your digital investment.',
      features: ['Tech Stack Selection', 'Digital Transformation', 'Security Audits', 'Performance Optimization'],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-[#050714] overflow-hidden"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-[#ff2626] mb-4">
            What We Do
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Services That{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to transform your business and accelerate success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative h-full rounded-2xl p-[1px] bg-white/10 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full min-h-[390px] bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#ff2626]/40 hover:shadow-[0_0_30px_rgba(255,38,38,0.22)] transition-all duration-300">
                {/* Subtle glass highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/[0.05] backdrop-blur-md rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-[#ff3b3b]" size={32} />
                  </div>

                  {/* Title & Description */}
                  <h4 className="text-2xl font-bold text-white mb-4">
                    {service.title}
                  </h4>

                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-[#ff3b3b] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Hover Arrow */}
                  <div className="mt-auto pt-6 flex items-center gap-2 text-[#ff3b3b] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm font-medium">Learn More</span>
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
