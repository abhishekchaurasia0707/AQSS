import { useState, useEffect, useMemo } from 'react';
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
  const [showVideo, setShowVideo] = useState(false);

  const galleryImages = useMemo(() => [
    {
      id: 1,
      title: "Management System Consultancy",
      description: "Comprehensive ISO certification and management system implementation",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
      features: ["ISO 9001:2015 QMS", "ISO 14001:2015 EMS", "ISO 45001:2018 OHSMS", "IATF 16949:2016"],
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4",
      clientImage: "https://via.placeholder.com/800x600/667eea/ffffff?text=Tata+Motors+Logo",
      clientName: "Tata Motors"
    },
    {
      id: 2,
      title: "Product Certification & Regulatory Services",
      description: "Complete support for product certifications and regulatory compliance",
      icon: Award,
      color: "from-green-600 to-green-800",
      features: ["CE Marking", "BIS Certification", "ZED Certification", "RoHS & REACH"],
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      videoUrl: "https://test-videos.co.uk/vids/elephantsdream/mp4",
      clientImage: "https://via.placeholder.com/800x600/f093fb/ffffff?text=Mahindra+Logo",
      clientName: "Mahindra & Mahindra"
    },
    {
      id: 3,
      title: "Automotive Core Tools",
      description: "Expert implementation of automotive quality core tools",
      icon: TrendingUp,
      color: "from-purple-600 to-purple-800",
      features: ["APQP", "PPAP", "PFMEA / DFMEA", "SPC & MSA"],
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      videoUrl: "https://test-videos.co.uk/vids/small/mp4",
      clientImage: "https://via.placeholder.com/800x600/4facfe/ffffff?text=Bajaj+Auto+Logo",
      clientName: "Bajaj Auto"
    },
    {
      id: 4,
      title: "Quality & Manufacturing Excellence",
      description: "Lean manufacturing and quality improvement methodologies",
      icon: Users,
      color: "from-orange-600 to-orange-800",
      features: ["Lean Manufacturing", "5S Workplace", "Kaizen", "Poka-Yoke"],
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      videoUrl: "https://test-videos.co.uk/vids/forbiggerblazes/mp4",
      clientImage: "https://via.placeholder.com/800x600/43e97b/ffffff?text=Ashok+Leyland+Logo",
      clientName: "Ashok Leyland"
    },
    {
      id: 5,
      title: "Audit Services",
      description: "Professional audit services for compliance and improvement",
      icon: Shield,
      color: "from-red-600 to-red-800",
      features: ["Internal Audits", "Supplier Audits", "Process Audits", "LPA"],
      bgGradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      videoUrl: "https://test-videos.co.uk/vids/forbiggerescapes/mp4",
      clientImage: "https://via.placeholder.com/800x600/fa709a/ffffff?text=TVS+Motors+Logo",
      clientName: "TVS Motors"
    },
    {
      id: 6,
      title: "Documentation Services",
      description: "Complete quality documentation and system documentation support",
      icon: FileText,
      color: "from-indigo-600 to-indigo-800",
      features: ["Quality Manual", "SOPs & Work Instructions", "APQP Documentation", "PPAP Documentation"],
      bgGradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      videoUrl: "https://test-videos.co.uk/vids/bigbuckbunny/mp4",
      clientImage: "https://via.placeholder.com/800x600/a8edea/ffffff?text=Maruti+Suzuki+Logo",
      clientName: "Maruti Suzuki"
    },
    {
      id: 7,
      title: "Training Programs",
      description: "Comprehensive training on quality standards and best practices",
      icon: Users,
      color: "from-teal-600 to-teal-800",
      features: ["ISO 9001 Awareness", "Internal Auditor Training", "Automotive Core Tools", "Lean & 5S"],
      bgGradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      videoUrl: "https://test-videos.co.uk/vids/elephantsdream/mp4",
      clientImage: "https://via.placeholder.com/800x600/d299c2/ffffff?text=Hero+MotoCorp+Logo",
      clientName: "Hero MotoCorp"
    },
    {
      id: 8,
      title: "Industrial Engineering & Process Improvement",
      description: "Process optimization and productivity improvement services",
      icon: TrendingUp,
      color: "from-cyan-600 to-cyan-800",
      features: ["Process Optimization", "Productivity Improvement", "OEE Improvement", "Cost Reduction"],
      bgGradient: "linear-gradient(135deg, #89f7fe 0%, #66a6ff 100%)",
      videoUrl: "https://test-videos.co.uk/vids/small/mp4",
      clientImage: "https://via.placeholder.com/800x600/89f7fe/ffffff?text=Eicher+Motors+Logo",
      clientName: "Eicher Motors"
    },
    {
      id: 9,
      title: "Business Support Services",
      description: "Strategic business support and consultancy services",
      icon: Award,
      color: "from-rose-600 to-rose-800",
      features: ["Vendor Development", "NPD Support", "Project Management", "Quality System Maintenance"],
      bgGradient: "linear-gradient(135deg, #fddb92 0%, #d1fdff 100%)",
      videoUrl: "https://test-videos.co.uk/vids/forbiggerblazes/mp4",
      clientImage: "https://via.placeholder.com/800x600/fddb92/ffffff?text=Force+Motors+Logo",
      clientName: "Force Motors"
    },
    {
      id: 10,
      title: "Industries We Serve",
      description: "Serving diverse industries with specialized quality solutions",
      icon: Shield,
      color: "from-emerald-600 to-emerald-800",
      features: ["Automotive Components", "Electrical & Electronics", "Precision Machining", "Pharmaceuticals"],
      bgGradient: "linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)",
      videoUrl: "https://test-videos.co.uk/vids/forbiggerescapes/mp4",
      clientImage: "https://via.placeholder.com/800x600/96fbc4/ffffff?text=Bharat+Forge+Logo",
      clientName: "Bharat Forge"
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

  const handleLearnMore = () => {
    setShowVideo(true);
    setIsAutoPlaying(false);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const currentImageData = galleryImages[currentImage];

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.6, ease: "easeOut" },
        scale: { duration: 0.6, ease: "easeOut" }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
      scale: 0.95,
      transition: {
        x: { type: "spring", stiffness: 100, damping: 20 },
        opacity: { duration: 0.4, ease: "easeIn" },
        scale: { duration: 0.4, ease: "easeIn" }
      }
    })
  };

  const swipeConfidenceThreshold = 5000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div 
      className="relative w-full h-96 md:h-[500px] rounded-3xl overflow-hidden shadow-2xl transition-colors duration-300"
      style={{ background: currentImageData.bgGradient }}
    >
      <AnimatePresence initial={false} custom={currentImage > 0 ? 1 : -1}>
        <motion.div
          key={currentImage}
          custom={currentImage > 0 ? 1 : -1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
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
            className="w-full h-full relative rounded-3xl overflow-hidden"
            style={{ background: currentImageData.bgGradient }}
          >
            {/* Client Logo Background */}
            {currentImageData.clientImage && (
              <div className="absolute inset-0 opacity-5">
                <img 
                  src={currentImageData.clientImage} 
                  alt={`${currentImageData.clientName} logo`}
                  className="w-full h-full object-contain opacity-20"
                />
              </div>
            )}
            
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20% 50%, white 0%, transparent 50%), 
                                radial-gradient(circle at 80% 80%, white 0%, transparent 50%), 
                                radial-gradient(circle at 40% 20%, white 0%, transparent 50%)`
              }} />
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 text-white">
              <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="flex items-center space-x-2 md:space-x-4"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center border border-white/30 flex-shrink-0">
                  <currentImageData.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl md:text-3xl md:text-4xl font-bold mb-1 md:mb-2 truncate">{currentImageData.title}</h2>
                  <p className="text-sm md:text-lg text-white/80 line-clamp-2">{currentImageData.description}</p>
                  {currentImageData.clientName && (
                    <p className="text-xs md:text-sm text-white/60 mt-1 font-medium">Client: {currentImageData.clientName}</p>
                  )}
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex-1 flex items-center justify-center py-4 md:py-8 px-2"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 max-w-2xl w-full">
                  {currentImageData.features.map((feature, index) => (
                    <motion.div
                      key={feature}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-2 md:space-x-3 bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl px-2 py-2 md:px-4 md:py-3 border border-white/20 min-w-0"
                    >
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-300 flex-shrink-0" />
                      <span className="text-xs md:text-sm md:text-base font-medium truncate">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0"
              >
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full animate-pulse"></div>
                  <span className="text-xs md:text-sm md:text-base truncate">Advanced Quality Solutions</span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleLearnMore}
                  className="flex items-center space-x-1 md:space-x-2 bg-white text-gray-900 rounded-lg md:rounded-xl px-3 py-2 md:px-6 md:py-3 font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg text-sm md:text-base"
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Learn More</span>
                  <span className="sm:hidden">Learn</span>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 hidden sm:inline" />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

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

      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeVideo}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeVideo}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-gray-800 hover:bg-white z-10 shadow-lg"
                aria-label="Close video"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>

              <div className="w-full h-full flex items-center justify-center">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  controls
                  src={currentImageData.videoUrl}
                  title={`${currentImageData.title} Process Video`}
                >
                  <source src={currentImageData.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{currentImageData.title}</h3>
                <p className="text-white/80 text-sm mb-2">{currentImageData.description}</p>
                {currentImageData.clientName && (
                  <p className="text-white/60 text-xs font-medium">Featured Client: {currentImageData.clientName}</p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ImageSwappingGallery;
