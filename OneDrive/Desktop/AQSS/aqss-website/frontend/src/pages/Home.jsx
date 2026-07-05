import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Shield, 
  Users, 
  Award, 
  TrendingUp,
  CheckCircle,
  Star,
  Phone,
  Mail,
  MapPin,
  Play,
  Calendar,
  Quote,
  Building2,
  FileText,
  CheckSquare,
  Rocket
} from 'lucide-react';
import ImageSwappingGallery from '../components/ImageSwappingGallery';

const Home = () => {
  const stats = [
    { icon: Users, value: '500+', label: 'Clients Served' },
    { icon: Award, value: '1000+', label: 'Certifications' },
    { icon: Shield, value: '6+', label: 'Years Experience' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' },
  ];

  const services = [
    {
      icon: Shield,
      title: 'ISO Certification',
      description: 'Complete ISO 9001, 14001, 45001, and IATF 16949 certification support',
      features: ['Documentation', 'Implementation', 'Auditing', 'Certification']
    },
    {
      icon: Award,
      title: 'Quality Documentation',
      description: 'PPAP, APQP, SPC, MSA and other quality management tools',
      features: ['PPAP Packages', 'APQP Planning', 'SPC Analysis', 'MSA Studies']
    },
    {
      icon: Users,
      title: 'Training Programs',
      description: 'Comprehensive training on quality standards and best practices',
      features: ['Internal Auditing', 'Quality Tools', 'Documentation', 'Leadership']
    },
  ];

  const clients = [
    { 
      name: 'Phi Audiocom Systems Pvt. Ltd.', 
      logo: 'PA',
      logoUrl: '/assets/logos/Phi Audiocom.webp',
      color: 'from-blue-600 to-blue-800',
      description: 'Audio systems manufacturer'
    },
    { 
      name: 'PreciPower', 
      logo: 'PP',
      logoUrl: '/assets/logos/PreciPower.jpeg',
      color: 'from-purple-600 to-purple-800',
      description: 'Precision engineering solutions'
    },
    { 
      name: 'Ideal Cast', 
      logo: 'IC',
      logoUrl: '/assets/logos/Ideal Cast.jpeg',
      color: 'from-orange-600 to-orange-800',
      description: 'Casting and foundry specialist'
    },
    { 
      name: 'Waghole Engineering', 
      logo: 'WE',
      logoUrl: '/assets/logos/Waghole.jpeg',
      color: 'from-green-600 to-green-800',
      description: 'Engineering solutions provider'
    },
    { 
      name: 'Automech', 
      logo: 'AM',
      logoUrl: '/assets/logos/AutoMech.jpeg',
      color: 'from-red-600 to-red-800',
      description: 'Automotive components'
    },
    { 
      name: 'United Filter Industries Pvt. Ltd.', 
      logo: 'UF',
      logoUrl: '/assets/logos/United Filter Industries Pvt Ltd.jpeg',
      color: 'from-teal-600 to-teal-800',
      description: 'Filter manufacturing expert'
    },
    { 
      name: 'Skyline Projects', 
      logo: 'SP',
      logoUrl: '/assets/logos/SkyLine.jpeg',
      color: 'from-indigo-600 to-indigo-800',
      description: 'Project management solutions'
    }
  ];

  const tier1Vendors = [
    { 
      name: 'CTR Manufacturing Industries Pvt. Ltd.', 
      logo: 'CTR',
      logoUrl: '/assets/logos/ctr manufacturing industries pvt ltd.avif',
      color: 'from-blue-600 to-blue-800',
      description: 'Manufacturing excellence partner'
    },
    { 
      name: 'Tata', 
      logo: 'T',
      logoUrl: '/assets/logos/Tata.jpg',
      color: 'from-red-600 to-red-800',
      description: 'Global industrial conglomerate'
    },
    { 
      name: 'Mahindra', 
      logo: 'M',
      logoUrl: '/assets/logos/Mahindra.webp',
      color: 'from-orange-600 to-orange-800',
      description: 'Diversified industrial group'
    },
    { 
      name: 'Siemens', 
      logo: 'S',
      logoUrl: '/assets/logos/Siemens.webp',
      color: 'from-green-600 to-green-800',
      description: 'Technology innovation leader'
    },
    { 
      name: 'Indian Navy', 
      logo: 'IN',
      logoUrl: '/assets/logos/Indian Navy.jpg',
      color: 'from-navy-600 to-navy-800',
      description: 'Defense sector excellence'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Qualified Team',
      description: '16+ years of experienced professionals with industry expertise'
    },
    {
      icon: TrendingUp,
      title: 'Industry Leading Rates',
      description: 'Competitive pricing without compromising on quality'
    },
    {
      icon: Shield,
      title: 'Innovative Ideas',
      description: 'Creative solutions for complex quality challenges'
    },
    {
      icon: Award,
      title: 'Strong Track Record',
      description: 'Proven success with leading automotive and non-automotive companies'
    },
  ];

  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'Tata Motors',
      role: 'Quality Manager',
      content: 'AQSS helped us achieve ISO 9001 certification in record time. Their expertise and dedication are unmatched. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      company: 'Mahindra',
      role: 'Operations Head',
      content: 'The quality management solutions provided by AQSS transformed our processes. We saw a 40% improvement in efficiency within 6 months.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      company: 'Siemens',
      role: 'Plant Manager',
      content: 'Professional team with deep industry knowledge. Their audit preparation services were exceptional and helped us pass with flying colors.',
      rating: 5
    }
  ];

  const howItWorks = [
    {
      step: 1,
      icon: Phone,
      title: 'Initial Consultation',
      description: 'Contact us for a free consultation to discuss your quality management needs and goals.'
    },
    {
      step: 2,
      icon: FileText,
      title: 'Assessment & Planning',
      description: 'Our experts conduct a thorough assessment and create a customized implementation plan.'
    },
    {
      step: 3,
      icon: CheckSquare,
      title: 'Implementation',
      description: 'We work closely with your team to implement quality systems and documentation.'
    },
    {
      step: 4,
      icon: Award,
      title: 'Certification',
      description: 'Prepare for and successfully achieve your desired certifications with our guidance.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-br from-red-200 to-pink-200 rounded-full blur-3xl animate-pulse opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-br from-rose-200 to-red-200 rounded-full blur-3xl animate-pulse opacity-50" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-pink-100 to-rose-100 rounded-full blur-3xl animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle, #ef4444 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>

        {/* Subtle Wave Pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent"></div>

        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-gray-800">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Advance <span className="text-red-600">Quality</span>
                  <br />
                  Service and Solution
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Delivering Excellence in Quality, Certification & Consulting since 2018. Your trusted partner for ISO certification and quality management solutions.
                </p>
                <div className="inline-block px-4 py-2 bg-red-100 backdrop-blur-sm rounded-full text-sm font-semibold text-red-700">
                  🏆 Trusted by 500+ Companies
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-50 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">6+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">100% Success Rate</span>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="relative z-10">
                <div className="w-full h-[500px] bg-white/70 backdrop-blur-lg rounded-3xl flex items-center justify-center border border-white/50 shadow-2xl">
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-red-50 to-rose-50 rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <img 
                        src="/assets/logos/Aqss.jpeg" 
                        alt="AQSS Logo" 
                        className="w-40 h-40 object-contain"
                      />
                    </div>
                    <h3 className="text-4xl font-bold text-gray-800 mb-2">AQSS</h3>
                    <p className="text-xl text-gray-600 font-medium">Quality Excellence</p>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <div className="absolute top-10 -right-10 w-20 h-20 bg-gradient-to-br from-red-400 to-rose-400 rounded-2xl flex items-center justify-center shadow-xl animate-bounce">
                <Award className="w-10 h-10 text-white" />
              </div>
              <div className="absolute bottom-10 -left-10 w-16 h-16 bg-gradient-to-br from-pink-400 to-red-400 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDelay: '0.5s' }}>
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div className="absolute top-1/2 -right-20 w-14 h-14 bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl flex items-center justify-center shadow-xl animate-bounce" style={{ animationDelay: '1s' }}>
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 border-2 border-red-400/50 rounded-full flex items-start justify-center p-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive quality solutions for automotive and non-automotive industries
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center space-x-2 px-8 py-4">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Quality Services Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Advanced <span className="gradient-text">Quality Services</span> & Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Cutting-edge quality management solutions for modern industries
            </p>
        </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Shield className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Comprehensive Quality Management
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        End-to-end quality solutions from documentation to certification, ensuring compliance with international standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-green-600 to-green-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <TrendingUp className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Process Optimization
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Advanced process improvement methodologies to enhance efficiency and reduce operational costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Certification Excellence
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Expert guidance for ISO, IATF, and industry-specific certifications with 100% success rate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link to="/services" className="btn-primary">
                  Explore All Services
                </Link>
                <Link to="/contact" className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Side - Image Swapping Gallery */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-700 dark:to-gray-800 rounded-3xl p-8 shadow-2xl">
                <ImageSwappingGallery />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose AQSS
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We deliver excellence through expertise, innovation, and commitment
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={item.title} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Simple 4-step process to achieve quality excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <span className="inline-block w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-lg mb-3">
                      {step.step}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    {step.description}
                  </p>
                </div>
                {/* Connector Line */}
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Our <span className="gradient-text">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Trusted by industry leaders across various sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <Quote className="w-10 h-10 text-primary-600 dark:text-primary-400 mb-4 opacity-50" />
                <p className="text-gray-700 dark:text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Director */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="gradient-text">Director</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Led by 16+ years of expertise in quality management systems
            </p>
        </div>

          <div className="max-w-5xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Director Image */}
                <div className="relative lg:col-span-1 h-96 md:h-[500px] bg-gradient-to-br from-primary-600 to-secondary-600">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }}></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                        <Shield className="w-16 h-16 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Mr. Ashish Sinha</h3>
                      <p className="text-white/90 text-lg">Founder & Director</p>
                    </div>
                  </div>
                </div>

              {/* Director Info */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Leadership & Vision
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    With over 16+ years of extensive experience in quality management systems and automotive industry standards, our director brings unparalleled expertise to AQSS. Having worked with numerous multinational corporations and helped achieve 500+ certifications, our leadership ensures the highest standards of quality consulting and implementation.
                  </p>
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Expertise Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">ISO 9001:2015 QMS</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">IATF 16949:2016</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">ISO 14001:2015 EMS</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">ISO 45001:2018 OHSMS</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">PPAP & APQP</span>
                    </div>
                    <div className="flex items-center space-x-3 bg-gray-50 dark:bg-gray-700 rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 font-medium">SPC & MSA</span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="text-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">500+</div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Certifications</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">16+</div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
                    </div>
                    <div className="text-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">100%</div>
                      <div className="text-gray-600 dark:text-gray-400 font-medium">Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-gray-600 dark:text-gray-400 italic text-lg leading-relaxed">
                    "Quality is not an act, it is a habit. Our commitment to excellence drives every client engagement and ensures sustainable business success."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Direct Reputed Clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proud to work with leading companies in the automotive industry as direct reputed clients and Tier 1 vendor respectively
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  {/* Client Logo */}
                  <div className={`w-24 h-24 ${client.logoUrl ? 'bg-transparent' : `bg-gradient-to-br ${client.color}`} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
                    {client.logoUrl ? (
                      <img 
                        src={client.logoUrl} 
                        alt={client.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-white font-bold text-3xl">
                        {client.logo}
                      </span>
                    )}
                  </div>
                  
                  {/* Client Name */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {client.name}
                  </h3>
                  
                  {/* Client Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {client.description}
                  </p>
                  
                  {/* Trust Badge */}
                  <div className="flex items-center justify-center space-x-2 bg-green-50 dark:bg-green-900/20 rounded-lg py-2 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400 font-semibold">
                      Trusted Partner
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 1 Vendor Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tier 1 Vendor Of
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proud to serve as Tier 1 vendor for leading organizations
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier1Vendors.map((vendor, index) => (
              <div
                key={vendor.name}
                className="group bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  {/* Vendor Logo */}
                  <div className={`w-24 h-24 ${vendor.logoUrl ? 'bg-transparent' : `bg-gradient-to-br ${vendor.color}`} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
                    {vendor.logoUrl ? (
                      <img 
                        src={vendor.logoUrl} 
                        alt={vendor.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-white font-bold text-3xl">
                        {vendor.logo}
                      </span>
                    )}
                  </div>
                  
                  {/* Vendor Name */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {vendor.name}
                  </h3>
                  
                  {/* Vendor Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {vendor.description}
                  </p>
                  
                  {/* Trust Badge */}
                  <div className="flex items-center justify-center space-x-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg py-2 px-4">
                    <CheckCircle className="w-5 h-5 text-primary-500" />
                    <span className="text-sm text-primary-600 dark:text-primary-400 font-semibold">
                      Tier 1 Partner
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section - After Clients */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Trusted by industry leaders across the globe
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <stat.icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/90 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 relative overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-max relative z-10">
          <div className="text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Quality Management?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Partner with AQSS for comprehensive quality solutions that drive excellence and compliance. Let's build a quality-driven future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-primary-600 px-10 py-5 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-2xl flex items-center justify-center space-x-2">
                  <Phone className="w-6 h-6" />
                  <span>Schedule Consultation</span>
                </Link>
                <Link to="/services" className="border-2 border-white text-white px-10 py-5 rounded-xl font-semibold hover:bg-white/10 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Explore Services</span>
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
