import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Award, Users, FileText, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';

const Services = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 1,
      icon: Shield,
      title: 'Management System Consultancy',
      shortDescription: 'Comprehensive ISO certification and management system implementation',
      fullDescription: 'We provide end-to-end management system consultancy services including gap analysis, documentation, implementation, internal audits, and certification support for various international standards.',
      features: [
        'ISO 9001:2015 – Quality Management System (QMS)',
        'ISO 14001:2015 – Environmental Management System (EMS)',
        'ISO 45001:2018 – Occupational Health & Safety Management System (OHSMS)',
        'IATF 16949:2016 – Automotive Quality Management System',
        'ISO 22000 / HACCP – Food Safety Management System',
        'ISO 13485 – Medical Devices Quality Management System',
        'ISO 27001 – Information Security Management System',
        'ISO 50001 – Energy Management System',
        'Integrated Management System (IMS)'
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
      icon: Award,
      title: 'Product Certification & Regulatory Services',
      shortDescription: 'Complete support for product certifications and regulatory compliance',
      fullDescription: 'Expert guidance for product certifications, regulatory compliance, and meeting customer-specific requirements across various industries.',
      features: [
        'CE Marking',
        'BIS Certification',
        'MSME Sustainable (ZED) Certification',
        'RoHS & REACH Compliance',
        'Factory Compliance & Legal Compliance Support',
        'Customer-Specific Requirements (CSR) Implementation'
      ],
      benefits: [
        'Market access expansion',
        'Regulatory compliance assurance',
        'Enhanced product credibility',
        'Reduced compliance risks',
        'Global market readiness'
      ]
    },
    {
      id: 3,
      icon: FileText,
      title: 'Automotive Core Tools',
      shortDescription: 'Expert implementation of automotive quality core tools',
      fullDescription: 'Comprehensive support for automotive core tools implementation including APQP, PPAP, FMEA, Control Plans, SPC, and MSA.',
      features: [
        'APQP (Advanced Product Quality Planning)',
        'PPAP (Production Part Approval Process)',
        'PFMEA / DFMEA',
        'Control Plan',
        'SPC (Statistical Process Control)',
        'MSA (Measurement System Analysis)'
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
      id: 4,
      icon: Users,
      title: 'Quality & Manufacturing Excellence',
      shortDescription: 'Lean manufacturing and quality improvement methodologies',
      fullDescription: 'Implementation of world-class manufacturing practices including Lean, 5S, Kaizen, and other quality excellence methodologies.',
      features: [
        'Lean Manufacturing',
        '5S Workplace Management',
        'Kaizen Implementation',
        'Poka-Yoke (Mistake Proofing)',
        'Visual Management',
        'Standard Operating Procedures (SOPs)',
        'Work Instructions (WIs)',
        'Process Flow Diagrams',
        'Risk Assessment (HIRA)',
        'Quality Plans',
        'Inspection Plans',
        'Process Validation'
      ],
      benefits: [
        'Improved productivity',
        'Reduced waste',
        'Better workplace organization',
        'Enhanced quality',
        'Continuous improvement culture'
      ]
    },
    {
      id: 5,
      icon: Shield,
      title: 'Audit Services',
      shortDescription: 'Professional audit services for compliance and improvement',
      fullDescription: 'Comprehensive audit services including internal audits, supplier audits, process audits, and certification audit support.',
      features: [
        'Internal Quality Audits',
        'Supplier Audits',
        'Process Audits',
        'Product Audits',
        'Layered Process Audits (LPA)',
        'Customer Audit Preparation',
        'Certification Audit Support',
        'Gap Analysis Audits',
        'NC Closure & CAPA Support'
      ],
      benefits: [
        'Audit readiness',
        'Compliance assurance',
        'Risk identification',
        'Process improvement',
        'External audit success'
      ]
    },
    {
      id: 6,
      icon: FileText,
      title: 'Documentation Services',
      shortDescription: 'Complete quality documentation and system documentation support',
      fullDescription: 'Expert documentation services for quality management systems, procedures, work instructions, and all required quality documents.',
      features: [
        'Quality Manual',
        'Procedures',
        'SOPs & Work Instructions',
        'Process Flow Charts',
        'Formats & Registers',
        'Risk & Opportunity Register',
        'HIRA Register',
        'Quality Plans',
        'Control Plans',
        'APQP Documentation',
        'PPAP Documentation',
        'PFMEA / DFMEA',
        'Inspection Reports',
        'Management Review Documents',
        'KPI Development & Monitoring',
        'Calibration System Documentation'
      ],
      benefits: [
        'Comprehensive documentation',
        'Compliance readiness',
        'Process standardization',
        'Knowledge preservation',
        'Audit preparation'
      ]
    },
    {
      id: 7,
      icon: Users,
      title: 'Training Programs',
      shortDescription: 'Comprehensive training on quality standards and best practices',
      fullDescription: 'Customized training programs for quality management systems, internal auditing, specific standards requirements, and quality tools implementation.',
      features: [
        'ISO 9001 Awareness & Implementation',
        'IATF 16949 Awareness',
        'ISO 14001 & ISO 45001 Training',
        'Internal Auditor Training',
        'Automotive Core Tools Training',
        'Lean Manufacturing & 5S',
        'Problem Solving (8D, 5 Why)',
        'Root Cause Analysis',
        'Statistical Quality Tools',
        'Customer-Specific Requirements (CSR)',
        'Health, Safety & Environment (HSE)',
        'Good Documentation Practices (GDP)'
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
      id: 8,
      icon: Award,
      title: 'Industrial Engineering & Process Improvement',
      shortDescription: 'Process optimization and productivity improvement services',
      fullDescription: 'Industrial engineering services for process optimization, productivity improvement, and manufacturing excellence.',
      features: [
        'Production Planning & Control (PPC)',
        'Process Optimization',
        'Productivity Improvement',
        'Plant Layout Improvement',
        'Capacity Planning',
        'OEE Improvement',
        'Cost Reduction Projects',
        'Waste Elimination',
        'Process Standardization'
      ],
      benefits: [
        'Increased productivity',
        'Cost reduction',
        'Better resource utilization',
        'Improved efficiency',
        'Competitive advantage'
      ]
    },
    {
      id: 9,
      icon: Shield,
      title: 'Business Support Services',
      shortDescription: 'Strategic business support and consultancy services',
      fullDescription: 'Comprehensive business support services including vendor development, new product development support, and management consultancy.',
      features: [
        'Vendor Development',
        'New Product Development (NPD) Support',
        'Technical Documentation',
        'Project Management',
        'Business Process Improvement',
        'Regulatory Compliance Support',
        'Management Consultancy',
        'Quality System Maintenance'
      ],
      benefits: [
        'Strategic growth',
        'Better vendor relationships',
        'Faster product development',
        'Process excellence',
        'Business continuity'
      ]
    },
    {
      id: 10,
      icon: Users,
      title: 'Industries We Serve',
      shortDescription: 'Serving diverse industries with specialized quality solutions',
      fullDescription: 'We provide quality consultancy services across a wide range of manufacturing and service industries.',
      features: [
        'Automotive Components',
        'Wiring Harness Manufacturing',
        'Electrical & Electronics',
        'Control Panel Manufacturing',
        'Sheet Metal Fabrication',
        'Precision Machining',
        'Casting & Foundry',
        'Pharmaceuticals',
        'Food Processing',
        'Packaging Industries',
        'Medical Devices',
        'Plastic & Rubber Industries',
        'Engineering Industries',
        'Service Organizations'
      ],
      benefits: [
        'Industry-specific expertise',
        'Tailored solutions',
        'Deep domain knowledge',
        'Proven track record',
        'Comprehensive support'
      ]
    }
  ];

  const toggleService = (serviceId) => {
    console.log('Toggle service called:', serviceId, 'Current expanded:', expandedService);
    setExpandedService(prevId => prevId === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen">
      <section className="hero-gradient py-16">
        <div className="container-max text-center">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our <span className="gradient-text">Services</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At Advance Quality Service and Solution, we provide end-to-end consultancy, training, auditing, documentation, and certification support services to help organizations achieve operational excellence, regulatory compliance, and continual improvement.
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
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggleService(service.id);
                        }}
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

                  <AnimatePresence key={`service-${service.id}`}>
                    {expandedService === service.id && (
                      <motion.div
                        key={`expanded-${service.id}`}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
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

      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-1 h-12 bg-gradient-to-b from-primary-600 to-secondary-600 rounded-full"></div>
                <h2 className="text-3xl md:text-4xl font-bold gradient-text">Our Commitment</h2>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                We are committed to delivering practical, cost-effective, and result-oriented consultancy solutions that enable organizations to improve quality, productivity, operational efficiency, customer satisfaction, and regulatory compliance. Our focus is on building robust management systems that support continual improvement and sustainable business growth while meeting national and international standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
