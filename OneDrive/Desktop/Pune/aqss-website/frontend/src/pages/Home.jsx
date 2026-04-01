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
  Calendar
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
      name: 'Tata Motors', 
      logo: 'TM',
      color: 'from-blue-600 to-blue-800',
      description: 'Leading automotive manufacturer'
    },
    { 
      name: 'Mahindra', 
      logo: 'M',
      color: 'from-red-600 to-red-800',
      description: 'Diversified industrial group'
    },
    { 
      name: 'Bajaj Auto', 
      logo: 'BA',
      color: 'from-orange-600 to-orange-800',
      description: 'Premier two-wheeler manufacturer'
    },
    { 
      name: 'Ashok Leyland', 
      logo: 'AL',
      color: 'from-green-600 to-green-800',
      description: 'Commercial vehicle specialist'
    },
    { 
      name: 'Hero MotoCorp', 
      logo: 'HM',
      color: 'from-purple-600 to-purple-800',
      description: 'World\'s largest two-wheeler manufacturer'
    },
    { 
      name: 'TVS Motor', 
      logo: 'TVS',
      color: 'from-indigo-600 to-indigo-800',
      description: 'Leading two-wheeler company'
    },
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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10"></div>
        <div className="container-max relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Advance <span className="gradient-text">Quality</span>
                  <br />
                  Service and Solution
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Delivering Excellence in Quality, Certification & Consulting
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link to="/services" className="btn-outline flex items-center justify-center space-x-2">
                  <span>Our Services</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <div className="flex items-center space-x-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">ISO Certified</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">Expert Team</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-600 dark:text-gray-400">6+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="w-full h-96 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary-600 dark:text-primary-400" />
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-secondary-600/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-secondary-600/20 to-primary-600/20 rounded-2xl transform -rotate-3"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
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
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg card-hover"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Advanced Quality Services Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center mb-12">
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
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Comprehensive Quality Management
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        End-to-end quality solutions from documentation to certification, ensuring compliance with international standards.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Process Optimization
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Advanced process improvement methodologies to enhance efficiency and reduce operational costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        Certification Excellence
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
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
                <Link to="/contact" className="border-2 border-primary-600 text-primary-600 dark:text-primary-400 px-6 py-3 rounded-lg font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-200 text-center">
                  Get Free Consultation
                </Link>
              </div>
            </div>

            {/* Right Side - Image Swapping Gallery */}
            <div className="relative">
              <ImageSwappingGallery />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-800">
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
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
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

      {/* Meet Our Director */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container-max">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our <span className="gradient-text">Director</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Led by 16+ years of expertise in quality management systems
            </p>
        </div>

          <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Director Image */}
                <div className="relative lg:col-span-1 h-96 md:h-[500px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600"></div>
                  <div className="relative z-10 h-full flex items-center justify-center">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Shield className="w-16 h-16 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Director Name
                    </h3>
                    <p className="text-white/90">
                      Founder & Director
                    </p>
                  </div>
                </div>

              {/* Director Info */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Leadership & Vision
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    With over 16+ years of extensive experience in quality management systems and automotive industry standards, our director brings unparalleled expertise to AQSS. Having worked with numerous multinational corporations and helped achieve 500+ certifications, our leadership ensures the highest standards of quality consulting and implementation.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Expertise Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">ISO 9001:2015 QMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">IATF 16949:2016</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">ISO 14001:2015 EMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">ISO 45001:2018 OHSMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">PPAP & APQP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">SPC & MSA</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">500+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">16+</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">100%</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-gray-600 dark:text-gray-400 italic">
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Trusted Clients
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proud to work with leading companies in the automotive industry
            </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  {/* Client Logo */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${client.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                    <span className="text-white font-bold text-2xl">
                      {client.logo}
                    </span>
                  </div>
                  
                  {/* Client Name */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {client.name}
                  </h3>
                  
                  {/* Client Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {client.description}
                  </p>
                  
                  {/* Trust Badge */}
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Trusted Partner
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <div className="text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your Quality Management?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Partner with AQSS for comprehensive quality solutions that drive excellence and compliance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Schedule Consultation</span>
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
