import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  Award, 
  TrendingUp, 
  Users, 
  FileText, 
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play,
  ArrowRight
} from 'lucide-react';

const ImageSwappingGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const galleryImages = useMemo(() => [
    {
      id: 1,
      title: "Quality Management System",
      description: "Comprehensive ISO certification solutions",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
      features: ["ISO 9001:2015", "Documentation", "Audit Support", "Certification"],
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Process Excellence",
      description: "Advanced process optimization methodologies",
      icon: TrendingUp,
      color: "from-green-600 to-green-800",
      features: ["Lean Manufacturing", "Six Sigma", "Kaizen", "Continuous Improvement"],
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,
      title: "Training Programs",
      description: "Professional quality management training",
      icon: Users,
      color: "from-purple-600 to-purple-800",
      features: ["Internal Auditing", "Quality Tools", "Leadership", "Compliance"],
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "Documentation Services",
      description: "Complete quality documentation solutions",
      icon: FileText,
      color: "from-orange-600 to-orange-800",
      features: ["PPAP Packages", "APQP", "SPC", "MSA Studies"],
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Certification Success",
      description: "100% success rate in certifications",
      icon: Award,
      color: "from-red-600 to-red-800",
      features: ["IATF 16949", "ISO 14001", "ISO 45001", "Industry Standards"],
      bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    }
  ], []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, galleryImages.length]);

  const goToSlide = (index) => {
    setCurrentImage(index);
    setIsAutoPlaying(false);
  };

  const goToPrevious = () => {
    setCurrentImage((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    setIsAutoPlaying(false);
  };

  const currentImageData = galleryImages[currentImage];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="relative w-full h-96 md:h-[500px] bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
      <AnimatePresence initial={false} custom={currentImage > 0 ? 1 : -1}>
        <motion.div
          key={currentImage}
          custom={currentImage > 0 ? 1 : -1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              goToNext();
            } else if (swipe > swipeConfidenceThreshold) {
              goToPrevious();
            }
          }}
          className="absolute inset-0"
        >
          <div 
            className="w-full h-full relative"
            style={{ background: currentImageData.bgGradient }}
          >
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 0%, transparent 50%), 
                                radial-gradient(circle at 80% 80%, white 0%, transparent 50%), 
                                radial-gradient(circle at 40% 20%, white 0%, transparent 50%)`
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
              {/* Header */}
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-4"
              >
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30">
                  <currentImageData.icon className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-2">{currentImageData.title}</h2>
                  <p className="text-lg text-white/80">{currentImageData.description}</p>
                </div>
              </motion.div>

              {/* Features Grid */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex-1 flex items-center justify-center py-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 max-w-2xl w-full">
                  {currentImageData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20"
                    >
                      <CheckCircle className="w-5 h-5 text-green-300 flex-shrink-0" />
                      <span className="text-sm md:text-base font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Footer */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-sm md:text-base">Advanced Quality Solutions</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 bg-white text-gray-900 rounded-xl px-6 py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
                >
                  <Play className="w-5 h-5" />
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white shadow-xl z-30 border border-white/20"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-7 h-7" />
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white shadow-xl z-30 border border-white/20"
        aria-label="Next slide"
      >
        <ChevronRight className="w-7 h-7" />
      </motion.button>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {galleryImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentImage 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsAutoPlaying(!isAutoPlaying)}
        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 z-30"
        aria-label={isAutoPlaying ? "Pause auto-play" : "Start auto-play"}
      >
        {isAutoPlaying ? (
          <div className="w-3 h-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : (
          <div className="w-3 h-3 border-2 border-white rounded-sm" />
        )}
      </motion.button>
    </div>
  );
};

export default ImageSwappingGallery;
