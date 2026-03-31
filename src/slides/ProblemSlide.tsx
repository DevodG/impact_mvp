import { motion } from 'framer-motion';
import { AlertTriangle, Newspaper, MessageSquare, Brain, TrendingDown } from 'lucide-react';

const problems = [
  {
    icon: TrendingDown,
    title: 'Too Much Data, Zero Clarity',
    description: 'Investors are drowning in information but starving for insights',
    color: 'red',
  },
  {
    icon: Newspaper,
    title: 'Fake & Misleading News',
    description: 'False headlines spread faster than truth, causing panic selling',
    color: 'orange',
  },
  {
    icon: MessageSquare,
    title: 'Conflicting Advice Everywhere',
    description: 'Every expert says something different — who do you trust?',
    color: 'yellow',
  },
  {
    icon: Brain,
    title: 'Emotion-Driven Decisions',
    description: 'Fear and greed override logic, leading to costly mistakes',
    color: 'purple',
  },
];

const floatingPopups = [
  { text: 'BUY NOW!', x: '10%', y: '20%', delay: 0, color: 'green' },
  { text: 'SELL!', x: '85%', y: '15%', delay: 0.5, color: 'red' },
  { text: 'BREAKING!', x: '75%', y: '70%', delay: 1, color: 'orange' },
  { text: 'URGENT!', x: '5%', y: '75%', delay: 1.5, color: 'yellow' },
  { text: 'HOT TIP!', x: '90%', y: '50%', delay: 0.8, color: 'cyan' },
];

export default function ProblemSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      {/* Floating Popups */}
      {floatingPopups.map((popup, i) => (
        <motion.div
          key={i}
          className={`absolute glass px-4 py-2 rounded-lg border border-${popup.color}-500/30 hidden md:block`}
          style={{ left: popup.x, top: popup.y }}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1, 1, 0.8],
            y: [20, 0, 0, -20],
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            delay: popup.delay,
            times: [0, 0.2, 0.8, 1]
          }}
        >
          <span className={`text-${popup.color}-400 font-bold text-sm`}>{popup.text}</span>
        </motion.div>
      ))}

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            <span className="text-red-400 font-medium">The Problem</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            What Investors Face Today
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Investors don't lack data — they lack <span className="text-cyan-400">clarity and trust</span>
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass p-5 md:p-6 rounded-2xl border border-white/10 hover:border-red-500/30 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-${problem.color}-500/10 group-hover:bg-${problem.color}-500/20 transition-colors flex-shrink-0`}>
                  <problem.icon className={`w-7 h-7 md:w-8 md:h-8 text-${problem.color}-400`} />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-white/60 text-sm md:text-base">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 text-center"
        >
          <div className="glass inline-flex items-center gap-4 px-6 md:px-8 py-4 rounded-2xl">
            <div className="text-3xl md:text-4xl font-black text-red-400">73%</div>
            <div className="text-left">
              <div className="text-white font-medium text-sm md:text-base">of retail investors</div>
              <div className="text-white/60 text-xs md:text-sm">lose money due to emotional decisions</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
