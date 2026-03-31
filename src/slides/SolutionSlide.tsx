import { motion } from 'framer-motion';
import { Zap, Globe, Brain, TrendingUp, Shield } from 'lucide-react';

const solutions = [
  {
    icon: Globe,
    title: 'Unified Platform',
    description: 'News + Market + AI in one place',
  },
  {
    icon: Brain,
    title: 'AI Processing',
    description: 'Converts data to decisions instantly',
  },
  {
    icon: Zap,
    title: 'Real-Time Action',
    description: 'BUY/SELL/HOLD signals in seconds',
  },
];

const dashboardFeatures = [
  { label: 'Live Price', value: '$182.45', change: '+2.3%', positive: true },
  { label: 'Risk Score', value: 'LOW', color: 'green' },
  { label: 'Signal', value: 'BUY', color: 'green' },
  { label: 'Sentiment', value: 'Bullish', color: 'blue' },
];

export default function SolutionSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Zap className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">The Solution</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            One Platform, Complete Intelligence
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            MarketShield AI doesn't just show data — it <span className="text-cyan-400">tells you what it means</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative"
          >
            <div className="glass p-5 md:p-6 rounded-2xl border border-cyan-500/20 glow-cyan">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">AAPL</div>
                    <div className="text-white/50 text-sm">Apple Inc.</div>
                  </div>
                </div>
                <div className="glass px-3 py-1 rounded-full">
                  <span className="text-green-400 text-sm font-medium">● Live</span>
                </div>
              </div>

              {/* Dashboard Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {dashboardFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className={`p-3 rounded-lg ${
                      feature.color === 'green' ? 'bg-green-500/10 border border-green-500/30' :
                      feature.color === 'blue' ? 'bg-blue-500/10 border border-blue-500/30' :
                      'bg-white/5 border border-white/10'
                    }`}
                  >
                    <div className="text-white/50 text-xs mb-1">{feature.label}</div>
                    <div className={`text-lg font-bold ${
                      feature.color === 'green' ? 'text-green-400' :
                      feature.color === 'blue' ? 'text-blue-400' :
                      'text-white'
                    }`}>
                      {feature.value}
                      {feature.change && (
                        <span className="text-green-400 text-sm ml-2">{feature.change}</span>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mini Chart */}
              <div className="h-16 md:h-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg flex items-end p-2 gap-1">
                {[40, 55, 45, 70, 60, 80, 75, 90, 85, 95].map((height, i) => (
                  <motion.div
                    key={i}
                    className="flex-1 bg-cyan-400/60 rounded-t"
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                  />
                ))}
              </div>

              {/* Signal Badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="mt-4 flex justify-center"
              >
                <div className="bg-green-500/20 border border-green-500/50 px-6 py-2 rounded-full glow-green">
                  <span className="text-green-400 font-bold text-lg">BUY SIGNAL</span>
                </div>
              </motion.div>
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>

          {/* Right - Solution Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/30 flex-shrink-0"
                >
                  <solution.icon className="w-6 h-6 text-green-400" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{solution.title}</h3>
                  <p className="text-white/60">{solution.description}</p>
                </div>
              </motion.div>
            ))}

            {/* Key Benefit */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="glass p-5 rounded-xl border border-cyan-500/30 mt-8"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-cyan-400" />
                <div>
                  <div className="text-white font-medium">The Difference</div>
                  <div className="text-cyan-400 text-sm">From 10 apps → 1 decision in seconds</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
