import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Users, FileText, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Shield,
      title: 'ISO Certification Consultancy',
      shortDescription: 'Complete ISO certification support from documentation to audit',
      fullDescription: 'We provide end-to-end ISO certification services including gap analysis, documentation support, implementation assistance, internal audits, and final certification support.',
      features: [
        'ISO 9001:2015 Quality Management',
        'ISO 14001:2015 Environmental Management',
        'ISO 45001:2018 Occupational Health & Safety',
        'IATF 16949:2016 Automotive Quality',
        'Gap Analysis & Documentation',
        'Implementation Support',
        'Internal Audits',
        'Certification Assistance'
      ],
      benefits: [
        'Enhanced credibility and market reputation',
        'Improved operational efficiency',
        'Better risk management',
        'Compliance with international standards',
        'Increased customer satisfaction'
      ]
    },
    {
      id: 2,
      icon: FileText,
      title: 'Product Documentation',
      shortDescription: 'Comprehensive quality documentation including PPAP, APQP, SPC, MSA',
      fullDescription: 'Expert support for automotive quality documentation including Production Part Approval Process (PPAP), Advanced Product Quality Planning (APQP), Statistical Process Control (SPC), and Measurement System Analysis (MSA).',
      features: [
        'PPAP Packages (Levels 1-5)',
        'APQP Phase Documentation',
        'SPC Implementation & Analysis',
        'MSA Studies (Gage R&R)',
        'FMEA Documentation',
        'Control Plans',
        'Process Flow Diagrams',
        'Dimensional Reports'
      ],
      benefits: [
        'Compliance with automotive standards',
        'Reduced production issues',
        'Better process control',
        'Improved supplier relationships',
        'Enhanced product quality'
      ]
    },
    {
      id: 3,
      icon: Users,
      title: 'Training Programs',
      shortDescription: 'Comprehensive training on quality standards and best practices',
      fullDescription: 'Customized training programs for quality management systems, internal auditing, specific standards requirements, and quality tools implementation.',
      features: [
        'ISO Standards Awareness Training',
        'Internal Auditor Training',
        'Quality Tools & Techniques',
        'Documentation Management',
        'Root Cause Analysis',
        'Problem-Solving Methods',
        'Leadership Training',
        'Customized Workshops'
      ],
      benefits: [
        'Skilled workforce',
        'Better implementation',
        'Continuous improvement culture',
        'Reduced errors and rework',
        'Enhanced team performance'
      ]
    },
    {
      id: 4,
      icon: Award,
      title: 'Internal Audits',
      shortDescription: 'Professional internal audit services for compliance and improvement',
      fullDescription: 'Comprehensive internal audit services to ensure compliance, identify improvement opportunities, and prepare for external audits.',
      features: [
        'System Audits',
        'Process Audits',
        'Product Audits',
        'Compliance Audits',
        'Supplier Audits',
        'Audit Planning & Execution',
        'Non-conformance Reporting',
        'Follow-up & Verification'
      ],
      benefits: [
        'Audit readiness',
        'Compliance assurance',
        'Risk identification',
        'Process improvement',
        'External audit success'
      ]
    }
  ];

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-16">
        <div className="container-max text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Comprehensive quality solutions for automotive and non-automotive industries
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {service.shortDescription}
                      </p>
                      
                      <button
                        onClick={() => toggleService(service.id)}
                        className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
                      >
                        <span className="font-medium">
                          {expandedService === service.id ? 'Show Less' : 'Learn More'}
                        </span>
                        {expandedService === service.id ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedService === service.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
                      >
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          {service.fullDescription}
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {feature}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Benefits
                            </h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start space-x-2">
                                  <Award className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-gray-600 dark:text-gray-400">
                                    {benefit}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
              We deliver exceptional value through expertise, innovation, and commitment
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <Shield className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Expert Team
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  16+ years of experience in quality management and certification
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <Award className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Proven Track Record
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Successfully certified 500+ clients across various industries
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <Users className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  Customized Solutions
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Tailored services to meet your specific industry requirements
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Services;
