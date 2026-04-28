import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Lightbulb, Users, Handshake, TrendingUp } from 'lucide-react';

export function ValuesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and creative thinking to push boundaries and deliver cutting-edge solutions.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Success is a team effort. We work closely with our clients as true partners in achieving shared goals.',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Transparent communication, honest advice, and ethical practices define how we do business every day.',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'We measure our success by the tangible value we create for your business and the results we deliver.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#050714] overflow-hidden" ref={ref}>
      {/* Background Glow */}
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
            Our Values
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built on{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Principles
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our core values drive everything we do and shape the way we work with our clients and partners.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="relative group h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative h-full bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-[#ff2626]/40 hover:shadow-[0_0_30px_rgba(255,38,38,0.22)] transition-all duration-300 overflow-hidden">
                {/* Subtle Glass Highlight */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                {/* Red Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] rounded-t-2xl" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="text-[#ff3b3b]" size={32} />
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {value.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Section */}
        <motion.div
          className="mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-2xl p-12 hover:border-[#ff2626]/40 hover:shadow-[0_0_30px_rgba(255,38,38,0.18)] transition-all duration-300">
            <svg className="w-12 h-12 text-[#ff3b3b] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <p className="text-2xl md:text-3xl text-white mb-6 leading-relaxed italic">
              We don't just build software. We build partnerships that drive lasting success.
            </p>

            <div className="font-medium text-[#ff3b3b]">
              The Front Row Tech Team
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}