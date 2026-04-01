import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Shield, CheckCircle, Phone, Mail, ChevronRight } from 'lucide-react';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'About', path: '/about', icon: null },
    { name: 'Services', path: '/services', icon: null },
    { name: 'Contact', path: '/contact', icon: null },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-b border-gray-200/50 dark:border-gray-700/50'
        : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-100/50 dark:border-gray-800/50'
      }`}
    >
      <div className="container-max">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="group flex items-center space-x-3 transition-transform duration-200 hover:scale-105">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-600 via-primary-500 to-secondary-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Shield className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white dark:border-gray-900"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                AQSS
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400 font-medium">
                Advance Quality Service & Solution
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? 'bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-600 dark:text-primary-400 shadow-md'
                    : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800/50'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                {location.pathname === item.path && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg opacity-10"></div>
                )}
              </Link>
            ))}
          </div>

          {/* Enhanced Right side buttons */}
          <div className="flex items-center space-x-3">
            {/* Quick Contact Buttons */}
            <div className="hidden md:flex items-center space-x-2 mr-2">
              <a 
                href="tel:+919876543210" 
                className="p-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200 group"
                title="Call Us"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
              <a 
                href="mailto:aqssolution11@gmail.com" 
                className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200 group"
                title="Email Us"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              </a>
            </div>

            {/* Enhanced Dark mode toggle */}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                console.log('Toggle clicked, current state:', isDarkMode);
                setIsDarkMode(prev => {
                  const newState = !prev;
                  console.log('New state:', newState);
                  return newState;
                });
              }}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
              title="Toggle Theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>

            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="hidden md:flex items-center space-x-2 px-5 py-2.5 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <span>Get Quote</span>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Enhanced Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-600 text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-xl">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-700'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {location.pathname === item.path && (
                      <CheckCircle className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                    )}
                    <span>{item.name}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-gray-400" />
                </Link>
              ))}
              
              {/* Mobile CTA and Contact */}
              <div className="pt-4 space-y-3 border-t border-gray-200 dark:border-gray-700 mt-4">
                <Link 
                  to="/contact" 
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  <span>Get Free Consultation</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href="tel:+919876543210" 
                    className="p-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50 transition-all duration-200"
                  >
                    <Phone className="w-5 h-5" />
                  </a>
                  <a 
                    href="mailto:aqssolution11@gmail.com" 
                    className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-all duration-200"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
