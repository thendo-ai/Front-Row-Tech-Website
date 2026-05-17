import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  Award,
  Clock,
  TrendingUp,
  HeadphonesIcon,
  Shield,
  ArrowRight,
} from 'lucide-react';
import officeImage from '../assets/office_img.png';

export function WhyChooseSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const reasons = [
    {
      icon: Award,
      title: 'Modern Design Thinking',
      description:
        'We create solutions that are not just functional, but beautiful, intuitive, and ahead of the curve.',
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description:
        'On-time, on-budget project delivery with transparent communication every step of the way.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description:
        'Built to grow with your business. Our solutions are designed for long-term success and expansion.',
    },
    {
      icon: Shield,
      title: 'Business-Focused Technology',
      description:
        'Technology that serves your business goals, not the other way around. ROI-driven development.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description:
        "We don't disappear after launch. Continuous support, maintenance, and optimization.",
    },
  ];

  return (
    <section
      className="relative py-24 lg:py-32 bg-transparent overflow-hidden"
      ref={ref}
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-[#ff2626] mb-4">
              Why Choose Us
            </h2>

            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted{' '}
              <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
                Technology Partner
              </span>
            </h3>

            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Front Row Tech combines modern technology, strategic thinking and
              scalable digital solutions to help businesses grow with
              confidence.
            </p>

            {/* Reasons */}
            <div className="space-y-6 mb-10">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;

                return (
                  <motion.div
                    key={index}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                  >
                    {/* Icon Red Glass Box */}
                    <div className="flex-shrink-0 w-12 h-12 bg-[#140505]/90 backdrop-blur-md border border-[#ff2626]/50 rounded-lg flex items-center justify-center shadow-[0_0_18px_rgba(255,38,38,0.22)]">
                      <Icon className="text-[#ff3b3b]" size={24} strokeWidth={2.2} />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              whileTap={{ scale: 0.96 }}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,38,38,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,38,38,0.55)] sm:w-auto"
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src={officeImage}
                alt="Front Row Tech Team"
                className="w-full h-full object-cover"
              />

              {/* Red Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#ff2626]/20 to-[#b30000]/20" />
            </div>

            {/* Floating Stat 1 */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-[#ff4c4c] via-[#ff2626] to-[#b30000] rounded-2xl p-6 shadow-2xl shadow-[#ff2626]/40"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-white/80">Client Satisfaction</div>
            </motion.div>

            {/* Floating Stat 2 */}
            <motion.div
              className="absolute -top-6 -right-6 bg-white/[0.05] backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl"
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <div className="text-4xl font-bold text-white mb-1">99%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}