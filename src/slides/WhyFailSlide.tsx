import { motion } from 'framer-motion';
import { X, LayoutGrid, ShieldAlert, HelpCircle } from 'lucide-react';

const failures = [
  {
    icon: LayoutGrid,
    title: 'Disconnected Tools',
    description: 'Charts, news, and analysis live in separate apps',
    visual: 'messy',
  },
  {
    icon: ShieldAlert,
    title: 'No Credibility Check',
    description: 'No validation of news sources or claims',
    visual: 'warning',
  },
  {
    icon: HelpCircle,
    title: 'No Clear Output',
    description: 'Information without actionable decisions',
    visual: 'question',
  },
];

export default function WhyFailSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <X className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 font-medium">The Gap</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Current Tools Fail
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Tools show information — they don't <span className="text-cyan-400">guide decisions</span>
          </p>
        </motion.div>

        {/* Split Screen Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left - Messy Apps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-5 md:p-6 rounded-2xl border border-red-500/20"
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-4 h-4 text-red-400" />
              </span>
              Current Experience
            </h3>
            
            <div className="relative h-48 md:h-64">
              {/* Overlapping App Windows */}
              {[
                { color: 'bg-blue-500/20', rotate: -5, x: 0, y: 0, title: 'TradingView' },
                { color: 'bg-green-500/20', rotate: 3, x: 40, y: 30, title: 'News App' },
                { color: 'bg-purple-500/20', rotate: -2, x: 80, y: 60, title: 'Analysis Tool' },
                { color: 'bg-orange-500/20', rotate: 4, x: 20, y: 90, title: 'Portfolio' },
              ].map((app, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-28 h-16 md:w-40 md:h-24 ${app.color} rounded-lg border border-white/10 flex items-center justify-center`}
                  style={{ 
                    left: `${app.x}px`, 
                    top: `${app.y}px`,
                    rotate: `${app.rotate}deg`
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                >
                  <span className="text-white/60 text-xs md:text-sm font-medium">{app.title}</span>
                </motion.div>
              ))}
              
              {/* Chaos Indicator */}
              <motion.div
                className="absolute bottom-0 right-0 glass px-3 py-1 rounded-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <span className="text-red-400 text-xs font-bold">CHAOS</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Failure Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-4"
          >
            {failures.map((failure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                whileHover={{ scale: 1.02, x: -5 }}
                className="glass p-4 md:p-5 rounded-xl border border-white/10 hover:border-orange-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 flex-shrink-0">
                    <failure.icon className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold text-white">{failure.title}</h4>
                    <p className="text-white/60 text-sm">{failure.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Result Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="glass p-4 rounded-xl border border-red-500/30 bg-red-500/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                  <HelpCircle className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-white font-medium">The Result?</div>
                  <div className="text-red-400 text-sm">Confusion, missed opportunities, and losses</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
