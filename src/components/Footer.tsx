import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-white text-slate-600 font-sans px-6 py-12 md:px-12 border-t border-slate-100">
       <div className="container mx-auto mb-6 px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4 pr-0 md:pr-8">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 via-pink-500 to-rose-400 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                DS
              </div>
              <span className="font-bold text-slate-900 text-xl tracking-tight">
                Dev<span className="text-pink-600">Stack</span>
              </span>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 font-medium text-xs text-slate-700">
              <a href="#github" className="hover:text-slate-900 transition-colors">GitHub</a>
              <a href="#twitter" className="hover:text-slate-900 transition-colors">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-900 transition-colors">LinkedIn</a>
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="md:col-span-7 grid grid-cols-3 gap-6 text-xs">
            {/* Product Column */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
                Product
              </h3>
              <ul className="space-y-2.5 text-slate-500">
                <li><a href="#home" className="hover:text-slate-900 transition-colors">Home</a></li>
                <li><a href="#technologies" className="hover:text-slate-900 transition-colors">Technologies</a></li>
                <li><a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a></li>
              </ul>
            </div>

            {/* Company Column */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
                Company
              </h3>
              <ul className="space-y-2.5 text-slate-500">
                <li><a href="#about" className="hover:text-slate-900 transition-colors">About</a></li>
                <li><a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a></li>
                <li><a href="#careers" className="hover:text-slate-900 transition-colors">Careers</a></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 tracking-wider uppercase text-[11px]">
                Legal
              </h3>
              <ul className="space-y-2.5 text-slate-500">
                <li><a href="#privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-slate-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-slate-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;