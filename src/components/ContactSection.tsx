import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactSection() {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@frontrowtech.co.za',
      href: 'mailto:info@frontrowtech.co.za'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+27 (0) 61 413 2858',
      href: 'tel:+27614132858',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Centurion, Gauteng\nSouth Africa',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-[#050714] overflow-hidden" ref={ref}>

      {/* 🔴 Background glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ff2626]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#b30000]/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm uppercase tracking-wider text-[#ff2626] mb-4">
            Get In Touch
          </h2>

          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Build Something{' '}
            <span className="bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] bg-clip-text text-transparent">
              Powerful
            </span>
          </h3>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to grow your business? Let’s talk about how we can build something that actually works for you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT - CONTACT INFO */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h4>

            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-white/[0.05] backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:border-[#ff2626]/40 transition-all duration-300">
                    <info.icon className="text-[#ff3b3b]" size={24} />
                  </div>

                  <div>
                    <div className="text-sm text-gray-400 mb-1">
                      {info.label}
                    </div>

                    <div className="text-lg text-white group-hover:text-[#ff3b3b] whitespace-pre-line transition-colors duration-300">
                      {info.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-2xl p-8">
              <h5 className="text-xl font-bold text-white mb-4">
                Business Hours
              </h5>

              <div className="space-y-2 text-gray-300">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 2:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT - FORM */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* INPUT STYLE REUSE */}
              {[
                { id: 'name', label: 'Full Name *', placeholder: 'John Doe', type: 'text', required: true },
                { id: 'email', label: 'Email Address *', placeholder: 'john@company.com', type: 'email', required: true },
                { id: 'company', label: 'Company', placeholder: 'Your Company', type: 'text' },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-sm text-gray-300 mb-2">
                    {field.label}
                  </label>

                  <input
                    {...register(field.id as keyof ContactFormData, field.required ? { required: `${field.label} is required` } : {})}
                    type={field.type}
                    className="w-full px-4 py-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ff2626]/50 focus:bg-white/[0.06] transition-all duration-300"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}

              {/* Message */}
              <div>
                <label className="block text-sm text-gray-300 mb-2">
                  Message *
                </label>

                <textarea
                  {...register('message', { required: 'Message is required' })}
                  rows={5}
                  className="w-full px-4 py-3 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ff2626]/50 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              {/* BUTTON */}
              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-[#ff4c4c] via-[#ff2626] to-[#b30000] text-white rounded-xl font-medium hover:shadow-[0_0_25px_rgba(255,38,38,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitted ? 'Message Sent!' : 'Send Message'}
                <Send size={18} />
              </motion.button>

              {/* SUCCESS */}
              {isSubmitted && (
                <motion.div
                  className="p-4 bg-[#ff2626]/10 border border-[#ff2626]/30 rounded-xl text-[#ff3b3b] text-center"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Thank you! We'll get back to you within 24 hours.
                </motion.div>
              )}

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}