import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Zap, Target, Users, Rocket } from 'lucide-react';

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We leverage cutting-edge technology to create solutions that give you a competitive edge.',
    },
    {
      icon: Target,
      title: 'Result Driven',
      description: 'Every solution is designed with clear objectives and measurable business outcomes.',
    },
    {
      icon: Users,
      title: 'Client Focused',
      description: 'Your success is our mission. We build lasting partnerships through trust and excellence.',
    },
    {
      icon: Rocket,
      title: 'Agile Delivery',
      description: 'Fast, iterative development that adapts to your needs and accelerates time to market.',
    },
  ];

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#050714] to-[#0A0E27]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital Excellence, <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Delivered</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Front Row Tech combines creativity, engineering, and innovation to create digital solutions that help businesses grow. We're not just developers—we're strategic partners invested in your success.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {[
            { label: 'Projects Delivered', value: '150+' },
            { label: 'Happy Clients', value: '80+' },
            { label: 'Years Experience', value: '10+' },
            { label: 'Team Members', value: '25+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Value Props */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-cyan-400" size={28} />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
              <p className="text-gray-400 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}