"use client";

import React from 'react';
import { Linkedin, Twitter, Mail, ChevronRight, Activity } from 'lucide-react';

export default function ModernFooter() {
  return (
    <footer id="about" className="bg-slate-950 text-white pt-24 pb-12 px-6 border-t-[10px] border-blue-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        
        {/* Brand Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center font-bold text-xl shadow-[0_0_20px_rgba(29,78,216,0.3)]">
              Y
            </div>
            <span className="text-2xl font-bold tracking-tight uppercase">
              Yadav <span className="text-blue-500">Finance</span>
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed font-medium">
            Redefining the digital lending landscape with transparency, 
            cutting-edge technology, and human-centric financial strategies.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={<Linkedin size={18} />} />
            <SocialIcon icon={<Twitter size={18} />} />
            <SocialIcon icon={<Mail size={18} />} />
          </div>
        </div>

        {/* Legal & Policy Column */}
        <div>
          <h4 className="text-blue-500 font-black text-xs uppercase tracking-[0.2em] mb-10">Legal & Policy</h4>
          <ul className="space-y-4 text-slate-300 font-bold text-xs uppercase tracking-tight">
            <FooterLink text="Fair Practice Code" />
            <FooterLink text="Privacy Policy" />
            <FooterLink text="Investor Relations" />
            <FooterLink text="Grievance Redressal" />
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h4 className="text-blue-500 font-black text-xs uppercase tracking-[0.2em] mb-10">Resources</h4>
          <ul className="space-y-4 text-slate-300 font-bold text-xs uppercase tracking-tight">
            <FooterLink text="EMI Calculator" />
            <FooterLink text="Track Application" />
            <FooterLink text="Branch Locator" />
            <FooterLink text="Careers" />
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-blue-500 font-black text-xs uppercase tracking-[0.2em] mb-10">Contact Support</h4>
          <div className="space-y-8 font-bold text-xs uppercase tracking-tight">
            <div>
              <p className="text-slate-500 mb-2 tracking-[0.1em]">Toll Free Number</p>
              <p className="text-xl text-white font-black hover:text-blue-500 transition-colors cursor-pointer tracking-tighter">
                1800 555 9999
              </p>
            </div>
            <div>
              <p className="text-slate-500 mb-2 tracking-[0.1em]">Working Hours</p>
              <p className="text-white">09:30 AM - 06:30 PM</p>
              <p className="text-blue-500 lowercase opacity-60 font-medium tracking-normal">Monday to Friday</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">
        <p>&copy; {new Date().getFullYear()} Yadav Finance Technologies Limited.</p>
        <div className="flex gap-8 mt-4 md:mt-0 items-center">
          <span className="text-blue-700/50">CIN: U65999MH2024PLC123456</span>
          <div className="h-1 w-1 bg-slate-800 rounded-full"></div>
          <a href="#" className="hover:text-white transition-colors">RBI Guidelines</a>
          <div className="h-1 w-1 bg-slate-800 rounded-full"></div>
          <a href="#" className="hover:text-white transition-colors">Sitemap</a>
        </div>
      </div>
    </footer>
  );
}

// Sub-components for cleaner code
function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-all cursor-pointer group">
      {icon}
    </div>
  );
}

function FooterLink({ text }: { text: string }) {
  return (
    <li>
      <a href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
        <div className="w-1 h-1 bg-blue-700 rounded-full group-hover:w-2 transition-all duration-300"></div>
        {text}
      </a>
    </li>
  );
}