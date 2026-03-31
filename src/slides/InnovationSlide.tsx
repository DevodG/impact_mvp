import { motion } from 'framer-motion';
import { Lightbulb, Eye, GitMerge, Workflow, Quote, Sparkles } from 'lucide-react';

const innovations = [
  {
    icon: GitMerge,
    title: 'Sentiment + Credibility Combined',
    description: 'First platform to merge emotional analysis with source validation',
    color: 'purple',
  },
  {
    icon: Eye,
    title: 'Explainable AI',
    description: 'Not a black box — every decision shows its reasoning',
    color: 'cyan',
  },
  {
    icon: Workflow,
    title: 'End-to-End Pipeline',
    description: 'From raw data to actionable signal in one seamless flow',
    color: 'green',
  },
];

export default function InnovationSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            <span className="text-yellow-400 font-medium">Innovation</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Makes Us Different
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            That's what <span className="text-yellow-400">wins hackathons</span>
          </p>
        </motion.div>

        {/* Innovation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {innovations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`glass p-5 md:p-6 rounded-2xl border border-${item.color}-500/30 relative overflow-hidden group`}
            >
              {/* Glow */}
              <div className={`absolute -top-10 -right-10 w-24 md:w-32 h-24 md:h-32 bg-${item.color}-500/20 rounded-full blur-3xl group-hover:bg-${item.color}-500/30 transition-colors`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-${item.color}-500/10 flex items-center justify-center mb-3 md:mb-4`}
              >
                <item.icon className={`w-6 h-6 md:w-7 md:h-7 text-${item.color}-400`} />
              </motion.div>

              {/* Content */}
              <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">
                {item.title}
              </h3>
              <p className="text-white/60 text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Hero Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="relative"
        >
          <div className="glass p-6 md:p-8 rounded-2xl md:rounded-3xl border border-cyan-500/30 text-center relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10" />
            
            {/* Quote Icon */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-4 left-4 md:left-8"
            >
              <Quote className="w-8 h-8 md:w-12 md:h-12 text-cyan-400/20" />
            </motion.div>

            {/* Main Quote */}
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 mx-auto mb-3 md:mb-4" />
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 md:mb-4"
              >
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  We don't just predict.
                </span>
              </motion.h3>
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.3 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black"
              >
                <span className="text-white">We </span>
                <span className="text-cyan-400">explain.</span>
              </motion.h3>
            </div>

            {/* Bottom Sparkle */}
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute bottom-4 right-4 md:right-8"
            >
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-purple-400/40" />
            </motion.div>
          </div>

          {/* Outer Glow */}
          <div className="absolute -inset-2 bg-cyan-500/10 rounded-2xl md:rounded-3xl blur-2xl -z-10" />
        </motion.div>
      </div>
    </div>
  );
}
