import { motion } from 'framer-motion';
import { Rocket, Briefcase, Bell, Link2, Bitcoin, TrendingUp, Sparkles } from 'lucide-react';

const futureFeatures = [
  {
    icon: Briefcase,
    title: 'Portfolio Recommendations',
    description: 'AI-curated portfolios based on risk profile',
    timeline: 'Q2 2026',
    color: 'blue',
  },
  {
    icon: Bell,
    title: 'Real-Time Alerts',
    description: 'Instant notifications for signal changes',
    timeline: 'Q2 2026',
    color: 'cyan',
  },
  {
    icon: Link2,
    title: 'Trading Integration',
    description: 'Execute trades directly from signals',
    timeline: 'Q3 2026',
    color: 'green',
  },
  {
    icon: Bitcoin,
    title: 'Crypto Expansion',
    description: 'Full DeFi and altcoin coverage',
    timeline: 'Q3 2026',
    color: 'purple',
  },
];

export default function FutureSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Rocket className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">Future</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What's Next
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            This is just <span className="text-purple-400">version 1</span>
          </p>
        </motion.div>

        {/* Roadmap */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent" />

          {/* Features */}
          <div className="space-y-6">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.15 }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-4 md:gap-8`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`glass p-4 md:p-5 rounded-2xl border border-${feature.color}-500/20 inline-block w-full md:w-auto`}
                  >
                    <div className={`inline-block px-2 py-0.5 rounded-full bg-${feature.color}-500/20 mb-3`}>
                      <span className={`text-${feature.color}-400 text-xs font-medium`}>{feature.timeline}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-semibold text-white mb-1">{feature.title}</h3>
                    <p className="text-white/60 text-sm">{feature.description}</p>
                  </motion.div>
                </div>

                {/* Timeline Node */}
                <div className="hidden md:block relative z-10 flex-shrink-0">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 md:w-14 md:h-14 rounded-full bg-${feature.color}-500/20 border-2 border-${feature.color}-500/50 flex items-center justify-center`}
                  >
                    <feature.icon className={`w-5 h-5 md:w-6 md:h-6 text-${feature.color}-400`} />
                  </motion.div>
                  
                  {/* Pulse Ring */}
                  <motion.div
                    className={`absolute inset-0 rounded-full border-2 border-${feature.color}-400/30`}
                    animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Spacer */}
                <div className="hidden md:block flex-1" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 text-center"
        >
          <div className="glass inline-flex items-center gap-4 px-6 md:px-8 py-4 rounded-2xl border border-purple-500/30">
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-purple-400" />
            <div className="text-left">
              <div className="text-white font-medium text-sm md:text-base">Our Vision</div>
              <div className="text-white/60 text-xs md:text-sm">Become the Bloomberg Terminal for retail investors</div>
            </div>
            <TrendingUp className="w-5 h-5 md:w-6 md:h-6 text-green-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
