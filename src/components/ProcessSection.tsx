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
      className="relative overflow-hidden bg-transparent py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#ff2626]/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#b30000]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-sm uppercase tracking-wider text-[#ff2626]">
            Our Process
          </h2>

          <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            From Concept to{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Reality
            </span>
          </h3>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            From strategy and design to development and launch, our process is
            built to create scalable digital experiences that drive real
            business growth.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid items-stretch gap-8 md:grid-cols-2 lg:grid-cols-4">
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
                <div className="absolute top-16 left-1/2 hidden h-[1px] w-full bg-gradient-to-r from-[#ff2626]/40 to-transparent lg:block" />
              )}

              {/* OUTER GLASS BORDER */}
              <motion.div
                className="group relative h-full rounded-2xl bg-gradient-to-br from-[#ff2626]/30 via-white/5 to-[#b30000]/25 p-[1px] shadow-[0_0_25px_rgba(255,38,38,0.12)]"
                whileHover={{ y: -10 }}
              >
                {/* GLASS CARD */}
                <div
                  className="relative flex h-full min-h-[330px] flex-col rounded-2xl border border-[#ff2626]/20 bg-[#070914]/90 p-8 backdrop-blur-3xl transition-all duration-300 hover:border-[#ff2626]/50 hover:shadow-[0_0_35px_rgba(255,38,38,0.28)]"
                >
                  {/* Glass Highlight */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#ff4c4c] via-[#ff2626] to-[#b30000] font-bold text-white shadow-lg shadow-[#ff2626]/50">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff2626]/50 bg-[#140505]/90 shadow-[0_0_22px_rgba(255,38,38,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#ff4c4c]/70 group-hover:shadow-[0_0_35px_rgba(255,38,38,0.35)]">
                    <step.icon
                      className="text-[#ff3b3b]"
                      size={28}
                      strokeWidth={2.2}
                    />
                  </div>

                  {/* Content */}
                  <h4 className="mb-3 text-2xl font-bold text-white">
                    {step.title}
                  </h4>

                  <p className="leading-relaxed text-gray-400">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}

          <motion.div
  className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {/* Primary CTA */}
  <motion.a
    href="#contact"
    whileTap={{ scale: 0.96 }}
className="flex min-w-[180px] items-center justify-center rounded-xl border border-[#ff2626]/20 bg-white/[0.03] px-5 py-3 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#ff2626]/40 hover:bg-[#ff2626]/10 hover:text-white"  >
    Work With Us

    <svg
      className="h-4 w-7 transition-transform duration-300 group-hover:translate-x-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  </motion.a>

  
</motion.div>
        </div>
      </div>
    </section>
  );
}