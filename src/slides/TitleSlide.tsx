import { motion } from 'framer-motion';
import { Shield, Brain, TrendingUp, ArrowRight } from 'lucide-react';

export default function TitleSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute inset-0 border border-cyan-500/20 rounded-full" />
          <div className="absolute inset-8 border border-blue-500/15 rounded-full" />
          <div className="absolute inset-16 border border-purple-500/10 rounded-full" />
        </motion.div>
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/40 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative inline-block mb-8"
        >
          <div className="relative">
            <Shield className="w-24 h-24 md:w-32 md:h-32 text-cyan-400" strokeWidth={1.5} />
            <motion.div
              className="absolute inset-0 bg-cyan-400/30 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.div
            className="absolute -top-2 -right-2"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Brain className="w-10 h-10 md:w-12 md:h-12 text-blue-400" />
          </motion.div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
        >
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            MarketShield
          </span>
          <span className="text-white"> AI</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-3xl text-white/70 mb-12 font-light"
        >
          From <span className="text-cyan-400 font-medium">Noise</span>
          <ArrowRight className="inline mx-3 w-6 h-6 text-white/40" />
          <span className="text-blue-400 font-medium">Insight</span>
          <ArrowRight className="inline mx-3 w-6 h-6 text-white/40" />
          <span className="text-green-400 font-medium">Action</span>
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {[
            { icon: Brain, text: 'AI-Powered Intelligence', color: 'cyan' },
            { icon: TrendingUp, text: 'Real-Time Decisions', color: 'blue' },
            { icon: Shield, text: 'Risk-Aware Analysis', color: 'green' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="glass px-6 py-3 rounded-full flex items-center gap-3 hover:bg-white/10 transition-all cursor-default"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <item.icon className={`w-5 h-5 text-${item.color}-400`} />
              <span className="text-white/80 text-sm md:text-base">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Speaker Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 text-white/40 text-lg italic"
        >
          "Today, we're not just showing a product — we're solving how investors think."
        </motion.p>
      </div>
    </div>
  );
}
