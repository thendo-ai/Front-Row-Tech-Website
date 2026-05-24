import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';

import {
  Atom,
  Code2,
  FileCode2,
  Braces,
  ServerCog,
  Database,
  Bot,
  Workflow,
  Cloud,
  Container,
  Github,
  ShoppingCart,
  CreditCard,
  BarChart3,
  Gauge,
  SearchCheck,
  ShieldCheck,
  Bug,
  TestTube2,
  LineChart,
  Flame,
  Boxes,
  Globe,
  Layers,
  Zap,
} from 'lucide-react';
import { useInView } from './hooks/useInView';

const techStack = [
  { name: 'React', icon: Atom },
  { name: 'Next.js', icon: Layers },
  { name: 'TypeScript', icon: FileCode2 },
  { name: 'JavaScript', icon: Braces },
  { name: 'Tailwind CSS', icon: Zap },
  { name: 'HTML5', icon: Code2 },
  { name: 'CSS3', icon: FileCode2 },
  { name: 'Node.js', icon: ServerCog },
  { name: 'Express.js', icon: ServerCog },
  { name: 'Python', icon: Code2 },
  { name: 'Flask', icon: Flame },
  { name: 'REST APIs', icon: Braces },
  { name: 'OpenAI', icon: Bot },
  { name: 'AI Chatbots', icon: Bot },
  { name: 'Workflow Automation', icon: Workflow },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Firebase', icon: Flame },
  { name: 'SQLite', icon: Database },
  { name: 'AWS', icon: Cloud },
  { name: 'Vercel', icon: Globe },
  { name: 'Netlify', icon: Globe },
  { name: 'Docker', icon: Container },
  { name: 'GitHub Actions', icon: Github },
  { name: 'Shopify', icon: ShoppingCart },
  { name: 'WooCommerce', icon: ShoppingCart },
  { name: 'Payment Gateways', icon: CreditCard },
  { name: 'Google Analytics', icon: BarChart3 },
  { name: 'Google Tag Manager', icon: LineChart },
  { name: 'Core Web Vitals', icon: Gauge },
  { name: 'Looker Studio', icon: BarChart3 },
  { name: 'API Testing', icon: TestTube2 },
  { name: 'Automation Testing', icon: ShieldCheck },
];

const capabilities = [
  {
    title: 'Frontend Development',
    icon: Code2,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3'],
  },
  {
    title: 'Backend & APIs',
    icon: ServerCog,
    items: ['Node.js', 'Express.js', 'Python', 'Flask', 'REST APIs', 'Authentication'],
  },
  {
    title: 'AI & Automation',
    icon: Bot,
    items: ['OpenAI', 'AI Chatbots', 'Workflow Automation', 'AI Assistants', 'Smart Integrations'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'SQLite'],
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    items: ['AWS', 'Vercel', 'Netlify', 'Firebase Hosting', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'E-Commerce Systems',
    icon: ShoppingCart,
    items: ['Shopify', 'WooCommerce', 'Payment Gateways', 'Inventory Systems', 'Analytics Tracking'],
  },
  {
    title: 'SEO & Analytics',
    icon: SearchCheck,
    items: ['Technical SEO', 'Google Analytics', 'Google Tag Manager', 'Core Web Vitals', 'Looker Studio'],
  },
  {
    title: 'Testing & QA',
    icon: Bug,
    items: ['Manual Testing', 'API Testing', 'Automation Testing', 'Bug Reporting', 'Performance Testing'],
  },
];

export function TechnologiesSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const repeatedStack = [...techStack, ...techStack];

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
      id="technologies"
      ref={ref}
      className="relative overflow-hidden bg-transparent py-24 lg:py-32"
    >
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#ff2626]/10 blur-3xl" />
      <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#b30000]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-sm uppercase tracking-wider text-[#ff2626]">
            Technologies & Capabilities
          </h2>

          <h3 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Technology Stack Built for{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Growth
            </span>
          </h3>

          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-400">
            We use modern frameworks, cloud tools, AI systems and automation technologies
            to build fast, scalable and reliable digital solutions for growing businesses.
          </p>
        </motion.div>

        {/* Auto-scrolling tech stack */}
        <div className="relative mb-16 overflow-hidden rounded-2xl border border-[#ff2626]/20 bg-white/[0.025] py-5 backdrop-blur-xl">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#050714] to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#050714] to-transparent" />

          <motion.div
            className="flex w-max gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 35,
              ease: 'linear',
              repeat: Infinity,
            }}
          >
            {repeatedStack.map((tech, index) => {
              const Icon = tech.icon;

              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="flex items-center gap-3 rounded-full border border-[#ff2626]/25 bg-[#140505]/70 px-5 py-3 text-sm text-gray-200 shadow-[0_0_18px_rgba(255,38,38,0.12)]"
                >
                  <Icon className="h-4 w-4 text-[#ff3b3b]" strokeWidth={2.2} />
                  <span className="whitespace-nowrap">{tech.name}</span>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Capability carousel */}
        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 scrollbar-hide">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                className="group min-w-[85%] snap-center rounded-2xl bg-gradient-to-br from-[#ff2626]/30 via-white/5 to-[#b30000]/25 p-[1px] shadow-[0_0_25px_rgba(255,38,38,0.12)] sm:min-w-[48%] lg:min-w-[31.5%]"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.08 * index }}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-full min-h-[340px] rounded-2xl border border-[#ff2626]/20 bg-[#070914]/90 p-8 backdrop-blur-xl transition-all duration-300 group-hover:border-[#ff2626]/50 group-hover:shadow-[0_0_35px_rgba(255,38,38,0.28)]">
                  <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                  <div className="relative z-10">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#ff2626]/50 bg-[#140505]/90 shadow-[0_0_22px_rgba(255,38,38,0.22)] backdrop-blur-xl transition-all duration-300 group-hover:border-[#ff4c4c]/70 group-hover:shadow-[0_0_35px_rgba(255,38,38,0.35)]">
                      <Icon className="h-7 w-7 text-[#ff3b3b]" strokeWidth={2.2} />
                    </div>

                    <h4 className="mb-5 text-2xl font-bold text-white">
                      {capability.title}
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {capability.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[#ff2626]/20 bg-white/[0.03] px-3 py-2 text-sm text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          We choose technologies based on performance, scalability and long-term business
          value — ensuring every solution is secure, maintainable and built for growth.
        </motion.p>
      </div>
    </section>
    </>
  );
}