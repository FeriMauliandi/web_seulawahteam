import React, { useState, useEffect } from 'react';
import { FiMail, FiInstagram, FiLinkedin, FiCpu, FiTarget, FiAward, FiChevronLeft, FiChevronRight, FiX, FiMonitor, FiMenu } from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa';
import fotoFeri from './assets/feri.jpg';

import logoSeulawah from './assets/logo.jpeg';
import krti25 from './assets/krti2025.jpeg';
import RP1 from './assets/RP1.jpeg';
import krti from './assets/krti2024.jpeg';
import drone1 from './assets/krti1.jpeg';
import drone2 from './assets/krti.jpeg';
import drone3 from './assets/uav.jpeg';
import drone4 from './assets/uav1.png';
import drone5 from './assets/uav2.jpeg';
import drone6 from './assets/uav3.jpg';
import fw from './assets/fw.jpeg';
import fw2 from './assets/fw2.jpeg';
import lela from './assets/lela.jpeg';
import lela1 from './assets/lela1.jpeg';
import vtol from './assets/vtol.jpeg';
import vtol1 from './assets/vtol1.jpeg';
import logoUSK from './assets/Unsyiah.png';

// Definisi Palet Warna Solid & Diskrit (Berdasarkan Gambar):
const palette = {
  purple: '#dfa6ff',
  yellow: '#fdd853',
  rose: '#d69b8a',
  green: '#a7f471',
  neutral: '#e6e6e6',
};

