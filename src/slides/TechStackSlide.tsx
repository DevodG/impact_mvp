import { motion } from 'framer-motion';
import { Layers, Cpu, Database, Globe, Server, ArrowRight } from 'lucide-react';

const techLayers = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'cyan',
    technologies: ['React 18', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    description: 'Lightning-fast UI with smooth animations',
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'green',
    technologies: ['FastAPI', 'Python 3.11', 'Pydantic', 'Uvicorn'],
    description: 'High-performance async API server',
  },
  {
    title: 'AI/ML',
    icon: Cpu,
    color: 'purple',
    technologies: ['FinBERT', 'Transformers', 'PyTorch', 'scikit-learn'],
    description: 'State-of-the-art NLP models',
  },
  {
    title: 'Data',
    icon: Database,
    color: 'blue',
    technologies: ['yfinance', 'NewsAPI', 'SQLAlchemy', 'Redis'],
    description: 'Real-time market & news data',
  },
];

export default function TechStackSlide() {
  return (
    <div className="w-full min-h-full flex flex-col items-center justify-center relative px-4">
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
            <Layers className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Technology</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Tech Stack
          </h2>
          <p className="text-lg md:text-xl text-white/60">
            Built for <span className="text-blue-400">speed, scalability, and intelligence</span>
          </p>
        </motion.div>

        {/* Tech Stack Layers */}
        <div className="space-y-4">
          {techLayers.map((layer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + index * 0.15 }}
              className="relative"
            >
              <motion.div
                whileHover={{ scale: 1.02, x: index % 2 === 0 ? 5 : -5 }}
                className={`glass p-4 md:p-5 rounded-2xl border border-${layer.color}-500/20 flex items-center gap-4 md:gap-6`}
              >
                {/* Icon */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl bg-${layer.color}-500/10 flex items-center justify-center flex-shrink-0`}>
                  <layer.icon className={`w-6 h-6 md:w-8 md:h-8 text-${layer.color}-400`} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1 md:mb-2">
                    <h3 className="text-base md:text-xl font-semibold text-white">{layer.title}</h3>
                    <div className="flex flex-wrap gap-1">
                      {layer.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-2 py-0.5 rounded-full bg-${layer.color}-500/10 text-${layer.color}-400 text-xs`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-white/60 text-sm">{layer.description}</p>
                </div>

                {/* Arrow */}
                {index < techLayers.length - 1 && (
                  <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="hidden md:block"
                  >
                    <ArrowRight className="w-5 h-5 text-white/30 rotate-90" />
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
        >
          {[
            { value: '<100ms', label: 'API Response' },
            { value: '10K+', label: 'Requests/min' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: 'Global', label: 'CDN Edge' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1 }}
              className="glass p-3 md:p-4 rounded-xl text-center"
            >
              <div className="text-xl md:text-2xl font-bold text-cyan-400">{stat.value}</div>
              <div className="text-white/50 text-xs md:text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
