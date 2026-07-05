import { motion } from 'framer-motion';
import { 
  Factory, 
  Cog, 
  Zap, 
  Beaker, 
  Building2, 
  Briefcase, 
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Industries = () => {
  const industryCategories = [
    {
      icon: Factory,
      title: 'Manufacturing Industries',
      color: 'from-blue-600 to-blue-800',
      items: [
        'Automotive Components',
        'Wiring Harness Manufacturing',
        'Electrical & Electronics',
        'Control Panel Manufacturing',
        'Precision Machining',
        'CNC Machining Industries',
        'Sheet Metal Fabrication',
        'Metal Stamping & Press Shop',
        'Welding & Fabrication',
        'Aluminium & Ferrous Castings',
        'Foundry Industries',
        'Powder Coating & Surface Treatment',
        'Plastic & Rubber Products',
        'Fasteners (Nut, Bolt & Screws)',
        'Steel Fabrication'
      ]
    },
    {
      icon: Cog,
      title: 'Engineering Industries',
      color: 'from-purple-600 to-purple-800',
      items: [
        'Heavy Engineering',
        'General Engineering',
        'Industrial Equipment Manufacturing',
        'Machinery Manufacturing',
        'Industrial Automation',
        'Material Handling Equipment',
        'Pumps & Valves',
        'Hydraulic & Pneumatic Equipment'
      ]
    },
    {
      icon: Zap,
      title: 'Electrical & Electronic Industries',
      color: 'from-yellow-600 to-yellow-800',
      items: [
        'Electrical Panels',
        'Switchgear Manufacturing',
        'Cable & Wire Manufacturing',
        'Electrical Accessories',
        'PCB Assembly',
        'Electronic Equipment Manufacturing'
      ]
    },
    {
      icon: Beaker,
      title: 'Process Industries',
      color: 'from-green-600 to-green-800',
      items: [
        'Food Processing',
        'Pharmaceutical Manufacturing',
        'Medical Devices',
        'Cosmetics Manufacturing',
        'Packaging Industries',
        'Chemical Industries'
      ]
    },
    {
      icon: Building2,
      title: 'Infrastructure & Construction',
      color: 'from-orange-600 to-orange-800',
      items: [
        'Construction Material Manufacturers',
        'HVAC Equipment Manufacturers',
        'Fire Protection System Manufacturers',
        'Building Material Industries'
      ]
    },
    {
      icon: Briefcase,
      title: 'Service Industries',
      color: 'from-teal-600 to-teal-800',
      items: [
        'Warehousing & Logistics',
        'Trading Organizations',
        'Engineering Service Providers',
        'Maintenance Service Providers',
        'Installation & Commissioning Services',
        'Calibration Laboratories',
        'Educational Institutions',
        'Information Technology (IT) Services'
      ]
    },
    {
      icon: Rocket,
      title: 'MSMEs & Start-ups',
      color: 'from-red-600 to-red-800',
      items: [
        'Micro, Small & Medium Enterprises (MSMEs)',
        'Start-up Companies',
        'Export-Oriented Units (EOUs)'
      ]
    }
  ];

  const supportAreas = [
    'Management System Implementation',
    'Customer Audit Preparation',
    'Process Improvement',
    'Regulatory Compliance',
    'Product Certification',
    'Supplier Development',
    'Lean Manufacturing',
    'Operational Excellence',
    'Business Process Optimization'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-16">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Industries We <span className="gradient-text">Serve</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
              At Advance Quality Service and Solution, we provide consultancy, training, auditing, documentation, and certification support services to organizations across a wide range of industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Categories */}
      <section className="py-16">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industryCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`bg-gradient-to-r ${category.color} p-6`}>
                  <div className="flex items-center space-x-3">
                    <category.icon className="w-8 h-8 text-white" />
                    <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Areas Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              We Support Organizations In
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-center space-x-3"
              >
                <div className="w-10 h-10 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-gray-900 dark:text-white font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Industry-Specific Expertise
            </h2>
            <p className="text-xl text-white/90 leading-relaxed">
              Our expertise enables us to deliver practical, customized, and value-added solutions that meet the unique requirements of each industry while ensuring compliance with national and international standards.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;
