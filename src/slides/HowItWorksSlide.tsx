import { motion } from 'framer-motion';
import { Search, Brain, ShieldCheck, ArrowRight, Database, Cpu } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Select Stock',
    description: 'Choose any stock, crypto, or commodity',
    color: 'blue',
    delay: 0,
  },
  {
    icon: Database,
    title: 'Fetch Data',
    description: 'Real-time market + news aggregation',
    color: 'cyan',
    delay: 0.3,
  },
  {
    icon: Cpu,
    title: 'AI Processing',
    description: 'Multi-model analysis pipeline',
    color: 'purple',
    delay: 0.6,
  },
  {
    icon: ShieldCheck,
    title: 'Get Signal',
    description: 'Risk score + BUY/SELL/HOLD decision',
    color: 'green',
    delay: 0.9,
  },
];

export default function HowItWorksSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <ArrowRight className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">The Process</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            In seconds, raw data becomes a <span className="text-cyan-400">decision</span>
          </p>
        </motion.div>

        {/* Pipeline Flow */}
        <div className="grid grid-cols-2 md:flex md:flex-row items-stretch md:items-center justify-center gap-4 md:gap-6">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Step Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: step.delay, duration: 0.5 }}
                className="relative w-full"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`glass p-5 md:p-6 rounded-2xl border border-${step.color}-500/30 w-full md:w-48 min-h-[160px] text-center relative overflow-hidden flex flex-col items-center justify-center`}
                >
                  {/* Glow Background */}
                  <div className={`absolute inset-0 bg-${step.color}-500/5`} />
                  
                  {/* Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: step.delay + 0.2, type: 'spring' }}
                    className={`relative w-14 h-14 md:w-16 md:h-16 mx-auto mb-4 rounded-xl bg-${step.color}-500/10 flex items-center justify-center`}
                  >
                    <step.icon className={`w-7 h-7 md:w-8 md:h-8 text-${step.color}-400`} />
                    
                    {/* Pulse Ring */}
                    <motion.div
                      className={`absolute inset-0 rounded-xl border-2 border-${step.color}-400/30`}
                      animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </motion.div>

                  {/* Content */}
                  <h3 className="relative text-base md:text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="relative text-white/60 text-sm">
                    {step.description}
                  </p>

                  {/* Step Number */}
                  <div className={`absolute top-3 left-3 w-6 h-6 rounded-full bg-${step.color}-500/20 flex items-center justify-center`}>
                    <span className={`text-${step.color}-400 text-xs font-bold`}>{index + 1}</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Arrow Connector */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: step.delay + 0.4 }}
                  className="hidden md:block"
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <ArrowRight className="w-6 h-6 text-cyan-400/50" />
                  </motion.div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Time Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="mt-12 text-center"
        >
          <div className="glass inline-flex items-center gap-4 px-8 py-4 rounded-2xl">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
              <Brain className="w-6 h-6 text-cyan-400" />
            </div>
            <div className="text-left">
              <div className="text-3xl font-black text-cyan-400">&lt; 3 seconds</div>
              <div className="text-white/60 text-sm">from query to decision</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="mt-8 flex justify-center gap-8"
        >
          {[
            { value: '50K+', label: 'Stocks Covered' },
            { value: '99.9%', label: 'Uptime' },
            { value: 'Real-Time', label: 'Data Updates' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-white/50 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
