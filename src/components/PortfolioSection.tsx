import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PortfolioSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const projects = [
    {
      category: 'Web Development',
      title: 'Corporate Business Website',
      description: 'A premium corporate website for a leading consulting firm featuring modern design, CMS integration, and advanced SEO.',
      image: 'https://images.unsplash.com/photo-1762330464006-46181dfe3381?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdlYnNpdGUlMjBkZXNpZ258ZW58MXx8fHwxNzc1NzExMzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['React', 'Tailwind', 'CMS'],
    },
    {
      category: 'E-Commerce',
      title: 'E-Commerce Store',
      description: 'Full-featured online store with custom payment integration, inventory management, and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBvbmxpbmUlMjBzaG9wcGluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc3NTczODAxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Shopify', 'API', 'Analytics'],
    },
    {
      category: 'Automation',
      title: 'Workflow Automation Tool',
      description: 'Custom automation platform that streamlined business operations and reduced manual processing by 80%.',
      image: 'https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwcm9ib3RpY3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3NTczMjY5N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['Python', 'APIs', 'Cloud'],
    },
    {
      category: 'AI & Custom Solutions',
      title: 'AI-Driven Custom Application',
      description: 'Intelligent application leveraging machine learning to provide predictive insights and data-driven recommendations.',
      image: 'https://images.unsplash.com/photo-1770171323762-7b9a517a7094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJpc3RpY3xlbnwxfHx8fDE3NzU3MjE2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      tags: ['AI/ML', 'React', 'Python'],
    },
  ];

  return (
    <section id="work" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#050714] to-[#0A0E27]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-cyan-400 mb-4">Featured Work</h2>
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Projects We're <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Proud Of</span>
          </h3>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore how we've helped businesses transform their digital presence and achieve measurable results.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-cyan-400/30 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E27] via-[#0A0E27]/50 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 px-4 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 rounded-full text-cyan-400 text-sm">
                  {project.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h4>
                <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300 text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Link */}
                <button className="flex items-center gap-2 text-cyan-400 font-medium group-hover:gap-4 transition-all duration-300">
                  View Project
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <button className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300">
            View All Projects
          </button>
        </motion.div>
      </div>
    </section>
  );
}
