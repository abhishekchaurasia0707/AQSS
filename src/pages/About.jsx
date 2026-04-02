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
    { icon: Target, title: 'Mission', description: 'To deliver excellence in quality certification and consulting services' },
    { icon: Shield, title: 'Vision', description: 'To be the preferred quality partner for industries globally' },
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

      <section className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Story</h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                Advance Quality Service and Solution (AQSS) was established in 2018 in Pune with a vision to provide exceptional quality certification and consulting services.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                With over 6 years of experience, we've successfully helped more than 500 clients achieve their quality goals through ISO certification, quality documentation, training programs, and internal audits.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                Our expertise spans both automotive and non-automotive industries, making us a versatile partner for all your quality needs.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 rounded-2xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4 md:gap-6">
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">500+</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Clients</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">1000+</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Certifications</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">6+</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Years</p>
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">98%</h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Success</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
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
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Meet Our Director</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Led by industry expertise and a vision for excellence
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Director Image */}
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 opacity-10"></div>
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-12 h-12 md:w-16 md:h-16 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      Director Name
                    </h3>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                      Founder & Director
                    </p>
                  </div>
                </div>
              </div>

              {/* Director Information */}
              <div className="p-6 md:p-12">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Leadership & Vision
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    With over 16+ years of extensive experience in quality management systems and automotive industry standards, our director brings unparalleled expertise to AQSS. Having worked with numerous multinational corporations and helped achieve 500+ certifications, our leadership ensures the highest standards of quality consulting and implementation.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Expertise Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">ISO 9001:2015 QMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">IATF 16949:2016</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">ISO 14001:2015 EMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">ISO 45001:2018 OHSMS</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">PPAP & APQP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 dark:text-gray-400">SPC & MSA</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Achievements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">500+</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Certifications</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">16+</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl md:text-2xl font-bold text-primary-600 dark:text-primary-400 mb-1">100%</div>
                      <div className="text-xs md:text-sm text-gray-600 dark:text-gray-400">Success Rate</div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 italic">
                    "Quality is not an act, it is a habit. Our commitment to excellence drives every client engagement and ensures sustainable business success."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              From a small startup to an industry leader, our journey reflects commitment to excellence and innovation
            </p>
          </div>

          {/* Journey Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
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
              <div key={milestone.year} className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:text-left md:pl-8 md:order-2'}`}>
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
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
                
                {/* Timeline Dot - Centered on mobile */}
                <div className="hidden md:block w-2/12 flex justify-center">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      {milestone.year.slice(-2)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full animate-ping opacity-20"></div>
                  </div>
                </div>
                
                {/* Mobile Timeline Dot */}
                <div className="md:hidden absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-10">
                  {milestone.year.slice(-2)}
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
