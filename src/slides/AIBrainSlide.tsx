import { motion } from 'framer-motion';
import { Brain, MessageSquare, ShieldCheck, Calendar, TrendingUp, Cpu, Sparkles } from 'lucide-react';

const aiModules = [
  {
    icon: MessageSquare,
    title: 'Sentiment Analysis',
    description: 'FinBERT-powered emotion detection',
    color: 'blue',
    position: 'top',
  },
  {
    icon: ShieldCheck,
    title: 'Fake News Detection',
    description: 'Credibility scoring & validation',
    color: 'green',
    position: 'left',
  },
  {
    icon: Calendar,
    title: 'Event Detection',
    description: 'Earnings, mergers, lawsuits',
    color: 'purple',
    position: 'right',
  },
  {
    icon: TrendingUp,
    title: 'Risk Engine',
    description: 'Multi-factor risk scoring',
    color: 'orange',
    position: 'bottom-left',
  },
  {
    icon: Cpu,
    title: 'Signal Generator',
    description: 'BUY/SELL/HOLD decisions',
    color: 'cyan',
    position: 'bottom-right',
  },
];

export default function AIBrainSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Brain className="w-5 h-5 text-purple-400" />
            <span className="text-purple-400 font-medium">The Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            AI Brain
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Not prediction — <span className="text-purple-400">reasoning</span>
          </p>
        </motion.div>

        {/* AI Pipeline Visualization */}
        <div className="relative h-80 md:h-96 flex items-center justify-center">
          {/* Central Brain */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="relative z-20"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 flex items-center justify-center glow-blue">
              <Brain className="w-12 h-12 md:w-16 md:h-16 text-purple-400" />
            </div>
            
            {/* Rotating Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-purple-400/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ width: '140px', height: '140px', margin: '-10px', top: 0, left: 0 }}
            />
            
            {/* Pulse Effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-purple-500/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>

          {/* Connected Modules */}
          {aiModules.map((module, index) => {
            const positions: Record<string, { top: string; left: string }> = {
              'top': { top: '0%', left: '50%' },
              'left': { top: '35%', left: '8%' },
              'right': { top: '35%', left: '92%' },
              'bottom-left': { top: '80%', left: '20%' },
              'bottom-right': { top: '80%', left: '80%' },
            };
            const pos = positions[module.position];
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="absolute hidden md:block"
                style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
              >
                {/* Module Card */}
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className={`glass p-4 rounded-xl border border-${module.color}-500/30 min-w-[140px] text-center`}
                >
                  <div className={`w-10 h-10 mx-auto mb-2 rounded-lg bg-${module.color}-500/20 flex items-center justify-center`}>
                    <module.icon className={`w-5 h-5 text-${module.color}-400`} />
                  </div>
                  <h4 className="text-white font-medium text-sm">{module.title}</h4>
                  <p className="text-white/50 text-xs">{module.description}</p>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Mobile Modules Grid */}
          <div className="md:hidden absolute inset-0 grid grid-cols-2 gap-2 pt-40">
            {aiModules.slice(0, 4).map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`glass p-2 rounded-lg border border-${module.color}-500/30 text-center`}
              >
                <div className={`w-8 h-8 mx-auto mb-1 rounded-lg bg-${module.color}-500/20 flex items-center justify-center`}>
                  <module.icon className={`w-4 h-4 text-${module.color}-400`} />
                </div>
                <h4 className="text-white font-medium text-xs">{module.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-center mt-8"
        >
          <div className="glass inline-flex items-center gap-3 px-6 py-3 rounded-full">
            <Sparkles className="w-5 h-5 text-yellow-400" />
            <span className="text-white/80">
              "This is where intelligence happens — <span className="text-purple-400">multi-model reasoning</span>"
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
