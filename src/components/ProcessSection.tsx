import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Search, Palette, Code, Rocket } from 'lucide-react';

export function ProcessSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const steps = [
    {
      icon: Search,
      title: 'Discover',
      description: 'We dive deep into your business goals, challenges, and vision to understand what success looks like for you.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Our team crafts beautiful, intuitive user experiences that blend form and function seamlessly.',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: Code,
      title: 'Build',
      description: 'Clean, scalable code built with modern technologies and best practices for performance and reliability.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Rocket,
      title: 'Launch & Support',
      description: 'Smooth deployment and ongoing support to ensure your solution continues to deliver value over time.',
      color: 'from-pink-500 to-cyan-400',
    },
  ];

  return (
    <section id="process" className="relative py-24 lg:py-32 bg-[#0A0E27]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Our Process</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            From Concept to <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Reality</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results through collaboration, innovation, and precision.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-cyan-400/30 to-transparent" />
              )}

              {/* Card */}
              <motion.div
                className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/50">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="text-white" size={32} />
                </div>

                {/* Content */}
                <h4 className="text-2xl font-bold text-white mb-3">{step.title}</h4>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}