import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code, Database, Cloud, Cpu, ShoppingBag, BarChart3, Bot, Zap } from 'lucide-react';

export function TechnologiesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const capabilities = [
    {
      icon: Code,
      title: 'Web Applications',
      description: 'Modern, responsive web apps built with React, Next.js, and cutting-edge frameworks.',
    },
    {
      icon: Database,
      title: 'APIs',
      description: 'RESTful and GraphQL APIs designed for performance, security, and scalability.',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Intelligent workflow automation that eliminates repetitive tasks and boosts efficiency.',
    },
    {
      icon: Cloud,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure on AWS, Azure, and Google Cloud Platform.',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Systems',
      description: 'Full-featured online stores with secure payments and inventory management.',
    },
    {
      icon: BarChart3,
      title: 'Dashboards',
      description: 'Data visualization and analytics dashboards for real-time business insights.',
    },
    {
      icon: Bot,
      title: 'AI Tools',
      description: 'Machine learning and AI-powered applications for intelligent automation.',
    },
    {
      icon: Cpu,
      title: 'Integrations',
      description: 'Seamless third-party integrations connecting all your essential business tools.',
    },
  ];

  const techStack = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL',
    'MongoDB', 'AWS', 'Docker', 'Kubernetes', 'TailwindCSS', 'GraphQL',
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-b from-[#050714] to-[#0A0E27]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Technologies & Capabilities</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powered by <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Modern Tech</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We leverage the latest technologies and best practices to build solutions that are fast, secure, and built to last.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((capability, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300 group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * index }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <capability.icon className="text-cyan-400" size={28} />
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{capability.title}</h4>
              <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-2xl font-bold text-white text-center mb-8 text-[#980404]">Our Tech Stack</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-cyan-500/10 hover:border-cyan-400/30 hover:text-cyan-400 transition-all duration-300 text-[#fffefe]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.02 * index }}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