const ProjectCard = ({ project, idx }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    if (project.images.length <= 1 || isLightboxOpen) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(timer);
  }, [currentIndex, isLightboxOpen, project.images.length]);

  useEffect(() => {
    if (isLightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isLightboxOpen]);

  return (
    <>
      <div
        className="bg-white rounded-xl p-6 md:p-8 card-hover border border-slate-200 scroll-reveal opacity-0 flex flex-col justify-between shadow-sm"
        data-animation="animate-scaleIn"
        style={{ animationDelay: `${idx * 0.1}s` }}
      >
        <div>
          {/* Kontainer Image Slider - Tanpa Efek Glow */}
          <div className="relative w-full h-56 md:h-64 rounded-lg overflow-hidden mb-6 bg-slate-100 border border-slate-200">
            <img
              src={project.images[currentIndex]}
              alt={`${project.title} - Slide ${currentIndex + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 cursor-zoom-in"
              onClick={() => setIsLightboxOpen(true)}
            />

            {/* Tombol Navigasi Solid */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 text-slate-800 p-2 rounded-full z-10 shadow-sm border border-slate-200"
                >
                  <FiChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white hover:bg-slate-50 text-slate-800 p-2 rounded-full z-10 shadow-sm border border-slate-200"
                >
                  <FiChevronRight size={20} />
                </button>
              </>
            )}

            {/* Indikator Titik Solid (Tanpa Blur/Glow) */}
            {project.images.length > 1 && (
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-white/80 px-2 py-1 rounded-full border border-slate-200">
                {project.images.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    onClick={() => setCurrentIndex(dotIdx)}
                    className={`h-2 rounded-full transition-all duration-300 ${currentIndex === dotIdx ? 'w-5' : 'w-2 bg-slate-300'}`}
                    style={{ backgroundColor: currentIndex === dotIdx ? project.hexColor : undefined }}
                  />
                ))}
              </div>
            )}
          </div>

          <div className="flex justify-between items-start mb-3">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{project.title}</h3>
          </div>

          {/* Badge Pastel Solid dengan Border Tegas */}
          <span
            className="px-3 py-1 rounded text-xs font-bold uppercase tracking-wider inline-block w-fit mb-4 border-2"
            style={{ backgroundColor: '#ffffff', color: '#111', borderColor: project.hexColor }}
          >
            {project.category}
          </span>

          <p className="text-slate-700 mb-6 leading-relaxed text-sm md:text-base font-medium">{project.description}</p>
        </div>

        {project.link && (
          <div className="mt-auto pt-4 border-t border-slate-100">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg transition-all font-bold border-2 w-full sm:w-auto hover:opacity-80"
              style={{ backgroundColor: project.hexColor, borderColor: project.hexColor, color: '#000' }}
            >
              <FiTarget size={18} /> EKSPLORASI DATA
            </a>
          </div>
        )}
      </div>

      {/* Lightbox dengan tema terang */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 p-4 md:p-10 cursor-zoom-out"
          onClick={() => setIsLightboxOpen(false)}
        >
          <button
            className="absolute top-6 right-6 text-slate-500 hover:text-slate-900 bg-white border border-slate-200 p-3 rounded-full transition-colors z-50 shadow-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <FiX size={28} />
          </button>

          <img
            src={project.images[currentIndex]}
            alt={`${project.title} Fullscreen`}
            className="max-w-full max-h-full object-contain rounded-xl shadow-lg cursor-default border border-slate-200 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          />

          {project.images.length > 1 && (
            <>
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 p-4 rounded-full transition-all z-50 shadow-md"
              >
                <FiChevronLeft size={32} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 p-4 rounded-full transition-all z-50 shadow-md"
              >
                <FiChevronRight size={32} />
              </button>
            </>
          )}

          <div
            className="absolute bottom-6 text-slate-900 text-sm font-mono font-bold tracking-widest bg-white border border-slate-200 px-4 py-2 rounded-lg shadow-sm"
          >
            FRAME {currentIndex + 1} / {project.images.length}
          </div>
        </div>
      )}
    </>
  );
};

export default function SeulawahTeamProfile() {
  const [activeTab, setActiveTab] = useState('fleet');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animation');
            if (animationClass) {
              entry.target.classList.add(animationClass);
              entry.target.classList.remove('opacity-0');
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const timeoutId = setTimeout(() => {
      const elements = document.querySelectorAll('.scroll-reveal');
      elements.forEach((el) => {
        if (el.classList.contains('opacity-0')) observer.observe(el);
      });
    }, 50);
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [activeTab]);

  const portfolioData = {
    fleet: [
      {
        id: 1,
        title: 'RACING PLANE',
        category: 'RP',
        description: 'Divisi yang berfokus pada kecepatan dan akurasi tinggi (Fast and Accurate). Wahana udara ini direkayasa khusus untuk mengoptimalkan sistem kendali dan aerodinamika agar mampu bermanuver secara presisi pada kecepatan maksimal di lintasan terbang otonom.',
        images: [RP1, drone3, drone1, drone2],
        hexColor: palette.yellow
      },
      {
        id: 2,
        title: 'FIXED WING',
        category: 'FW',
        description: 'Berfokus pada misi operasional seperti pemetaan dan pengiriman paket darurat. Wahana ini dituntut memiliki sistem navigasi waypoint otonom yang sangat presisi untuk menjatuhkan muatan logistik (payload dropping) tepat sasaran di zona simulasi bencana.',
        images: [fw, fw2],
        hexColor: palette.purple
      },
      {
        id: 3,
        title: 'VERTICAL TAKE-OFF AND LANDING',
        category: 'VTOL',
        description: 'Divisi pengembangan wahana dengan kemampuan lepas landas dan mendarat vertikal secara otonom. Dirancang untuk menjalankan misi penerbangan jarak jauh yang mampu beroperasi di area outdoor maupun indoor dengan sistem navigasi presisi tinggi, transisi terbang yang stabil, serta kemampuan autonomous mission planning',
        images: [krti, vtol, vtol1],
        hexColor: palette.rose
      },
      {
        id: 4,
        title: 'LONG ENDURANCE LOW ALTITUDE',
        category: 'LELA',
        description: 'Divisi yang menguji ketahanan terbang jarak jauh dengan tingkat efisiensi daya maksimal. Pesawat ini didesain khusus untuk misi pemantauan udara berkelanjutan, menjaga komunikasi telemetri, serta mendeteksi dan memvalidasi titik api (hotspot) hutan.',
        images: [drone4, drone5, lela,lela1],
        hexColor: palette.green
      }
    ],
    history: [
      {
        id: 1,
        role: 'Kontes Robot Terbang Indonesia (KRTI)',
        company: 'Pusat Prestasi Nasional - Kemdikbudristek',
        period: 'Kompetisi Tahunan',
        description: 'Partisipasi aktif dalam ajang pengembangan UAV tingkat nasional. Berfokus pada penyempurnaan kontrol penerbangan otonom, desain aerodinamika, dan sistem transmisi data yang tangguh.',
        hexColor: palette.purple
      },
      {
        id: 2,
        role: 'Kolaborasi Teknologi Pertanian (AMANAH)',
        company: 'Program AMANAH (Aneuk Muda Aceh Hebat)',
        period: '2024',
        description: 'Kolaborasi strategis dalam sektor teknologi pertanian melalui inisiatif nasional. Tim Seulawah dipercaya sebagai mitra teknis dalam pengembangan dan perakitan drone agrikultur untuk mendukung modernisasi pertanian di Aceh.',
        hexColor: palette.rose
      },
      {
        id: 3,
        role: 'Riset Akademik & Integrasi Sistem',
        company: 'Universitas Syiah Kuala',
        period: 'Berkelanjutan',
        description: 'Menerjemahkan riset inovatif dari Departemen Teknik Komputer ke dalam aplikasi industri. Tim kami berhasil mengimplementasikan algoritma Computer Vision dan sistem manajemen data di dunia nyata.',
        hexColor: palette.green
      }
    ]
  };

  // Garis kisi-kisi abu-abu terang diskrit (tanpa efek blur/glow)
  const FloatingGrid = () => (
    <div className="absolute inset-0 pointer-events-none opacity-50" style={{
      backgroundImage: `linear-gradient(#e2e8f0 1px, transparent 1px), linear-gradient(90deg, #e2e8f0 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
    }} />
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden font-sans selection:bg-slate-200 selection:text-slate-900">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;600;800&family=Inter:wght@400;500;700&family=Fira+Code:wght@400;700&display=swap');
        
        html { scroll-behavior: smooth; scroll-padding-top: 80px; }
        body { font-family: 'Inter', sans-serif; background-color: #f8fafc; }
        
        h1, h2, h3, h4, h5, h6, .display-font { font-family: 'Orbitron', sans-serif; }
        .font-mono { font-family: 'Fira Code', monospace; }
        
        @keyframes radar-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float-tech {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes slideInUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes slideInRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.9); } to { opacity: 1; transform: scale(1); } }
        
        .animate-slideInUp { animation: slideInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-slideInLeft { animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-slideInRight { animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .animate-scaleIn { animation: scaleIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        
        .card-hover { transition: transform 0.3s ease; }
        .card-hover:hover {
          transform: translateY(-5px);
        }

        /* Highlight block solid di belakang teks */
        .highlight-solid {
          position: relative;
          display: inline-block;
          z-index: 1;
        }
        .highlight-solid::before {
          content: '';
          position: absolute;
          bottom: 4px;
          left: -4px;
          right: -4px;
          height: 40%;
          background-color: ${palette.yellow};
          z-index: -1;
        }
      `}</style>
  
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Logo Gambar Seulawah Team */}
            <img
              src={logoSeulawah}
              alt="Logo Seulawah Team"
              className="h-10 w-auto object-contain"
            />

            <div className="text-sm md:text-2xl font-bold display-font tracking-wider text-slate-900">
              SEULAWAH TEAM
            </div>
          </div>

          {/* Desktop Menu - Disembunyikan di Mobile */}
          <div className="hidden md:flex items-center gap-8 text-sm font-mono tracking-widest font-bold text-slate-600">
            <a href="#hq" className="hover:text-slate-900 transition-colors">BERANDA</a>
            <a href="#mission" className="hover:text-slate-900 transition-colors">TENTANG KAMI</a>
            <a href="#fleet" className="hover:text-slate-900 transition-colors">DIVISI KRTI</a>
            <a href="#history" className="hover:text-slate-900 transition-colors">PENGALAMAN</a>
            <a href="#comms" className="hover:text-slate-900 transition-colors">KONTAK</a>
          </div>

          {/* Mobile Menu Button - Hanya Muncul di Mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 text-slate-900 hover:bg-slate-100 rounded-md transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown - Muncul ketika tombol ditekan */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl flex flex-col font-mono tracking-widest font-bold text-slate-600 text-sm">
            <a
              href="#hq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 border-t border-slate-100 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              BERANDA
            </a>
            <a
              href="#mission"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 border-t border-slate-100 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              TENTANG KAMI
            </a>
            <a
              href="#fleet"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 border-t border-slate-100 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              DIVISI KRTI
            </a>
            <a
              href="#history"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 border-t border-slate-100 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              PENGALAMAN
            </a>
            <a
              href="#comms"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-4 border-t border-slate-100 hover:bg-slate-50 hover:text-slate-900 transition-colors"
            >
              KONTAK
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hq" className="relative min-h-screen flex items-center justify-center px-6 pt-16 md:pt-4 pb-16 z-10">
        <FloatingGrid />
        <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-10 items-center mt-0 md:mt-0 relative">

          <div className="space-y-2 scroll-reveal opacity-0" data-animation="animate-slideInLeft">
            <div className="inline-flex items-center gap-2 px-2 py-1.5 md:py-2 bg-white border border-slate-200 text-slate-800 rounded-md text-[10px] md:text-xs font-mono font-bold tracking-widest uppercase">
              {/* Logo USK menggantikan span lingkaran */}
              <img
                src={logoUSK}
                alt="Logo USK"
                className="w-4 h-4 md:w-5 md:h-5 object-contain"
              />
              Universitas Syiah Kuala
            </div>
            {/* Judul Teks Solid */}
            <h1 className="text-2xl md:text-6xl lg:text-5xl font-bold leading-tight display-font text-slate-900">
              <span className="border-b-4 md:border-b-8 border-slate-900 pb-0 inline-block mb-1">
                SEULAWAH TEAM
              </span>
              <br />
              <span className="highlight-solid">UAVs RESEARCH TEAM</span>
            </h1>
            <p className="text-xs text-slate-800 leading-relaxed font-medium md:text-lg max-w-lg">
              Elevating Aerial Horizons: Pioneering UAV Technology at Universitas Syiah Kuala to Engineer Tomorrow's Solutions.
            </p>
            <div className="pt-0">
              <a
                href="#comms"
                className="inline-flex items-center gap-1 px-2 py-2 border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-xs md:text-sm hover:-translate-y-1 shadow-sm"
                style={{ backgroundColor: palette.green}}
              >
                <FiTarget size={18} /> SUPPORT OUR MISSION!!
              </a>
            </div>
          </div>

          <div className="relative scroll-reveal opacity-0 flex justify-center items-center w-full" data-animation="animate-slideInRight">

            {/* Wrapper untuk membatasi ukuran keseluruhan agar tidak terlalu besar */}
            <div className="relative w-[75%] sm:w-[60%] md:w-[80%] lg:w-[65%] max-w-[400px] mt-1 md:mt-0">

              {/* Garis Radar Diskrit Abu-abu (Tetap dipertahankan) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] h-[130%] border border-slate-300 rounded-full border-dashed z-0"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[105%] h-[105%] border border-slate-200 rounded-full border-dashed z-0"></div>

              {/* Kontainer Utama */}
              <div className="relative z-10 w-full aspect-[3/4] rounded-xl overflow-hidden bg-white border border-slate-200 p-2 shadow-xl mx-auto">

                {/* Grid 3 Baris ke Bawah (Vertikal) */}
                <div className="grid grid-rows-3 gap-2 w-full h-full relative">
                  {/* Gambar 1 */}
                  <div className="overflow-hidden rounded-lg border border-slate-200 transition-transform duration-300 ease-in-out hover:scale-[1.04] active:scale-[1.08] hover:z-20 cursor-pointer hover:shadow-lg">
                    <img
                      src={krti25}
                      alt="Seulawah Team UAV 1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gambar 2 */}
                  <div className="overflow-hidden rounded-lg border border-slate-200 transition-transform duration-300 ease-in-out hover:scale-[1.04] active:scale-[1.08] hover:z-20 cursor-pointer hover:shadow-lg">
                    <img
                      src={krti}
                      alt="Seulawah Team UAV 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Gambar 3 */}
                  <div className="overflow-hidden rounded-lg border border-slate-200 transition-transform duration-300 ease-in-out hover:scale-[1.04] active:scale-[1.08] hover:z-20 cursor-pointer hover:shadow-lg">
                    <img
                      src={RP1}
                      alt="Seulawah Team UAV 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Overlay HUD - Solid & Clean */}
                <div className="absolute bottom-24 md:bottom-42 left-2 bg-white px-2 py-1 rounded text-slate-800 font-mono font-bold text-[9px] sm:text-[10px] tracking-widest border border-slate-200 flex items-center gap-2 shadow-sm z-30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-slate-800" style={{ backgroundColor: palette.green }}></span>
                  Sponsorship & Kolaborasi
                </div>
                <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded text-slate-800 font-mono font-bold text-[9px] sm:text-[10px] tracking-widest border border-slate-200 flex items-center gap-2 shadow-sm z-30">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full border border-slate-800" style={{ backgroundColor: palette.green }}></span>
                  Terbuka untuk
                </div>
                
              </div>

              {/* Badges Mengambang - Diubah sesuai request */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white p-2.5 sm:p-3 rounded-lg border-2 border-slate-900 flex items-center gap-2 sm:gap-3 shadow-md" style={{ animation: 'float-tech 4s ease-in-out infinite' }}>
                <div className="p-1.5 sm:p-2 rounded border border-slate-900" style={{ backgroundColor: palette.purple }}>
                  <FiCpu className="text-lg sm:text-xl text-slate-900" />
                </div>
                <div>
                  <p className="text-[8px] sm:text-[10px] text-slate-500 font-mono font-bold">KOMPETISI</p>
                  <p className="text-slate-900 font-bold text-[10px] sm:text-xs display-font">KRTI 2017-2026</p>
                </div>
              </div>

              <div className="absolute -bottom-12 -right-4 sm:-right-8 z-20 bg-white p-2.5 sm:p-3 rounded-lg border-2 border-slate-900 flex items-center gap-2 sm:gap-3 shadow-md" style={{ animation: 'float-tech 5s ease-in-out 1s infinite' }}>
                <div className="text-right">
                  <p className="text-[8px] sm:text-[10px] text-slate-500 font-mono font-bold">4 Divisi</p>
                  <p className="text-slate-900 font-bold text-[10px] sm:text-xs display-font">RP | FW | VTOL | LELA</p>
                </div>
                <div className="p-1.5 sm:p-2 rounded border border-slate-900" style={{ backgroundColor: palette.yellow }}>
                  <FiAward className="text-lg sm:text-xl text-slate-900" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="relative py-24 px-6 bg-white border-y border-slate-200 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h2 className="text-2xl md:text-5xl font-bold mb-4 display-font tracking-wide text-slate-900">TENTANG KAMI</h2>
            <p className="text-slate-700 max-w-4xl mx-auto leading-relaxed text-l md:text-lg">
              Berdiri sejak 2016 di Universitas Syiah Kuala, Tim Seulawah adalah pusat riset dan pengembangan Pesawat Tanpa Awak (UAV). Fokus kami mencakup rancang bangun sistem UAV untuk 4 kategori utama: Racing Plane (RP), Fixed-Wing (FW),Vertical Takeoff and Landing(VTOL), dan Long Endurance Low Altitude (LELA).
              Sebagai ajang pembuktian inovasi dan keandalan teknologi yang kami rancang, Tim Seulawah rutin berpartisipasi aktif dalam Kontes Robot Terbang Indonesia (KRTI). Melalui kolaborasi lintas disiplin ilmu, kami terus mengembangkan solusi navigasi otonom, pemetaan udara presisi, dan sistem pengawasan pintar untuk menjawab tantangan operasional di sektor sipil maupun pertahanan strategis.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FiCpu />,
                title: 'AERODINAMIKA & MANUFAKTUR',
                desc: 'Rancang bangun struktur wahana yang tangguh dan ringan. Dioptimalkan untuk kecepatan manuver (Racing Plane), efisiensi jelajah, dan daya tahan udara maksimal (LELA).',
                color: palette.yellow
              },
              {
                icon: <FiTarget />,
                title: 'NAVIGASI OTONOM & GCS',
                desc: 'Pengembangan sistem autopilot dan telemetri. Memastikan wahana mampu mengeksekusi misi waypoint dan lintasan terbang secara otomatis tanpa intervensi manual.',
                color: palette.purple
              },
              {
                icon: <FiMonitor />,
                title: 'PAYLOAD & KECERDASAN BUATAN',
                desc: 'Integrasi Computer Vision untuk deteksi objek/titik api (hotspot), sistem pemetaan udara, serta mekanisme payload dropping (pengiriman paket darurat) tepat sasaran.',
                color: palette.green
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-50 p-8 rounded-xl border border-slate-200 card-hover scroll-reveal opacity-0" data-animation="animate-slideInUp" style={{ animationDelay: `${idx * 0.15}s` }}>
                <div
                  className="w-14 h-14 bg-white border-2 border-slate-900 rounded-lg flex items-center justify-center mb-6 text-2xl text-slate-900"
                  style={{ backgroundColor: item.color }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 display-font text-slate-900">{item.title}</h3>
                <p className="text-slate-700 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet & Tech Showcase Section */}
      <section id="fleet" className="relative py-18 px-6 z-10 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            {/* Ikon Header Opsional */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-slate-900 rounded-lg mb-6 shadow-sm" style={{ backgroundColor: palette.yellow }}>
              <span className="text-2xl text-slate-900 font-bold">✈️</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 display-font tracking-wide text-slate-900">DIVISI KRTI</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-l md:text-lg leading-relaxed">
              Kontes Robot Terbang Indonesia (KRTI) adalah panggung utama kami dalam menguji keandalan riset dan inovasi teknologi UAV. Sebagai delegasi Universitas Syiah Kuala, Tim Seulawah berfokus pada tiga divisi kompetisi, yang masing-masing menuntut spesifikasi teknis, misi otonom, dan tantangan aerodinamika yang spesifik.
            </p>
          </div>

          {/* Menggunakan Flexbox agar item ke-3 (ganjil) otomatis berada di tengah bawah */}
          <div className="flex flex-wrap justify-center gap-4">
            {portfolioData.fleet.map((project, idx) => (
              <div key={project.id} className="w-full md:w-[calc(50%-1rem)]">
                <ProjectCard project={project} idx={idx} />
              </div>
            ))}
          </div>
          <div className="mt-20 text-center scroll-reveal opacity-0" data-animation="animate-slideInUp">
            <h3 className="text-lg md:text-2xl font-bold mb-6 display-font tracking-wide text-slate-900">
              GALERI AKTIVITAS TIM 
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.instagram.com/seulawah_team/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-sm hover:-translate-y-1 shadow-sm"
                style={{ backgroundColor: palette.purple }}
              >
                <FiInstagram size={18} /> INSTAGRAM
              </a>
              <a
                href="https://www.tiktok.com/@seulawah_team"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-sm hover:-translate-y-1 shadow-sm"
                style={{ backgroundColor: palette.green }}
              >
                <FaTiktok size={18} /> TIKTOK
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="history" className="relative py-24 px-6 z-10 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 scroll-reveal opacity-0" data-animation="animate-slideInUp">
            {/* Ikon Header Opsional */}
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white border-2 border-slate-900 rounded-full mb-6 shadow-sm" style={{ backgroundColor: palette.green }}>
              <FiAward className="text-2xl text-slate-900" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 display-font tracking-wide text-slate-900">PENGALAMAN</h2>
            <p className="text-slate-700 max-w-2xl mx-auto text-l md:text-lg leading-relaxed">
              Perjalanan, pencapaian tim dalam kompetisi nasional, serta integrasi riset akademik ke dalam aplikasi industri yang nyata.
            </p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto relative before:absolute before:inset-0 before:ml-8 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-300">
            {portfolioData.history.map((exp, idx) => (
              <div
                key={exp.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group scroll-reveal opacity-0"
                data-animation="animate-scaleIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Titik Timeline Solid */}
                <div
                  className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-slate-50 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 font-mono text-xl text-slate-900 shadow-sm"
                  style={{ backgroundColor: exp.hexColor }}
                >
                  <FiAward />
                </div>

                {/* Kartu Konten Rekam Jejak */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2rem)] p-6 bg-white border border-slate-200 rounded-xl hover:border-slate-300 hover:-translate-y-1 transition-all shadow-sm">
                  <h3 className="font-bold text-lg display-font text-slate-900 mb-1">{exp.role}</h3>
                  <p className="text-slate-700 text-sm font-mono font-bold mb-3">{exp.company}</p>

                  {/* Badge History Solid Border */}
                  <p
                    className="text-slate-900 text-xs font-mono font-bold mb-4 inline-block px-3 py-1.5 rounded border-2"
                    style={{ backgroundColor: '#fff', borderColor: exp.hexColor }}
                  >
                    {exp.period}
                  </p>

                  <p className="text-slate-700 text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Contact Section */}
      <section id="comms" className="relative py-24 px-6 bg-white border-t border-slate-200 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="scroll-reveal opacity-0" data-animation="animate-slideInUp">
            {/* Ikon Kontak Solid */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 border-2 border-slate-900 rounded-full mb-6 text-slate-900"
              style={{ backgroundColor: palette.neutral }}
            >
              <FiMail className="text-2xl" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 display-font tracking-wide text-slate-900">KONTAK</h2>
            <p className="text-lg text-slate-700 mb-12 max-w-2xl mx-auto font-medium">
              Kami selalu terbuka untuk kolaborasi riset industri, dukungan sponsor, dan kemitraan teknologi. Terhubunglah dengan tim kami untuk bersama-sama membangun inovasi kedirgantaraan di Indonesia.
            </p>

            {/* Tombol Kontak Solid & Clean */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="mailto:teamseulawah@gmail.com"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-sm hover:-translate-y-1"
                style={{ backgroundColor: palette.rose }}
              >
                <FiMail size={18} /> HUBUNGI KAMI
              </a>
              <a
                href="https://www.instagram.com/seulawah_team/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-sm hover:-translate-y-1"
                style={{ backgroundColor: palette.purple }}
              >
                <FiInstagram size={18} /> INSTAGRAM
              </a>
              <a
                href="https://www.tiktok.com/@seulawah_team"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-sm hover:-translate-y-1"
                style={{ backgroundColor: palette.green }}
              >
                <FaTiktok size={18} /> TIKTOK
              </a>
              <a
                href="https://www.linkedin.com/company/seulawah-team-uav-research/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 px-6 py-3 bg-white border-2 border-slate-900 rounded-md transition-all text-slate-900 font-mono font-bold text-sm hover:-translate-y-1"
                style={{ backgroundColor: palette.yellow }}
              >
                <FiLinkedin size={18} /> LINKEDIN
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-white text-slate-600 border-t border-slate-200 z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold display-font text-slate-900 tracking-wider mb-2">SEULAWAH TEAM</div>
            <p className="text-sm font-mono font-bold">UNIVERSITAS SYIAH KUALA • BANDA ACEH</p>
          </div>
          {/* Teks Tanggal Solid dengan Badge */}
          <div
            className="text-xs font-mono font-bold px-3 py-1 border-2 border-slate-900 rounded text-slate-900"
            style={{ backgroundColor: palette.green }}
          >
            LAUNCH: 2026_05_23 // teamseulawah@gmail
          </div>
        </div>
      </footer>
    </div>
  );
}