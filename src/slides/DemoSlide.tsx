import { motion } from 'framer-motion';
import { Play, Search, TrendingUp, Shield, Brain, ArrowRight, Sparkles, Zap } from 'lucide-react';
import { useState } from 'react';

const demoSteps = [
  { icon: Search, label: 'Stock Selection', color: 'blue' },
  { icon: Brain, label: 'News Analysis', color: 'purple' },
  { icon: Shield, label: 'Risk Score', color: 'orange' },
  { icon: TrendingUp, label: 'Final Signal', color: 'green' },
];

export default function DemoSlide() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const startDemo = () => {
    setIsPlaying(true);
    setActiveStep(0);
    
    // Auto-advance through steps
    demoSteps.forEach((_, index) => {
      setTimeout(() => {
        setActiveStep(index + 1);
        if (index === demoSteps.length - 1) {
          setTimeout(() => setIsPlaying(false), 1000);
        }
      }, (index + 1) * 1500);
    });
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Play className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">Live Demo</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            See It In Action
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Let's see MarketShield AI <span className="text-green-400">in action</span>
          </p>
        </motion.div>

        {/* Demo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="glass p-4 md:p-6 rounded-2xl md:rounded-3xl border border-cyan-500/20"
        >
          {/* Demo Steps */}
          <div className="flex items-center justify-between mb-4 md:mb-6 overflow-x-auto pb-2 scrollbar-hide">
            {demoSteps.map((step, index) => (
              <div key={index} className="flex items-center flex-shrink-0">
                <div className="flex flex-col items-center">
                  <motion.div
                    animate={{
                      scale: activeStep === index ? 1.1 : 1,
                    }}
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 transition-all ${
                      activeStep >= index ? `border-${step.color}-400 bg-${step.color}-400/20` : 'border-white/20'
                    }`}
                  >
                    <step.icon className={`w-4 h-4 md:w-6 md:h-6 ${activeStep >= index ? `text-${step.color}-400` : 'text-white/40'}`} />
                  </motion.div>
                  <span className={`text-xs mt-1 md:mt-2 ${activeStep >= index ? 'text-white' : 'text-white/40'} whitespace-nowrap`}>
                    {step.label}
                  </span>
                </div>
                
                {index < demoSteps.length - 1 && (
                  <div className="w-6 md:w-10 h-0.5 mx-1 md:mx-2 bg-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-400 to-green-400"
                      initial={{ width: '0%' }}
                      animate={{ width: activeStep > index ? '100%' : '0%' }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Demo Screen */}
          <div className="relative bg-black/40 rounded-xl md:rounded-2xl p-4 md:p-6 min-h-[160px] md:min-h-[200px] flex items-center justify-center overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid opacity-30" />
            
            {!isPlaying && activeStep === 0 ? (
              /* Start Button */
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={startDemo}
                className="relative z-10 glass px-6 md:px-8 py-3 md:py-4 rounded-full flex items-center gap-3 hover:bg-white/10 transition-all group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-green-500/20 flex items-center justify-center group-hover:bg-green-500/30 transition-colors">
                  <Play className="w-5 h-5 md:w-6 md:h-6 text-green-400 ml-0.5" />
                </div>
                <div className="text-left">
                  <div className="text-white font-semibold text-sm md:text-base">Start Demo</div>
                  <div className="text-white/50 text-xs">See the full pipeline</div>
                </div>
              </motion.button>
            ) : (
              /* Demo Content */
              <div className="relative z-10 w-full">
                {activeStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center"
                  >
                    <div className="glass inline-flex items-center gap-3 px-5 md:px-6 py-2 md:py-3 rounded-full">
                      <Search className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
                      <span className="text-white text-sm md:text-base">Analyzing: <span className="text-blue-400 font-semibold">TSLA</span></span>
                    </div>
                  </motion.div>
                )}
                
                {activeStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-2"
                  >
                    <div className="glass p-2 md:p-3 rounded-lg flex items-center gap-2 md:gap-3">
                      <Brain className="w-4 h-4 md:w-5 md:h-5 text-purple-400" />
                      <span className="text-white/80 text-xs md:text-sm">Processing 47 news articles...</span>
                    </div>
                    <div className="glass p-2 md:p-3 rounded-lg flex items-center gap-2 md:gap-3">
                      <span className="text-green-400 text-xs md:text-sm font-medium">Sentiment: Bullish (+0.72)</span>
                    </div>
                  </motion.div>
                )}
                
                {activeStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <div className="glass inline-block p-3 md:p-4 rounded-xl border border-orange-500/30">
                      <div className="text-white/60 text-xs mb-0.5 md:mb-1">Risk Assessment</div>
                      <div className="text-xl md:text-3xl font-bold text-orange-400">MEDIUM</div>
                      <div className="text-white/60 text-xs mt-0.5 md:mt-1">Score: 45/100</div>
                    </div>
                  </motion.div>
                )}
                
                {activeStep >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center"
                  >
                    <motion.div
                      animate={{ 
                        boxShadow: [
                          '0 0 20px rgba(34, 197, 94, 0.3)',
                          '0 0 40px rgba(34, 197, 94, 0.5)',
                          '0 0 20px rgba(34, 197, 94, 0.3)',
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="glass inline-block px-5 md:px-8 py-2 md:py-4 rounded-xl md:rounded-2xl border-2 border-green-500/50 bg-green-500/10"
                    >
                      <div className="flex items-center gap-2 md:gap-4">
                        <Zap className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
                        <div className="text-left">
                          <div className="text-white/60 text-xs">AI Signal</div>
                          <div className="text-2xl md:text-4xl font-black text-green-400">BUY</div>
                        </div>
                      </div>
                      <div className="mt-2 md:mt-3 text-green-400/80 text-xs">
                        Confidence: 87% • Target: $245 (+12%)
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-4 md:mt-6 flex justify-center gap-4 md:gap-6"
        >
          {[
            { value: '<3s', label: 'Analysis Time' },
            { value: '99.9%', label: 'Accuracy' },
            { value: '24/7', label: 'Availability' },
          ].map((stat, i) => (
            <div key={i} className="glass px-3 md:px-4 py-1.5 md:py-2 rounded-lg text-center">
              <div className="text-lg md:text-xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-white/50 text-xs">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-6 md:mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 glass px-5 md:px-6 py-2 md:py-3 rounded-full">
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-400" />
            <span className="text-white/80 text-sm">Ready to make smarter decisions?</span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-cyan-400" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
