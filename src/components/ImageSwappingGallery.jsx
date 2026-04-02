import { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Award, 
  TrendingUp, 
  Users, 
  FileText, 
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  Play
} from 'lucide-react';

const ImageSwappingGallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const galleryImages = useMemo(() => [
    {
      id: 1,
      title: "Quality Management System",
      description: "Comprehensive ISO certification solutions",
      icon: Shield,
      color: "from-blue-600 to-blue-800",
      features: ["ISO 9001:2015", "Documentation", "Audit Support", "Certification"]
    },
    {
      id: 2,
      title: "Process Excellence",
      description: "Advanced process optimization methodologies",
      icon: TrendingUp,
      color: "from-green-600 to-green-800",
      features: ["Lean Manufacturing", "Six Sigma", "Kaizen", "Continuous Improvement"]
    },
    {
      id: 3,
      title: "Training Programs",
      description: "Professional quality management training",
      icon: Users,
      color: "from-purple-600 to-purple-800",
      features: ["Internal Auditing", "Quality Tools", "Leadership", "Compliance"]
    },
    {
      id: 4,
      title: "Documentation Services",
      description: "Complete quality documentation solutions",
      icon: FileText,
      color: "from-orange-600 to-orange-800",
      features: ["PPAP Packages", "APQP", "SPC", "MSA Studies"]
    },
    {
      id: 5,
      title: "Certification Success",
      description: "100% success rate in certifications",
      icon: Award,
      color: "from-red-600 to-red-800",
      features: ["IATF 16949", "ISO 14001", "ISO 45001", "Industry Standards"]
    }
  ], []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % galleryImages.length);
    }, 6000); // Increased from 4s to 6s for better performance

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const handleImageChange = (index) => {
    console.log('Changing to image:', index);
    setCurrentImage(index);
  };

  const handlePrevious = () => {
    const newIndex = (currentImage - 1 + galleryImages.length) % galleryImages.length;
    console.log('Previous clicked, new index:', newIndex);
    handleImageChange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentImage + 1) % galleryImages.length;
    console.log('Next clicked, new index:', newIndex);
    handleImageChange(newIndex);
  };

  const currentImageData = galleryImages[currentImage];

  return (
    <div className="relative w-full h-96 md:h-[500px]">
      {/* Main Image Display */}
      <motion.div
        key={currentImage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0"
      >
        <div className={`relative w-full h-full bg-gradient-to-br ${currentImageData.color} rounded-2xl overflow-hidden shadow-2xl`}>
          {/* Simple Background Overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Content Overlay */}
          <div className="relative z-10 h-full flex flex-col justify-between p-8 text-white">
            {/* Top Section */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                  <currentImageData.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{currentImageData.title}</h3>
                  <p className="text-white/80">{currentImageData.description}</p>
                </div>
              </div>
            </div>

            {/* Middle Section - Features */}
            <div className="flex-1 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 max-w-md">
                {currentImageData.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2"
                  >
                    <CheckCircle className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full"></div>
                <span className="text-sm">Advanced Quality Solutions</span>
              </div>
              <button className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2 hover:bg-white/30 transition-colors duration-200">
                <Play className="w-4 h-4" />
                <span className="text-sm">Learn More</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Thumbnail Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {galleryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageChange(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImage
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      {/* Side Navigation Arrows */}
      <button
        onClick={handlePrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200 z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ImageSwappingGallery;
