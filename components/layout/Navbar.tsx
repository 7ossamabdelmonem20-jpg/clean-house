'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { NAV_LINKS, SITE_CONFIG } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // على صفحات الخدمات نخلي الـ navbar دايماً أبيض
  const isServicePage = pathname?.startsWith('/services');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // للروابط العادية اللي فيها # نعمل smooth scroll
  // للروابط اللي بتبدأ بـ / نروح للصفحة مباشرة
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);

    if (href.startsWith('/services')) {
      router.push(href);
      return;
    }

    // لو فيها # وإحنا على الـ home page نعمل scroll
    if (href.includes('#')) {
      const hash = href.split('#')[1];
      if (pathname === '/') {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(`/#${hash}`);
      }
      return;
    }

    router.push(href);
  };

  const isLight = !isServicePage && !scrolled;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
        isServicePage || scrolled ? 'glass shadow-lg py-2' : 'bg-transparent py-4'
      }`}
      role="banner"
    >
      <nav className="container-custom" aria-label="القائمة الرئيسية">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="كلين هاوس - الصفحة الرئيسية">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <span className="text-white text-lg font-black">C</span>
            </div>
            <div>
              <span className={`font-black text-xl tracking-tight ${isLight ? 'text-white' : 'text-blue-800'}`}>
                كلين هاوس
              </span>
              <span className={`block text-xs ${isLight ? 'text-blue-200' : 'text-gray-500'}`}>
                للتنظيف الاحترافي
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                        isLight
                          ? 'text-white/90 hover:text-white hover:bg-white/10'
                          : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                      }`}
                      aria-expanded={activeDropdown === link.label}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    <AnimatePresence>
                      {activeDropdown === link.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          role="menu"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setActiveDropdown(null)}
                              className="w-full flex items-center gap-3 px-4 py-3 text-right text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 transition-colors"
                              role="menuitem"
                            >
                              <span className="text-base">{item.icon}</span>
                              {item.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                      isLight
                        ? 'text-white/90 hover:text-white hover:bg-white/10'
                        : 'text-gray-700 hover:text-blue-700 hover:bg-blue-50'
                    }`}
                  >
                    {link.label}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* CTA Phone */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE_CONFIG.tel}
              className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold py-2.5 px-5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg text-sm"
              aria-label="اتصل بنا"
            >
              <Phone size={15} />
              اتصل الآن
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden p-2 rounded-lg ${isLight ? 'text-white' : 'text-gray-700'}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-xl p-4 space-y-1">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <button
                      onClick={() => !link.dropdown && handleNavClick(link.href)}
                      className="w-full text-right px-4 py-3 rounded-xl text-gray-700 font-semibold hover:bg-blue-50 hover:text-blue-700 transition-colors flex items-center justify-between"
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown size={16} />}
                    </button>
                    {link.dropdown && (
                      <div className="mr-4 mt-1 space-y-1 border-r-2 border-blue-100 pr-4">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="w-full text-right flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                          >
                            <span>{item.icon}</span>
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-2 border-t border-gray-100 flex gap-2">
                  <a href={SITE_CONFIG.tel} className="flex-1 btn-primary justify-center text-sm py-2.5">
                    <Phone size={15} /> اتصل الآن
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
