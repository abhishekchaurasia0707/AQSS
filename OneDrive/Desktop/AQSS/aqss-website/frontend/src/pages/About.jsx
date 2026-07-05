import { motion } from 'framer-motion';
import { Shield, Users, Award, Target, CheckCircle, Calendar } from 'lucide-react';

const About = () => {
  const milestones = [
    { 
      year: '2018', 
      title: 'Company Founded', 
      description: 'AQSS established in Pune with a vision to deliver excellence in quality management',
      icon: '🚀',
      achievement: 'Started with 3 clients'
    },
    { 
      year: '2019', 
      title: 'First ISO Certification', 
      description: 'Successfully certified first client with ISO 9001:2015 standard',
      icon: '🏆',
      achievement: '100% success rate'
    },
    { 
      year: '2020', 
      title: 'Automotive Excellence', 
      description: 'Added IATF 16949 expertise and expanded to automotive sector',
      icon: '🚗',
      achievement: '15+ automotive clients'
    },
    { 
      year: '2021', 
      title: '100+ Milestone', 
      description: 'Reached major milestone with 100+ successful certifications',
      icon: '💯',
      achievement: '100+ certifications'
    },
    { 
      year: '2022', 
      title: 'Training Academy', 
      description: 'Launched comprehensive training programs for quality professionals',
      icon: '🎓',
      achievement: '500+ professionals trained'
    },
    { 
      year: '2023', 
      title: 'Digital Transformation', 
      description: 'Implemented digital quality management solutions and remote auditing',
      icon: '💻',
      achievement: 'Digital QMS systems'
    },
    { 
      year: '2024', 
      title: 'Industry Leader', 
      description: 'Recognized as leading quality consulting firm in Maharashtra',
      icon: '👑',
      achievement: '500+ clients served'
    },
  ];

  const values = [
    { icon: Target, title: 'Mission', description: 'To provide practical, value-driven consultancy, training, and certification support services that enable organizations to achieve operational excellence, customer satisfaction, regulatory compliance, and sustainable business growth.' },
    { icon: Shield, title: 'Vision', description: 'To be a trusted and leading management consultancy organization, empowering businesses through quality excellence, continual improvement, and innovative management solutions.' },
    { icon: Users, title: 'Values', description: 'Integrity, Excellence, Innovation, Customer Focus' },
  ];

  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-16">
        <div className="container-max text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text">AQSS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Your trusted partner for quality certification and consulting since 2018
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">Our Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Empowering organizations with excellence in quality management since 2018
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border-l-4 border-primary-500">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Our Beginning</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Advance Quality Service and Solution was established in 2018 with the objective of helping organizations develop effective management systems, improve operational performance, and achieve compliance with national and international standards.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border-l-4 border-secondary-500">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-secondary-100 dark:bg-secondary-900 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-secondary-600 dark:text-secondary-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Our Expertise</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-2">
                      Since its inception, the company has been providing professional consultancy, training, auditing, and certification support services to manufacturing and service organizations.
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">ISO 9001</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">ISO 14001</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">ISO 45001</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">IATF 16949</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">CE Marking</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">BIS Certification</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">ZED Certification</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">5S</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">Lean Manufacturing</span>
                      <span className="px-2 py-0.5 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">Kaizen</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border-l-4 border-green-500">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                    <Shield className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Our Commitment</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Over the years, Advance Quality Service and Solution has earned the trust of its clients through its commitment to quality, integrity, and result-oriented consultancy. We work closely with organizations to develop practical management systems, optimize business processes, enhance customer satisfaction, improve productivity, and ensure continual improvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg border-l-4 border-blue-500">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Our Promise</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      Our team is dedicated to delivering customized solutions that meet customer-specific requirements while complying with applicable statutory, regulatory, and international standards. We strive to build long-term partnerships by providing value-added services that contribute to sustainable business growth and operational excellence.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-4">
              <div className="bg-gradient-to-br from-primary-600 to-secondary-600 rounded-3xl p-6 text-white shadow-2xl">
                <h3 className="text-xl font-bold mb-4 text-center">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
                    <div className="text-white/80 text-sm">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">1000+</div>
                    <div className="text-white/80 text-sm">Certifications</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">6+</div>
                    <div className="text-white/80 text-sm">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold mb-1">98%</div>
                    <div className="text-white/80 text-sm">Success Rate</div>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Expert consultants with industry experience</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Customized solutions for your needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Proven track record of success</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Comprehensive support throughout journey</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">Long-term partnership approach</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Mission, Vision & Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div key={value.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center">
                <value.icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold mb-4">
              Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Meet Our Founder</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Visionary leadership driving excellence in quality management
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Director Image Side */}
                <div className="lg:col-span-2 relative bg-gradient-to-br from-primary-600 via-primary-700 to-secondary-600 p-8 md:p-12 flex flex-col items-center justify-center text-white">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative z-10 text-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white/30 shadow-2xl">
                      <Shield className="w-16 h-16 md:w-20 md:h-20 text-white" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">Mr. Ashish Sinha</h3>
                    <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <span className="text-sm font-medium">Founder & Director</span>
                    </div>
                  </div>
                </div>

                {/* Director Information Side */}
                <div className="lg:col-span-3 p-8 md:p-12">
                  <div className="mb-8">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                        About the Founder
                      </h3>
                    </div>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      <span className="font-semibold text-gray-900 dark:text-white">Mr. Ashish Sinha</span>, Founder of Advance Quality Service and Solution, is a B.Tech graduate with more than <span className="font-semibold text-primary-600 dark:text-primary-400">25 years</span> of rich industrial and consultancy experience across a wide range of manufacturing and service sectors.
                    </p>
                    <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      He possesses extensive expertise in Quality Management Systems, Engineering Industries, Automotive Components, Electrical & Electronics, Wiring Harness Manufacturing, Precision Machining, Sheet Metal Fabrication, Control Panel Manufacturing, Packaging, Food Processing, Pharmaceuticals, Medical Devices, Industrial Products, and Distribution Systems.
                    </p>
                  </div>

                  {/* Expertise Tags */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                      <Award className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
                      Core Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {['ISO 9001', 'ISO 14001', 'ISO 45001', 'IATF 16949', 'CE Marking', 'BIS Certification', 'ZED Certification', 'Lean Manufacturing', '5S & Kaizen', 'APQP & PPAP', 'FMEA', 'Internal Audits'].map((skill, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/30 dark:to-secondary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-medium border border-primary-200 dark:border-primary-700/50">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-900/40 rounded-2xl p-4 text-center border border-primary-200 dark:border-primary-700/50">
                      <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">25+</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                    <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 dark:from-secondary-900/20 dark:to-secondary-900/40 rounded-2xl p-4 text-center border border-secondary-200 dark:border-secondary-700/50">
                      <div className="text-3xl md:text-4xl font-bold text-secondary-600 dark:text-secondary-400 mb-1">500+</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/40 rounded-2xl p-4 text-center border border-green-200 dark:border-green-700/50">
                      <div className="text-3xl md:text-4xl font-bold text-green-600 dark:text-green-400 mb-1">100%</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="relative z-10">
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <span className="text-2xl">"</span>
                          </div>
                        </div>
                        <div>
                          <p className="text-base md:text-lg font-medium leading-relaxed mb-3">
                            Quality is not an act, it is a habit. Our commitment to excellence drives every client engagement and ensures sustainable business success.
                          </p>
                          <p className="text-sm text-white/80">— Mr. Ashish Sinha</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From a small startup to an industry leader, our journey reflects commitment to excellence and innovation
            </p>
          </div>

          {/* Journey Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl mb-2">🚀</div>
              <div className="text-xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">2018</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Founded</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl mb-2">👥</div>
              <div className="text-xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">500+</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Clients</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl mb-2">🏆</div>
              <div className="text-xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">1000+</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Certifications</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-lg">
              <div className="text-2xl md:text-3xl mb-2">🎯</div>
              <div className="text-xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">100%</div>
              <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Hidden on mobile */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-600 via-secondary-600 to-primary-600 rounded-full"></div>
            
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center relative`}>
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:order-2'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative">
                    {/* Mobile Timeline Dot - Positioned relative to card */}
                    <div className="md:hidden absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                      {milestone.year.slice(-2)}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className={`text-3xl md:text-4xl ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                        {milestone.icon}
                      </div>
                      <div className={`text-lg md:text-2xl font-bold text-primary-600 dark:text-primary-400 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                        {milestone.year}
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                      {milestone.description}
                    </p>
                    <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/30 px-3 md:px-4 py-2 rounded-full">
                      <span className="text-xs md:text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {milestone.achievement}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Timeline Dot - Desktop only */}
                <div className="hidden md:block w-2/12 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Journey CTA */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Success Story
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Be part of our continued journey towards excellence in quality management
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-200">
                  <span>Start Your Journey</span>
                </a>
                <a href="/services" className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200">
                  <span>Our Services</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
