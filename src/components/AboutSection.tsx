import { motion, animate, useMotionValue, useTransform } from 'motion/react';
import { useEffect } from 'react';
import { useInView } from './hooks/useInView';
import { Zap, Target, Users, Rocket, Briefcase, UsersRound, Calendar, Network } from 'lucide-react';
import officeImage from '../assets/FrontRowTech.png';

function AnimatedNumber({ value, start }: { value: number; start: boolean }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (!start) return;

    const controls = animate(count, value, {
      duration: 1.4,
      ease: 'easeOut',
    });

    return controls.stop;
  }, [count, value, start]);

  return <motion.span>{rounded}</motion.span>;
}

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const stats = [
    { icon: Briefcase, label: 'Projects Delivered', value: 150 },
    { icon: UsersRound, label: 'Happy Clients', value: 80 },
    { icon: Calendar, label: 'Years Experience', value: 10 },
    { icon: Network, label: 'Team Members', value: 25 },
  ];

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
    <section
      id="about"
      ref={ref}
      className="relative pt-40 pb-24 lg:pt-44 lg:pb-32 bg-[#050714] overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* HEADER */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-[#ff2626] mb-4">
            Who We Are
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Digital Excellence,{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Delivered
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Front Row Tech combines creativity, engineering, and innovation to create digital solutions that help businesses grow.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <stat.icon className="text-[#ff2626] mx-auto mb-3 group-hover:scale-110 transition" size={26} />

              <div className="text-3xl md:text-4xl font-bold text-[#ff2626] mb-1">
                {isInView ? <AnimatedNumber value={stat.value} start={isInView} /> : 0}+
              </div>

              <div className="text-gray-400 text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* GLASS + IMAGE */}
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-stretch">
          
          {/* GLASS PANEL */}
          <motion.div
            className="h-[620px] rounded-[2rem] p-[1px] bg-gradient-to-br from-[#ff4c4c] via-[#ff2626] to-[#b30000] shadow-[0_0_35px_rgba(255,38,38,0.25)] hover:shadow-[0_0_60px_rgba(255,38,38,0.55)] transition-all duration-500"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full rounded-[2rem] bg-[#050714]/60 backdrop-blur-xl border border-white/10 p-8 flex flex-col justify-center">
              
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="group p-5 rounded-2xl bg-white/5 border border-[#ff2626]/30 hover:border-[#ff2626] hover:bg-[#ff2626]/10 hover:shadow-[0_0_30px_rgba(255,38,38,0.35)] transition-all duration-300"
                    whileHover={{ y: -6 }}
                  >
                    <div className="w-12 h-12 bg-[#ff2626]/15 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition">
                      <value.icon className="text-[#ff2626]" size={24} />
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2">
                      {value.title}
                    </h4>

                    <p className="text-sm text-gray-300">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>

            </div>
          </motion.div>

          {/* IMAGE - FULL VISIBLE */}
          <motion.div
            className="h-[620px] rounded-[2rem] p-[1px] bg-gradient-to-br from-[#ff4c4c] via-[#ff2626] to-[#b30000] shadow-[0_0_35px_rgba(255,38,38,0.25)] hover:shadow-[0_0_60px_rgba(255,38,38,0.55)] transition-all duration-500"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="h-full rounded-[2rem] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={officeImage}
                alt="Office setup"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}