import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Award, Clock, TrendingUp, HeadphonesIcon, Shield } from 'lucide-react';

export function WhyChooseSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const reasons = [
    {
      icon: Award,
      title: 'Modern Design Thinking',
      description: 'We create solutions that are not just functional, but beautiful, intuitive, and ahead of the curve.',
    },
    {
      icon: Clock,
      title: 'Reliable Delivery',
      description: 'On-time, on-budget project delivery with transparent communication every step of the way.',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Solutions',
      description: 'Built to grow with your business. Our solutions are designed for long-term success and expansion.',
    },
    {
      icon: Shield,
      title: 'Business-Focused Technology',
      description: 'Technology that serves your business goals, not the other way around. ROI-driven development.',
    },
    {
      icon: HeadphonesIcon,
      title: 'Ongoing Support',
      description: 'We don\'t disappear after launch. Continuous support, maintenance, and optimization.',
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#0A0E27]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Why Choose Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Your Trusted <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Technology Partner</span>
            </h3>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              We combine technical excellence with business insight to deliver solutions that make a real impact. Here's what sets us apart.
            </p>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <reason.icon className="text-cyan-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{reason.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://frontrowtech.co.za/new/office_img.png"
                alt="Front Row Tech Team"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20" />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-2xl shadow-cyan-500/50"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <div className="text-4xl font-bold text-white mb-1">98%</div>
              <div className="text-cyan-100">Client Satisfaction</div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            >
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-300">On-Time Delivery</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
