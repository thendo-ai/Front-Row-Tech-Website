import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  Globe,
  ShoppingCart,
  Workflow,
  Lightbulb,
  Bot,
  Bug,
} from 'lucide-react';

export function ServicesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const services = [
    {
      icon: Globe,
      title: 'Websites & Web Applications',
      description:
        'Custom websites and web applications built with modern frameworks. Fast, responsive, and optimized for performance and SEO.',
      features: ['React & Next.js', 'Custom CMS', 'API Integration', 'Progressive Web Apps'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Platforms',
      description:
        'Complete e-commerce solutions that drive sales and deliver exceptional shopping experiences at scale.',
      features: ['Shopify & WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics & Tracking'],
    },
    {
      icon: Workflow,
      title: 'Automation & Integrations',
      description:
        'Streamline operations with intelligent automation that connects your tools and eliminates manual tasks.',
      features: ['Workflow Automation', 'API Development', 'Third-Party Integration', 'Process Optimization'],
    },
    {
      icon: Bot,
      title: 'AI Tools',
      description:
        'AI-powered tools that help businesses work smarter, automate decisions, and unlock useful insights from data.',
      features: ['AI Chatbots', 'Predictive Insights', 'Content Automation', 'Machine Learning Tools'],
    },
    {
      icon: Bug,
      title: 'Software Testing & QA',
      description:
        'Quality assurance and testing services that help ensure your platforms are reliable, user-friendly, and launch-ready.',
      features: ['Manual Testing', 'Automation Testing', 'API Testing', 'Bug Reporting'],
    },
    {
      icon: Lightbulb,
      title: 'Digital Strategy',
      description:
        'Strategic technology guidance to help you make informed decisions and maximize your digital investment.',
      features: ['Tech Stack Selection', 'Digital Transformation', 'Security Audits', 'Performance Optimization'],
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="relative overflow-hidden bg-transparent py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#ff2626]/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#b30000]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-sm uppercase tracking-wider text-[#ff2626]">
            What We Do
          </h2>

          <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Services That{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h3>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            From modern websites to AI automation and scalable software, Front
            Row Tech builds digital solutions designed to help businesses grow
            smarter online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative h-full rounded-2xl bg-gradient-to-br from-[#ff2626]/30 via-white/5 to-[#b30000]/25 p-[1px] shadow-[0_0_25px_rgba(255,38,38,0.12)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-full min-h-[390px] rounded-2xl border border-[#ff2626]/20 bg-[#070914]/90 p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-[#ff2626]/50 group-hover:shadow-[0_0_35px_rgba(255,38,38,0.28)]">
                {/* Glass highlight */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                <div className="relative z-10 flex h-full flex-col">
                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff2626]/50 bg-[#140505]/90 shadow-[0_0_22px_rgba(255,38,38,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#ff4c4c]/70 group-hover:shadow-[0_0_35px_rgba(255,38,38,0.35)]">
                    <service.icon
                      className="text-[#ff3b3b]"
                      size={28}
                      strokeWidth={2.2}
                    />
                  </div>

                  <h4 className="mb-4 text-2xl font-bold text-white">
                    {service.title}
                  </h4>

                  <p className="mb-6 leading-relaxed text-gray-400">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-gray-300"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-[#ff3b3b]" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto flex items-center gap-2 pt-6 text-[#ff3b3b] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-sm font-medium">Learn More</span>

                    <svg
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
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