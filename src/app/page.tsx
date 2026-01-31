"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image.js';
import { 
  ShieldCheck, Users, ArrowRight, Wallet, TrendingUp, 
  Building2, Activity, ChevronLeft, ChevronRight, CheckCircle2, Copy, Check,
  Menu, X
} from 'lucide-react';


// Refined Data for the Product Slider
const SLIDER_DATA = [
  {
    id: 1,
    title: "Instant Personal Credit",
    tagline: "Empowering your lifestyle with collateral-free credit lines that move at the speed of your life.",
    image: "/card1.png",
    features: [
      "Real-time digital approval",
      "No hidden processing fees",
      "Flexible tenure up to 60 months",
      "Zero paperwork environment"
    ]
  },
  {
    id: 2,
    title: "MSME Growth Capital",
    tagline: "Fueling small businesses with the working capital they need to become tomorrow's industry leaders.",
    image: "/card2.png",
    features: [
      "Customized repayment cycles",
      "Special rates for startups",
      "Higher eligibility thresholds",
      "Dedicated relationship manager"
    ]
  },
  {
    id: 3,
    title: "Smart Lifestyle Loans",
    tagline: "Upgrade your world. From tech gadgets to home renovations, get the funds you need without touching your savings.",
    image: "/card3.png",
    features: [
      "Instant top-up facilities",
      "Minimal documentation",
      "Interest on utilized amount only",
      "Direct merchant transfers"
    ]
  }
];

