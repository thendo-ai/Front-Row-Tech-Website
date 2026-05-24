import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Helmet } from 'react-helmet-async';

import businessWebsite from '../assets/sa-business-website.png';
import ecommerceStore from '../assets/sa-ecommerce-store.png';
import bookingSystem from '../assets/sa-booking-system.png';
import aiDashboard from '../assets/sa-ai-dashboard.png';

export function PortfolioSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      category: 'Business Website',
      title: 'Service Business Website',
      description:
        'Professional website built for local service businesses that need more enquiries and stronger online credibility.',
      image: businessWebsite,
      tags: ['Local SEO', 'Lead Forms', 'WhatsApp'],
    },
    {
      category: 'E-Commerce',
      title: 'Online Store for Local Retail',
      description:
        'A modern online shop for retailers selling products and managing payments online.',
      image: ecommerceStore,
      tags: ['PayFast', 'Stock Control', 'Mobile Friendly'],
    },
    {
      category: 'Automation',
      title: 'Booking & Admin System',
      description:
        'Custom workflow system for bookings, invoices, and client management.',
      image: bookingSystem,
      tags: ['Bookings', 'Admin Tools', 'Automation'],
    },
    {
      category: 'AI & Data',
      title: 'Business Insights Dashboard',
      description:
        'Smart dashboard for tracking leads, sales, and marketing performance.',
      image: aiDashboard,
      tags: ['AI Insights', 'Reports', 'Sales Data'],
    },
  ];

  const categories = ['All', ...new Set(projects.map((project) => project.category))];

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'All') return projects;

    return projects.filter(
      (project) => project.category === selectedCategory
    );
  }, [selectedCategory]);

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  const hasMore = visibleCount < filteredProjects.length;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleCount(3);
  };

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
      id="work"
      className="relative overflow-hidden bg-transparent py-20 lg:py-28"
      ref={ref}
    >
      {/* Background glow */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#ff2626]/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#b30000]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="mx-auto mb-10 max-w-4xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-sm uppercase tracking-wider text-[#ff2626]">
            Featured Work
          </h2>

          <h3 className="mb-5 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
            Digital Tools for{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Growing SA Businesses
            </span>
          </h3>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-gray-400">
            Practical websites, systems, and automation built for South African
            business owners who want more enquiries, smoother operations, and
            stronger growth.
          </p>
        </motion.div>

        {/* Filter */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <div className="relative w-full max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full appearance-none rounded-full border border-[#ff2626]/25 bg-[#090b18]/90 px-5 py-3 pr-12 text-sm font-medium text-white outline-none backdrop-blur-xl transition-all duration-300 hover:border-[#ff2626]/50 focus:border-[#ff2626]/70"
            >
              {categories.map((category) => (
                <option
                  key={category}
                  value={category}
                  className="bg-[#050714]"
                >
                  {category}
                </option>
              ))}
            </select>

            <ChevronDown className="pointer-events-none absolute top-1/2 right-5 h-4 w-4 -translate-y-1/2 text-[#ff3b3b]" />
          </div>
        </motion.div>

        {/* Smaller Project Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${selectedCategory}`}
              className="group relative overflow-hidden rounded-2xl border border-[#ff2626]/20 bg-white/[0.025] backdrop-blur-xl transition-all duration-500 hover:border-[#ff2626]/45 hover:shadow-[0_0_25px_rgba(255,38,38,0.18)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.08 * index,
              }}
              whileHover={{ y: -6 }}
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050714] via-[#050714]/50 to-transparent" />

                <div className="absolute top-3 left-3 rounded-full border border-[#ff2626]/40 bg-[#ff2626]/15 px-3 py-1 text-xs text-[#ff3b3b] backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h4 className="mb-2 text-xl font-bold text-white transition-colors duration-300 group-hover:text-[#ff3b3b]">
                  {project.title}
                </h4>

                <p className="mb-4 text-sm leading-relaxed text-gray-400">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#ff2626]/20 bg-white/[0.03] px-2.5 py-1 text-[11px] text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="flex items-center gap-2 text-sm font-medium text-[#ff3b3b] transition-all duration-300 group-hover:gap-3">
                  View Project
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {hasMore && (
            <button
              onClick={() => setVisibleCount((count) => count + 3)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-[#ff2626]/50 hover:bg-white/[0.06] hover:shadow-[0_0_25px_rgba(255,38,38,0.22)]"
            >
              Load More
            </button>
          )}

          <a
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] px-7 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(255,38,38,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,38,38,0.55)]"
          >
            Start a Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
    </>
  );
}