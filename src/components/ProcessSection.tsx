import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Search, Palette, Code, Rocket } from 'lucide-react';

export function ProcessSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description:
        'We dive deep into your business goals, challenges, and vision to understand what success looks like for you.',
    },
    {
      icon: Palette,
      title: 'Design',
      description:
        'Our team crafts beautiful, intuitive user experiences that blend form and function seamlessly.',
    },
    {
      icon: Code,
      title: 'Build',
      description:
        'Clean, scalable code built with modern technologies and best practices for performance and reliability.',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description:
        'Smooth deployment and ongoing support to ensure your solution continues to deliver value over time.',
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#050714] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-[#ff2626] mb-4">
            Our Process
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            From Concept to{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Reality
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results through collaboration, innovation, and precision.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative h-full"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-[1px] bg-gradient-to-r from-[#ff2626]/40 to-transparent" />
              )}

              {/* OUTER GLASS BORDER */}
              <motion.div
                className="relative h-full rounded-2xl p-[1px] bg-white/10"
                whileHover={{ y: -10 }}
              >
                {/* GLASS CARD */}
                <div
                  className="relative h-full min-h-[330px]
                  bg-white/[0.02]
                  backdrop-blur-3xl
                  border border-white/10
                  rounded-2xl
                  p-8
                  flex flex-col
                  transition-all duration-300
                  hover:border-[#ff2626]/40
                  hover:shadow-[0_0_30px_rgba(255,38,38,0.2)]"
                >
                  {/* ✨ Subtle Glass Highlight Layer */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-[#ff4c4c] via-[#ff2626] to-[#b30000] rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-[#ff2626]/50">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 bg-white/[0.05] backdrop-blur-md rounded-xl flex items-center justify-center mb-6">
                    <step.icon className="text-[#ff2626]" size={30} />
                  </div>

                  {/* Content */}
                  <h4 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h4>

                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}