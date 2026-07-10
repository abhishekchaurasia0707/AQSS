import { motion } from 'framer-motion';
import { CheckCircle, Award, Building2 } from 'lucide-react';

const Clients = () => {
  const directClients = [
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
              Our <span className="gradient-text">Clients</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Proud to work with leading organizations across various industries as direct reputed clients and Tier 1 vendor respectively
            </p>
          </motion.div>
        </div>
      </section>

      {/* Direct Reputed Clients Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Building2 className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Our Direct Reputed Clients
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Trusted by industry leaders for quality management solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {directClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  {/* Client Logo */}
                  <div className={`w-20 h-20 ${client.logoUrl ? 'bg-transparent' : `bg-gradient-to-br ${client.color}`} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
                    {client.logoUrl ? (
                      <img 
                        src={client.logoUrl} 
                        alt={client.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-white font-bold text-2xl">
                        {client.logo}
                      </span>
                    )}
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tier 1 Vendor Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-rose-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Award className="w-8 h-8 text-primary-600" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Tier 1 Vendor Of
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Proud to serve as Tier 1 vendor for leading organizations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tier1Vendors.map((vendor, index) => (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-center">
                  {/* Vendor Logo */}
                  <div className={`w-20 h-20 ${vendor.logoUrl ? 'bg-transparent' : `bg-gradient-to-br ${vendor.color}`} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow duration-300 overflow-hidden`}>
                    {vendor.logoUrl ? (
                      <img 
                        src={vendor.logoUrl} 
                        alt={vendor.name}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span className="text-white font-bold text-2xl">
                        {vendor.logo}
                      </span>
                    )}
                  </div>
                  
                  {/* Vendor Name */}
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {vendor.name}
                  </h3>
                  
                  {/* Vendor Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {vendor.description}
                  </p>
                  
                  {/* Trust Badge */}
                  <div className="flex items-center justify-center space-x-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">
                      Tier 1 Partner
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Growing Client Family
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Partner with AQSS for comprehensive quality solutions that drive excellence and compliance.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center space-x-2 bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              <span>Get Started Today</span>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
