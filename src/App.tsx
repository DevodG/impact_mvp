import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, type PanInfo } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  Shield, 
  Brain, 
  TrendingUp, 
  AlertTriangle,
  Activity,
  Zap,
  Globe,
  Rocket,
  Eye,
  Cpu,
  BarChart3,
  X
} from 'lucide-react';

// Slide Components
import TitleSlide from './slides/TitleSlide';
import ProblemSlide from './slides/ProblemSlide';
import WhyFailSlide from './slides/WhyFailSlide';
import SolutionSlide from './slides/SolutionSlide';
import HowItWorksSlide from './slides/HowItWorksSlide';
import AIBrainSlide from './slides/AIBrainSlide';
import FeaturesSlide from './slides/FeaturesSlide';
import TechStackSlide from './slides/TechStackSlide';
import InnovationSlide from './slides/InnovationSlide';
import ImpactSlide from './slides/ImpactSlide';
import FutureSlide from './slides/FutureSlide';
import DemoSlide from './slides/DemoSlide';

const slides = [
  { id: 1, component: TitleSlide, title: 'MarketShield AI' },
  { id: 2, component: ProblemSlide, title: 'The Problem' },
  { id: 3, component: WhyFailSlide, title: 'Why Tools Fail' },
  { id: 4, component: SolutionSlide, title: 'Our Solution' },
  { id: 5, component: HowItWorksSlide, title: 'How It Works' },
  { id: 6, component: AIBrainSlide, title: 'AI Brain' },
  { id: 7, component: FeaturesSlide, title: 'Key Features' },
  { id: 8, component: TechStackSlide, title: 'Technology' },
  { id: 9, component: InnovationSlide, title: 'Innovation' },
  { id: 10, component: ImpactSlide, title: 'Impact' },
  { id: 11, component: FutureSlide, title: 'Future Scope' },
  { id: 12, component: DemoSlide, title: 'Live Demo' },
];

const slideIcons = [
  Shield, AlertTriangle, X, Zap, Brain, Cpu, 
  BarChart3, Activity, Eye, Globe, Rocket, TrendingUp
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextSlide = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  // Touch/Swipe handlers
  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const velocity = info.velocity.x;
    const offset = info.offset.x;

    // Swipe left (next slide)
    if (offset < -threshold || velocity < -500) {
      nextSlide();
    }
    // Swipe right (previous slide)
    else if (offset > threshold || velocity > 500) {
      prevSlide();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      } else if (e.key >= '1' && e.key <= '9') {
        const slideNum = parseInt(e.key) - 1;
        if (slideNum < slides.length) {
          goToSlide(slideNum);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      if (currentSlide < slides.length - 1) {
        nextSlide();
      } else {
        setIsAutoPlay(false);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide, nextSlide]);

  const CurrentSlideComponent = slides[currentSlide].component;
  const CurrentIcon = slideIcons[currentSlide];

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-screen md:h-screen md:overflow-hidden bg-animated bg-grid bg-noise touch-pan-y"
    >
      {/* Background Elements - Responsive sizing */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-48 h-48 md:w-96 md:h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      {/* Header - Responsive */}
      <motion.header 
        className="absolute top-0 left-0 right-0 z-50 px-4 md:px-8 py-4 md:py-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-3">
            <div className="relative">
              <Shield className="w-6 h-6 md:w-8 md:h-8 text-cyan-400" />
              <motion.div 
                className="absolute inset-0 bg-cyan-400/30 rounded-full blur-xl"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent hidden sm:block">
              MarketShield AI
            </span>
            <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent sm:hidden">
              MS AI
            </span>
          </div>
          
          <div className="flex items-center gap-2 md:gap-4">
            <div className="glass px-2 md:px-4 py-1.5 md:py-2 rounded-full flex items-center gap-1.5 md:gap-2">
              <CurrentIcon className="w-3.5 h-3.5 md:w-4 md:h-4 text-cyan-400" />
              <span className="text-xs md:text-sm text-white/80 truncate max-w-[80px] md:max-w-none">
                {slides[currentSlide].title}
              </span>
            </div>
            <div className="glass px-2 md:px-3 py-1.5 md:py-2 rounded-full">
              <span className="text-xs md:text-sm text-white/60">
                {currentSlide + 1}/{slides.length}
              </span>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content - With Touch Support */}
      <main className="relative z-10 w-full h-auto md:h-full flex items-center justify-center px-4 md:px-8 pt-20 pb-24 md:py-24">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 100 : -100, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: direction > 0 ? -100 : 100, scale: 0.95 }}
            transition={{ 
              duration: 0.5, 
              ease: [0.32, 0.72, 0, 1]
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="w-full max-w-7xl md:h-full cursor-grab active:cursor-grabbing overflow-y-auto md:overflow-y-visible scrollbar-hide"
          >
            <CurrentSlideComponent />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Navigation Controls - Responsive */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 md:gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="glass p-2 md:p-3 rounded-full hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
        </button>

        {/* Slide Indicators - Scrollable on mobile */}
        <div className="glass px-2 md:px-4 py-2 md:py-3 rounded-full flex items-center gap-1.5 md:gap-2 overflow-x-auto max-w-[150px] md:max-w-none scrollbar-hide">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative rounded-full transition-all duration-300 flex-shrink-0 ${
                index === currentSlide 
                  ? 'bg-cyan-400 w-6 md:w-8 h-2 md:h-2.5' 
                  : 'bg-white/30 hover:bg-white/50 w-2 md:w-2.5 h-2 md:h-2.5'
              }`}
            >
              {index === currentSlide && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute inset-0 bg-cyan-400 rounded-full glow-cyan"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="glass p-2 md:p-3 rounded-full hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
        >
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
        </button>
      </motion.div>

      {/* Keyboard/Navigation Hint - Hidden on mobile */}
      <motion.div 
        className="absolute bottom-6 md:bottom-8 right-4 md:right-8 z-50 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="glass px-3 md:px-4 py-2 rounded-lg text-xs text-white/40">
          ← → arrows or swipe
        </div>
      </motion.div>

      {/* Mobile Swipe Hint */}
      <motion.div 
        className="absolute bottom-6 right-4 z-50 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="glass px-3 py-2 rounded-lg text-xs text-white/40">
          Swipe to navigate
        </div>
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5">
        <motion.div 
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-400"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

export default App;
