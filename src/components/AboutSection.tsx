import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { Helmet } from 'react-helmet-async';

import officeImage from '../assets/FrontRowTech.png';

export function AboutSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  return (
     <>
      <Helmet>
        <title>
          Front Row Tech | Websites, Online Stores & Automation
        </title>

        <meta
          name="description"
          content="Front Row Tech builds websites, ecommerce stores, booking systems and business automation solutions for South African businesses."
        />

        <meta
          name="keywords"
          content="web design South Africa, ecommerce websites, booking systems, business automation"
        />

        <link
          rel="canonical"
          href="https://www.frontrowtech.co.za/"
        />
      </Helmet>


    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#050714] pt-24 pb-20 sm:pt-28 sm:pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Background glow */}
      <div className="absolute top-10 left-0 h-56 w-56 rounded-full bg-[#ff2626]/10 blur-3xl sm:h-72 sm:w-72" />
      <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-[#b30000]/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* IMAGE LEFT */}
          <motion.div
  className="order-2 rounded-[1.5rem] bg-[#ff2626]/70 p-[1px] shadow-[0_0_25px_rgba(255,38,38,0.25)] transition-all duration-500 hover:shadow-[0_0_45px_rgba(255,38,38,0.4)] sm:rounded-[2rem] lg:min-h-[560px]"
  initial={{ opacity: 0, x: 40 }}
  animate={isInView ? { opacity: 1, x: 0 } : {}}
  transition={{ duration: 0.7 }}
>
  <div className="overflow-hidden rounded-[1.5rem] bg-black sm:rounded-[2rem]">
    <img
      src={officeImage}
      alt="Modern technology workspace by Front Row Tech"
      className="h-auto w-full object-cover transition-transform duration-700 hover:scale-105 lg:h-full"
    />
  </div>
</motion.div>

          {/* TEXT RIGHT */}
          <motion.div
            className="order- text-left lg:order-2"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="mb-4 text-xs uppercase tracking-[0.25em] text-[#ff2626] sm:text-sm">
              Who We Are
            </h2>

            <h3 className="mb-6 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Technology{' '}
              <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
                Designed for Growth
              </span>
            </h3>

            <p className="mb-5 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              Front Row Tech combines strategy, design and technology to create
              modern digital experiences that help businesses grow, adapt and
              scale in a fast-moving digital world.
            </p>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-400 sm:text-lg">
              We believe technology should simplify operations, improve customer
              experiences and help businesses move faster online through
              websites, artificial intelligence, automation and scalable digital
              solutions designed for long-term growth.
            </p>

            <motion.a
              href="#contact"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] px-7 py-4 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,38,38,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,38,38,0.55)] sm:w-auto"
              whileTap={{ scale: 0.96 }}
              aria-label="Work with Front Row Tech"
            >
              Work With Us
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  </>
  );
}