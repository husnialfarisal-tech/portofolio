'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Clock, Wrench, Zap } from 'lucide-react';

const LAUNCH_DATE = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000); // 2 hari dari sekarang
const PROGRESS = 75; // persentase progress maintenance (0-100)

export default function Maintenance() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(diff / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    // Animate progress bar
    setTimeout(() => setProgress(PROGRESS), 300);

    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white flex items-center justify-center px-4 overflow-hidden relative">
      
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#00C2FF]/5 blur-[120px] animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#00FFB2]/5 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(#00C2FF 1px, transparent 1px), linear-gradient(90deg, #00C2FF 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00C2FF]/40"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.4; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .shimmer-text {
          background: linear-gradient(90deg, #00C2FF, #00FFB2, #00C2FF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        .progress-bar {
          transition: width 1.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .card-glow:hover {
          box-shadow: 0 0 30px rgba(0, 194, 255, 0.15);
        }
      `}</style>

      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">

        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00C2FF]/20 to-[#00FFB2]/20 border border-[#00C2FF]/30 flex items-center justify-center">
              <Wrench className="w-9 h-9 text-[#00C2FF]" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#00FFB2] flex items-center justify-center">
              <Zap className="w-2.5 h-2.5 text-black" />
            </div>
          </div>
        </div>

        {/* Heading */}
        <div className="mb-3">
          <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#00C2FF]/60">
            Husni Alfarisal · Portfolio
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
          <span className="shimmer-text">Under Maintenance</span>
        </h1>
        <p className="text-white/50 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          Sedang melakukan peningkatan untuk pengalaman yang lebih baik. Akan segera kembali!
        </p>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-white/40">Progress</span>
            <span className="text-[#00C2FF] font-semibold">{PROGRESS}%</span>
          </div>
          <div className="h-2 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div
              className="progress-bar h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #00C2FF, #00FFB2)'
              }}
            />
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-10">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Clock className="w-4 h-4 text-[#00C2FF]/60" />
            <span className="text-sm text-white/40 tracking-wider uppercase">Estimasi Selesai</span>
          </div>
          <div className="flex items-center justify-center gap-3">
            {[
              { value: pad(timeLeft.hours), label: 'Jam' },
              { value: pad(timeLeft.minutes), label: 'Menit' },
              { value: pad(timeLeft.seconds), label: 'Detik' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="card-glow w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex flex-col items-center justify-center transition-all">
                  <span className="text-2xl font-bold text-white font-mono">{item.value}</span>
                  <span className="text-[10px] text-white/30 uppercase tracking-widest mt-0.5">{item.label}</span>
                </div>
                {i < 2 && <span className="text-2xl font-bold text-[#00C2FF]/40 mb-3">:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Social */}
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:husnialfarisal@gmail.com"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-[#00C2FF] hover:border-[#00C2FF]/40 transition-all text-sm"
          >
            <Mail className="w-4 h-4" />
            husnialfarisal@gmail.com
          </a>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/husnialfarisal-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#00C2FF] hover:border-[#00C2FF]/40 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/husni-alfarisal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 hover:text-[#00C2FF] hover:border-[#00C2FF]/40 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-white/5">
          <p className="text-white/20 text-xs tracking-wider">
            © 2025 Husni Alfarisal · All rights reserved
          </p>
        </div>

      </div>
    </div>
  );
}