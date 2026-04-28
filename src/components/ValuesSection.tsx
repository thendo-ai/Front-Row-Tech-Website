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
      gradient: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Success is a team effort. We work closely with our clients as true partners in achieving shared goals.',
      gradient: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Handshake,
      title: 'Integrity',
      description: 'Transparent communication, honest advice, and ethical practices define how we do business every day.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'We measure our success by the tangible value we create for your business and the results we deliver.',
      gradient: 'from-green-400 to-emerald-500',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0E27] overflow-hidden" ref={ref}>
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Our Values</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Built on <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Principles</span>
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
              className="relative group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                {/* Gradient Accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${value.gradient} rounded-t-2xl`} />

                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
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
          <div className="bg-[#1A1A1A] border border-[#444444] rounded-2xl p-12">
            <svg className="w-12 h-12 text-[#E53935] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-2xl md:text-3xl text-white mb-6 leading-relaxed italic">
              We don't just build software. We build partnerships that drive lasting success.
            </p>
            <div className="font-medium text-[#E53935]">The Front Row Tech Team</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}