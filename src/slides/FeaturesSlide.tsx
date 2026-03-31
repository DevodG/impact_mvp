import { motion } from 'framer-motion';
import { TrendingUp, Shield, Newspaper, Calendar, BarChart3, Zap, Sparkles } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'AI Signal',
    description: 'BUY / SELL / HOLD recommendations with confidence scores',
    color: 'green',
    badge: '99% Accuracy',
  },
  {
    icon: Shield,
    title: 'Risk Score',
    description: 'Comprehensive risk assessment from LOW to HIGH',
    color: 'orange',
    badge: 'Real-Time',
  },
  {
    icon: Newspaper,
    title: 'News Breakdown',
    description: 'Sentiment analysis with credibility validation',
    color: 'blue',
    badge: 'AI-Powered',
  },
  {
    icon: Calendar,
    title: '7-Day Prediction',
    description: 'ML-powered price targets with trend forecasting',
    color: 'purple',
    badge: 'ML Model',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboard',
    description: 'Live prices, charts, and market data in one view',
    color: 'cyan',
    badge: 'Live Data',
  },
  {
    icon: Zap,
    title: 'Instant Alerts',
    description: 'Get notified when signals change or risks spike',
    color: 'yellow',
    badge: '< 1s Latency',
  },
];

export default function FeaturesSlide() {
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
            <Sparkles className="w-5 h-5 text-cyan-400" />
            <span className="text-cyan-400 font-medium">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Key Features
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            We simplify complexity into <span className="text-cyan-400">one clear decision</span>
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ 
                scale: 1.03, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className={`glass p-4 md:p-5 rounded-2xl border border-white/10 hover:border-${feature.color}-500/40 transition-all group cursor-default`}
            >
              {/* Badge */}
              <div className={`inline-block px-2 py-0.5 rounded-full bg-${feature.color}-500/20 mb-3`}>
                <span className={`text-${feature.color}-400 text-xs font-medium`}>{feature.badge}</span>
              </div>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-${feature.color}-500/10 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-${feature.color}-500/20 transition-colors`}
              >
                <feature.icon className={`w-5 h-5 md:w-6 md:h-6 text-${feature.color}-400`} />
              </motion.div>

              {/* Content */}
              <h3 className="text-sm md:text-lg font-semibold text-white mb-1 md:mb-2">
                {feature.title}
              </h3>
              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 text-center"
        >
          <div className="glass inline-flex items-center gap-4 px-6 py-3 rounded-full">
            <div className="flex -space-x-2">
              {['green', 'blue', 'purple', 'cyan'].map((color, i) => (
                <div key={i} className={`w-6 h-6 md:w-8 md:h-8 rounded-full bg-${color}-500/30 border-2 border-background flex items-center justify-center`}>
                  <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-${color}-400`} />
                </div>
              ))}
            </div>
            <span className="text-white/80 text-sm">
              All features work <span className="text-cyan-400 font-medium">seamlessly together</span>
            </span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