export default function YadavFinance() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % SLIDER_DATA.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + SLIDER_DATA.length) % SLIDER_DATA.length);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePos({ x, y });
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', () => setMousePos({ x: 0, y: 0 }));
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', () => setMousePos({ x: 0, y: 0 }));
      }
    };
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText('9034634807').then(() => {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-sm">Y</div>
            <span className="text-2xl font-bold tracking-tight text-slate-800 uppercase">YADAV <span className="text-blue-700">FINANCE</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#products" className="hover:text-blue-700 transition-colors">Products</a>
            <a href="#solutions" className="hover:text-blue-700 transition-colors">Solutions</a>
            <a href="#about" className="hover:text-blue-700 transition-colors">About Us</a>
            <a href="#contact" className="bg-blue-700 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200/50 active:scale-95">
              Apply Now
            </a>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(true)} className="text-slate-800">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center animate-fade-in-down">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-7 right-6 text-slate-800">
            <X size={30} />
          </button>
          <div className="flex flex-col items-center gap-10">
            <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800 hover:text-blue-700 transition-colors">Products</a>
            <a href="#solutions" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800 hover:text-blue-700 transition-colors">Solutions</a>
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-slate-800 hover:text-blue-700 transition-colors">About Us</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200/50 active:scale-95">
              Apply Now
            </a>
          </div>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative pt-36 pb-24 overflow-hidden bg-slate-50/50 perspective-1000">
        <div className="absolute top-0 right-0 -z-10 translate-x-1/3 -translate-y-1/4 blur-3xl opacity-30 pointer-events-none">
            <div className="aspect-square h-[800px] rounded-full bg-gradient-to-tr from-blue-600 to-indigo-400 animate-blob"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-bold mb-8 shadow-sm">
              <Activity size={16} className="animate-pulse"/>
              The Future of Digital Finance
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] mb-6 tracking-tight">
              Navigate your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600">Financial Journey.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
              Yadav Finance combines next-gen technology with personalized strategies to help you grow wealth, secure assets, and scale faster.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="bg-blue-700 text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-blue-800 transition-all shadow-xl shadow-blue-200/50 active:scale-95">
                Get Started <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          <div className="relative z-10 transition-transform duration-100 ease-out will-change-transform"
            style={{ transform: `rotateY(${mousePos.x * 12}deg) rotateX(${mousePos.y * -12}deg)`, transformStyle: 'preserve-3d' }}>
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.2)] border border-white/50 bg-white">
              <Image src="/hero.png" alt="Yadav Finance Dashboard" width={800} height={600} className="w-full h-auto object-cover transform scale-105" priority />
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-white py-16 border-y border-slate-100 relative z-20 shadow-[0_-20px_30px_rgba(255,255,255,1)]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100 text-center">
            <StatCard value="10k+" label="Active Clients" />
            <StatCard value="$500M+" label="Assets Managed" />
            <StatCard value="99.9%" label="Uptime" />
            <StatCard value="24/7" label="Advisory" />
          </div>
        </div>
      </section>

      {/* --- NEW PRODUCT SLIDER SECTION --- */}
      <section id="products" className="bg-slate-50 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative flex flex-col lg:flex-row items-center gap-12 bg-white rounded-[3rem] p-8 lg:p-16 shadow-xl border border-slate-100 transition-all duration-500">
            
            {/* Slider Image Area */}
            <div className="w-full lg:w-1/2 relative h-[300px] lg:h-[450px]">
              {SLIDER_DATA.map((slide, idx) => (
                <div key={slide.id} className={`absolute inset-0 transition-all duration-700 ease-in-out ${idx === currentSlide ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-12 scale-95 pointer-events-none"}`}>
                   <Image src={slide.image} alt={slide.title} fill className="object-contain" />
                </div>
              ))}
            </div>

            {/* Slider Content Area */}
            <div className="w-full lg:w-1/2">
              <p className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4">Our Products</p>
              <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6">{SLIDER_DATA[currentSlide].title}</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">{SLIDER_DATA[currentSlide].tagline}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {SLIDER_DATA[currentSlide].features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 size={20} className="text-blue-600" />
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <a href="#contact" className="inline-block bg-blue-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-200">
                  Apply Now
                </a>
                <a href="#contact" className="inline-block border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all">
                  Know More
                </a>
              </div>

              {/* Slider Navigation Controls */}
              <div className="flex items-center gap-6 mt-12">
                <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all active:scale-90">
                  <ChevronLeft size={24} />
                </button>
                <span className="font-bold text-slate-400">
                   <span className="text-slate-900">{currentSlide + 1}</span> / {SLIDER_DATA.length}
                </span>
                <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center hover:bg-white hover:shadow-lg transition-all active:scale-90">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-slate-600 mb-10">
            Have questions or ready to start your financial journey with us? Contact us today.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left bg-slate-50 p-10 rounded-2xl border border-slate-100">
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Our Office</h3>
              <p className="text-slate-600">Kurukshetra, Haryana</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Contact Info</h3>
              <div className="flex items-center gap-4">
                <p className="text-slate-600">Phone: 9034634807</p>
                <button 
                  onClick={handleCopy} 
                  className="text-sm font-bold text-blue-700 flex items-center gap-2 bg-blue-50 hover:bg-blue-100 transition-all px-4 py-2 rounded-lg active:scale-95"
                >
                  {isCopied ? (
                    <><Check size={16} /> Copied</>
                  ) : (
                    <><Copy size={16} /> Copy No</>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCTS CARDS SECTION --- */}
      <section id="solutions" className="py-28 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Financial products tailored for your growth.</h2>
          </div>
          <a href="#" className="text-blue-700 font-bold flex items-center gap-2 group bg-blue-50 px-6 py-3 rounded-full hover:bg-blue-100 transition-all">
            Explore all <ArrowRight size={18} />
          </a>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <ProductCard 
            icon={<Users className="text-white" size={24} />} 
            title="Retail Banking" 
            desc="Experience seamless savings and personalized credit solutions designed for the modern individual." 
            color="bg-blue-600" 
          />
          <ProductCard 
            icon={<Building2 className="text-white" size={24} />} 
            title="Corporate Lending" 
            desc="Strategic financial backing for large-scale operations, acquisitions, and long-term infrastructure projects." 
            color="bg-indigo-600" 
          />
          <ProductCard 
            icon={<TrendingUp className="text-white" size={24} />} 
            title="Strategic Wealth" 
            desc="Data-driven investment strategies and asset management to build a legacy of generational wealth." 
            color="bg-slate-900" 
          />
        </div>
      </section>
    </div>
  );
}

function StatCard({ value, label }: { value: string, label: string }) {
  return (
    <div className="p-4">
      <p className="text-4xl font-extrabold text-blue-700">{value}</p>
      <p className="text-sm text-slate-600 font-bold uppercase tracking-wider mt-2">{label}</p>
    </div>
  );
}

function ProductCard({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) {
  return (
    <div className="group p-8 border border-slate-100 rounded-[2rem] hover:border-blue-200 hover:shadow-2xl transition-all bg-white hover:-translate-y-1">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-8 shadow-md`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
      <p className="text-slate-600 leading-relaxed mb-8">{desc}</p>
      <a href="#contact" className="text-sm font-bold text-blue-700 flex items-center gap-2 group-hover:gap-3 transition-all">
        Learn More <ArrowRight size={16} />
      </a>
    </div>
  );
}