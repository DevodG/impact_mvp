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
        <div className="relative flex items-center justify-center mb-6">
          {/* Desktop: radial layout */}
          <div className="hidden md:block relative h-96 w-full">
            {/* Central Brain */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 flex items-center justify-center glow-blue">
                <Brain className="w-16 h-16 text-purple-400" />
              </div>
              <motion.div
                className="absolute rounded-full border border-dashed border-purple-400/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{ width: '150px', height: '150px', top: '-9px', left: '-9px' }}
              />
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
                  className="absolute"
                  style={{ top: pos.top, left: pos.left, transform: 'translate(-50%, -50%)' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className={`glass p-4 rounded-xl border border-${module.color}-500/30 w-36 text-center`}
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
          </div>

          {/* Mobile: central brain + grid below */}
          <div className="md:hidden w-full flex flex-col items-center gap-4">
            {/* Central Brain */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="relative"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border-2 border-purple-500/50 flex items-center justify-center glow-blue">
                <Brain className="w-10 h-10 text-purple-400" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-full bg-purple-500/20"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>

            {/* All 5 modules in even 2+2+1 grid */}
            <div className="w-full grid grid-cols-2 gap-3">
              {aiModules.slice(0, 4).map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className={`glass p-3 rounded-xl border border-${module.color}-500/30 flex items-center gap-3`}
                >
                  <div className={`w-9 h-9 rounded-lg bg-${module.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                    <module.icon className={`w-4 h-4 text-${module.color}-400`} />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-xs">{module.title}</h4>
                    <p className="text-white/50 text-xs leading-tight">{module.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* 5th module centered */}
            {(() => {
              const last = aiModules[4];
              const LastIcon = last.icon;
              return (
                <div className="w-full flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                    className={`glass p-3 rounded-xl border border-${last.color}-500/30 flex items-center gap-3 w-1/2`}
                  >
                    <div className={`w-9 h-9 rounded-lg bg-${last.color}-500/20 flex items-center justify-center flex-shrink-0`}>
                      <LastIcon className={`w-4 h-4 text-${last.color}-400`} />
                    </div>
                    <div>
                      <h4 className="text-white font-medium text-xs">{last.title}</h4>
                      <p className="text-white/50 text-xs leading-tight">{last.description}</p>
                    </div>
                  </motion.div>
                </div>
              );
            })()}
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
