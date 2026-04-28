import { motion, useScroll, useTransform } from 'motion/react';
import { useInView } from './hooks/useInView';
import {
  Code,
  Database,
  Cloud,
  Cpu,
  ShoppingBag,
  BarChart3,
  Bot,
  Zap,
  Globe,
  Bug,
  Server,
  Workflow,
} from 'lucide-react';

function FloatingCapabilityCard({
  capability,
  index,
  isInView,
}: {
  capability: {
    icon: React.ElementType;
    title: string;
    description: string;
  };
  index: number;
  isInView: boolean;
}) {
  const { scrollY } = useScroll();
  const floatY = useTransform(
    scrollY,
    [0, 1000],
    [0, index % 2 === 0 ? -20 : 20]
  );

  return (
    <motion.div
      style={{ y: floatY }}
      className="bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-[#ff2626]/40 hover:shadow-[0_0_25px_rgba(255,38,38,0.22)] transition-all duration-300 group"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.4, delay: 0.05 * index }}
      whileHover={{ y: -8 }}
    >
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4 + index * 0.3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className="w-14 h-14 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <capability.icon className="text-[#ff3b3b]" size={28} />
        </div>

        <h4 className="text-lg font-bold text-white mb-2">
          {capability.title}
        </h4>

        <p className="text-gray-400 text-sm leading-relaxed">
          {capability.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export function TechnologiesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const capabilities = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Modern, responsive websites and web apps for businesses that need a strong online presence.',
    },
    {
      icon: ShoppingBag,
      title: 'E-Commerce Systems',
      description: 'Online stores with secure payments, product management, and mobile-friendly shopping experiences.',
    },
    {
      icon: Workflow,
      title: 'Automation',
      description: 'Smart workflows that reduce admin, save time, and help your team work more efficiently.',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'AI-powered tools, chatbots, and insights that help businesses work smarter and faster.',
    },
    {
      icon: Bug,
      title: 'Software Testing',
      description: 'Manual, automated, API, and usability testing to make sure your platforms work properly.',
    },
    {
      icon: BarChart3,
      title: 'Dashboards',
      description: 'Business dashboards for tracking leads, sales, customer activity, and performance data.',
    },
    {
      icon: Database,
      title: 'APIs & Databases',
      description: 'Reliable APIs and databases designed for secure, scalable, and connected digital systems.',
    },
    {
      icon: Cloud,
      title: 'Cloud & Hosting',
      description: 'Scalable hosting, deployment, and cloud infrastructure to keep your systems running smoothly.',
    },
  ];

  const techStack = [
    { icon: Code, name: 'React' },
    { icon: Code, name: 'Next.js' },
    { icon: Code, name: 'TypeScript' },
    { icon: Server, name: 'Node.js' },
    { icon: Code, name: 'Python' },
    { icon: Database, name: 'PostgreSQL' },
    { icon: Database, name: 'MongoDB' },
    { icon: Cloud, name: 'AWS' },
    { icon: Cpu, name: 'Docker' },
    { icon: Workflow, name: 'APIs' },
    { icon: Bug, name: 'Testing' },
    { icon: Bot, name: 'AI Tools' },
  ];

  return (
    <section
      ref={ref}
      className="relative py-24 lg:py-32 bg-[#050714] overflow-hidden"
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
            Technologies & Capabilities
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Powered by{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Modern Tech
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We use practical, modern technology to build websites, systems, automation, AI tools, and testing solutions that help businesses grow.
          </p>
        </motion.div>

        {/* Capabilities Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {capabilities.map((capability, index) => (
            <FloatingCapabilityCard
              key={index}
              capability={capability}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4 className="text-2xl font-bold text-white text-center mb-8">
            Our Tech Stack
          </h4>

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="group flex items-center gap-2 px-5 py-3 bg-white/[0.025] backdrop-blur-xl border border-white/10 rounded-full text-white hover:bg-[#ff2626]/10 hover:border-[#ff2626]/40 hover:text-[#ff3b3b] hover:shadow-[0_0_20px_rgba(255,38,38,0.22)] transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.02 * index }}
                whileHover={{ scale: 1.08, y: -3 }}
              >
                <tech.icon
                  className="text-[#ff3b3b] group-hover:scale-110 transition-transform duration-300"
                  size={18}
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}