"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";
import { ICON_MAP } from "@/utils/iconMap";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const isServicePage = pathname?.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    if (href.startsWith("/services")) { router.push(href); return; }
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      if (pathname === "/") { document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }); }
      else { router.push(`/#${hash}`); }
      return;
    }
    router.push(href);
  };

  const isTransparent = !isServicePage && !scrolled;

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-400 ${
          isServicePage || scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
        role="banner"
      >
        <div className={`transition-all duration-400 ${isServicePage || scrolled ? "py-3" : "py-4"}`}>
          <nav className="container-custom" aria-label="القائمة الرئيسية">
            <div className="flex items-center justify-between">

              {/* Logo */}
              <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0" aria-label="كلين هاوس Clean House KSA">
                <div className="w-10 h-10 relative flex-shrink-0">
                  <Image src="/images/logo.png" alt="Clean House KSA" fill className="object-contain" priority />
                </div>
                <div>
                  <span className={`font-black text-lg tracking-tight block ${isTransparent ? "text-white" : "text-slate-900"}`}>
                    كلين هاوس
                  </span>
                  <span className={`block text-xs font-medium font-inter ${isTransparent ? "text-primary-200" : "text-teal-500"}`} lang="en">
                    Clean House KSA
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
                            isTransparent
                              ? "text-white/90 hover:text-white hover:bg-white/10"
                              : "text-slate-700 hover:text-primary-600 hover:bg-primary-50"
                          }`}
                          aria-expanded={activeDropdown === link.label}
                        >
                          {link.label}
                          <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.label ? "rotate-180" : ""}`} />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === link.label && (
                            <motion.div
                              initial={{ opacity: 0, y: -8, scale: 0.97 }}
                              animate={{ opacity: 1, y: 0, scale: 1 }}
                              exit={{ opacity: 0, y: -8, scale: 0.97 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full right-0 mt-2 w-56 bg-white rounded-2xl shadow-card-hover border border-slate-100 overflow-hidden z-50"
                            >
                              {link.dropdown.map((item) => {
                                const DropIcon = ICON_MAP[item.icon];
                                return (
                                  <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setActiveDropdown(null)}
                                    className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                                  >
                                    {DropIcon && <DropIcon size={16} className="text-teal-500 flex-shrink-0" strokeWidth={1.75} />}
                                    {item.label}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className={`px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 ${
                          isTransparent
                            ? "text-white/90 hover:text-white hover:bg-white/10"
                            : "text-slate-700 hover:text-primary-600 hover:bg-primary-50"
                        }`}
                      >
                        {link.label}
                      </button>
                    )}
                  </div>
                ))}
              </div>

              {/* Desktop CTA */}
              <div className="hidden lg:flex items-center gap-3">
                <a
                  href={SITE_CONFIG.tel}
                  className={`flex items-center gap-2 font-bold py-2.5 px-5 rounded-xl transition-all duration-200 text-sm ${
                    isTransparent
                      ? "bg-white/15 border border-white/30 text-white hover:bg-white/25"
                      : "bg-primary-500 text-white hover:bg-primary-600 shadow-sm"
                  }`}
                >
                  <Phone size={15} /> اتصل الآن
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-xl transition-colors ${
                  isTransparent ? "text-white hover:bg-white/10" : "text-slate-700 hover:bg-slate-100"
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-navy-900/60 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-100">
                <Link href="/" onClick={() => setIsOpen(false)} className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl overflow-hidden flex-shrink-0 bg-white border border-slate-100">
                    <Image src="/images/logo.png" alt="كلين هاوس Clean House KSA" width={36} height={36} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <span className="font-black text-slate-900 text-base block">كلين هاوس</span>
                    <span className="text-teal-500 text-xs font-inter font-medium" lang="en">Clean House KSA</span>
                  </div>
                </Link>
                {/* <button onClick={() => setIsOpen(false)} className="w-9 h-9 flex items-center justify-center rounded-xl text-slate-500 hover:bg-slate-100">
                  <X size={20} />
                </button> */}
              </div>

              {/* Links */}
              <div className="flex-1 overflow-y-auto p-4 space-y-0.5">
                {NAV_LINKS.map((link) => (
                  <div key={link.href}>
                    <button
                      onClick={() => !link.dropdown && handleNavClick(link.href)}
                      className="w-full text-right px-4 py-3 rounded-xl text-slate-700 font-semibold hover:bg-primary-50 hover:text-primary-600 transition-colors flex items-center justify-between text-sm"
                    >
                      <span>{link.label}</span>
                      {link.dropdown && <ChevronDown size={15} className="text-slate-400" />}
                    </button>
                    {link.dropdown && (
                      <div className="mr-4 mt-1 mb-2 space-y-0.5 border-r-2 border-primary-100 pr-3">
                        {link.dropdown.map((item) => {
                          const MobIcon = ICON_MAP[item.icon];
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                            >
                              {MobIcon && <MobIcon size={15} className="text-teal-500 flex-shrink-0" strokeWidth={1.75} />}
                              <span>{item.label}</span>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer CTAs */}
              <div className="p-4 border-t border-slate-100 space-y-3">
                <a
                  href={SITE_CONFIG.whatsapp}
                  target="_blank" rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  واتساب
                </a>
                <a
                  href={SITE_CONFIG.tel}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  <Phone size={16} /> اتصل الآن
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
