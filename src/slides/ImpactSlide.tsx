import { motion } from 'framer-motion';
import { Globe, Users, ShieldCheck, TrendingUp, Heart, Target } from 'lucide-react';

const impacts = [
  {
    icon: Users,
    title: 'Better Decisions',
    description: 'Empower retail investors with institutional-grade intelligence',
    stat: '10M+',
    statLabel: 'Retail Investors',
    color: 'blue',
  },
  {
    icon: ShieldCheck,
    title: 'Reduced Misinformation',
    description: 'Filter fake news before it affects portfolio decisions',
    stat: '85%',
    statLabel: 'Fake News Blocked',
    color: 'green',
  },
  {
    icon: Heart,
    title: 'Increased Trust',
    description: 'Transparent AI builds confidence in market participation',
    stat: '3x',
    statLabel: 'Trust Score',
    color: 'purple',
  },
];

export default function ImpactSlide() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Globe className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Impact</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Real World Impact
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Not just a tool — <span className="text-green-400">financial empowerment</span>
          </p>
        </motion.div>

        {/* Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          {impacts.map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass p-5 md:p-6 rounded-2xl border border-white/10 hover:border-green-500/30 transition-all"
            >
              {/* Stat Badge */}
              <div className={`text-3xl md:text-4xl font-black text-${impact.color}-400 mb-2`}>
                {impact.stat}
              </div>
              <div className="text-white/50 text-sm mb-4">{impact.statLabel}</div>

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-${impact.color}-500/10 flex items-center justify-center mb-4`}>
                <impact.icon className={`w-6 h-6 text-${impact.color}-400`} />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-lg font-semibold text-white mb-2">
                {impact.title}
              </h3>
              <p className="text-white/60 text-sm">
                {impact.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass p-5 md:p-6 rounded-2xl border border-white/10"
        >
          <div className="flex items-center justify-between">
            {/* Before */}
            <div className="flex-1 text-center">
              <div className="text-white/50 text-sm mb-3">BEFORE</div>
              <div className="space-y-2">
                {['Confused by data', 'Emotional decisions', 'Missed opportunities'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center justify-center gap-2 text-white/60 text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <div className="px-4 md:px-8">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-green-500/20 flex items-center justify-center"
              >
                <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
              </motion.div>
            </div>

            {/* After */}
            <div className="flex-1 text-center">
              <div className="text-green-400 text-sm mb-3 font-medium">AFTER</div>
              <div className="space-y-2">
                {['Clear insights', 'Data-driven actions', 'Confident trades'].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 + i * 0.1 }}
                    className="flex items-center justify-center gap-2 text-white text-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full">
            <Target className="w-5 h-5 text-cyan-400" />
            <span className="text-white/80 text-sm">
              Democratizing <span className="text-cyan-400 font-medium">institutional-grade intelligence</span> for everyone
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
