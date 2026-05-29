'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Clock, Wrench, Zap } from 'lucide-react';

const LAUNCH_DATE = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
const PROGRESS = 75;

export default function Maintenance() {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const diff = LAUNCH_DATE.getTime() - now.getTime();
      if (diff <= 0) { clearInterval(timer); return; }
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
      });
    }, 1000);
    setTimeout(() => setProgress(PROGRESS), 300);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { background: #08080f; }

        @keyframes float {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50% { transform: translateY(-16px); opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes progress-fill {
          from { width: 0%; }
          to { width: ${PROGRESS}%; }
        }
        @keyframes tick {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .page-wrap {
          min-height: 100vh;
          background: #08080f;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .orb-1 {
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,194,255,0.12) 0%, transparent 70%);
          animation: pulse-glow 6s ease-in-out infinite;
          pointer-events: none;
        }
        .orb-2 {
          position: absolute;
          bottom: -200px; left: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,255,178,0.1) 0%, transparent 70%);
          animation: pulse-glow 8s ease-in-out infinite;
          animation-delay: 2s;
          pointer-events: none;
        }
        .grid-bg {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(0,194,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,194,255,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }
        .particle {
          position: absolute;
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(0,194,255,0.5);
          pointer-events: none;
        }

        .content {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 560px;
          text-align: center;
          animation: fadeUp 0.8s ease forwards;
        }

        .icon-wrap {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 80px; height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(0,194,255,0.15), rgba(0,255,178,0.1));
          border: 1px solid rgba(0,194,255,0.3);
          margin-bottom: 28px;
          position: relative;
        }
        .icon-dot {
          position: absolute;
          top: -6px; right: -6px;
          width: 18px; height: 18px;
          border-radius: 50%;
          background: #00FFB2;
          display: flex; align-items: center; justify-content: center;
        }

        .eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(0,194,255,0.5);
          margin-bottom: 12px;
        }

        .heading {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.4rem, 8vw, 4rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 16px;
          background: linear-gradient(90deg, #00C2FF, #00FFB2, #00C2FF);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }

        .subtext {
          color: rgba(255,255,255,0.45);
          font-size: 1rem;
          line-height: 1.7;
          margin-bottom: 40px;
          max-width: 400px;
          margin-left: auto;
          margin-right: auto;
        }

        .progress-section {
          margin-bottom: 36px;
          text-align: left;
        }
        .progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .progress-label span:first-child {
          color: rgba(255,255,255,0.35);
          font-size: 13px;
          font-weight: 500;
        }
        .progress-label span:last-child {
          color: #00C2FF;
          font-size: 13px;
          font-weight: 700;
        }
        .progress-track {
          height: 6px;
          background: rgba(255,255,255,0.06);
          border-radius: 999px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .progress-fill {
          height: 100%;
          border-radius: 999px;
          background: linear-gradient(90deg, #00C2FF, #00FFB2);
          animation: progress-fill 1.5s cubic-bezier(0.4,0,0.2,1) forwards;
          width: 0%;
        }

        .countdown-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: rgba(255,255,255,0.35);
          font-size: 12px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          margin-bottom: 16px;
        }

        .countdown {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 36px;
        }
        .time-box {
          width: 80px; height: 80px;
          border-radius: 16px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s;
        }
        .time-box:hover {
          border-color: rgba(0,194,255,0.3);
          box-shadow: 0 0 20px rgba(0,194,255,0.1);
        }
        .time-num {
          font-family: 'Syne', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: white;
          animation: tick 1s ease-in-out infinite;
        }
        .time-lbl {
          font-size: 9px;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-top: 2px;
        }
        .colon {
          font-size: 1.6rem;
          font-weight: 800;
          color: rgba(0,194,255,0.3);
          margin-bottom: 18px;
        }

        .contact-links {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 36px;
        }
        .email-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          border-radius: 999px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          text-decoration: none;
          transition: all 0.3s;
        }
        .email-link:hover {
          color: #00C2FF;
          border-color: rgba(0,194,255,0.4);
          background: rgba(0,194,255,0.06);
        }
        .social-links {
          display: flex;
          gap: 10px;
        }
        .social-link {
          width: 40px; height: 40px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: all 0.3s;
        }
        .social-link:hover {
          color: #00C2FF;
          border-color: rgba(0,194,255,0.4);
          box-shadow: 0 0 16px rgba(0,194,255,0.15);
        }

        .footer-text {
          color: rgba(255,255,255,0.15);
          font-size: 11px;
          letter-spacing: 0.1em;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
      `}</style>

      <div className="page-wrap">
        <div className="orb-1" />
        <div className="orb-2" />
        <div className="grid-bg" />

        {/* Floating particles */}
        {[
          { left: '10%', top: '20%', delay: '0s', duration: '3s' },
          { left: '25%', top: '60%', delay: '0.5s', duration: '4s' },
          { left: '70%', top: '15%', delay: '1s', duration: '3.5s' },
          { left: '85%', top: '55%', delay: '1.5s', duration: '4.5s' },
          { left: '50%', top: '80%', delay: '0.8s', duration: '3.2s' },
          { left: '40%', top: '35%', delay: '2s', duration: '5s' },
        ].map((p, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: p.left, top: p.top,
              animationDelay: p.delay,
              animation: `float ${p.duration} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        ))}

        <div className="content">
          {/* Icon */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="icon-wrap">
              <Wrench size={32} color="#00C2FF" />
              <div className="icon-dot">
                <Zap size={10} color="#000" />
              </div>
            </div>
          </div>

          <p className="eyebrow">Husni Alfarisal · Portfolio</p>
          <h1 className="heading">Under Maintenance</h1>
          <p className="subtext">
            Sedang melakukan peningkatan untuk pengalaman yang lebih baik. Akan segera kembali! 🚀
          </p>

          {/* Progress */}
          <div className="progress-section">
            <div className="progress-label">
              <span>Progress</span>
              <span>{PROGRESS}%</span>
            </div>
            <div className="progress-track">
              <div className="progress-fill" />
            </div>
          </div>

          {/* Countdown */}
          <div className="countdown-label">
            <Clock size={14} />
            <span>Estimasi Selesai</span>
          </div>
          <div className="countdown">
            <div className="time-box">
              <span className="time-num">{pad(timeLeft.hours)}</span>
              <span className="time-lbl">Jam</span>
            </div>
            <span className="colon">:</span>
            <div className="time-box">
              <span className="time-num">{pad(timeLeft.minutes)}</span>
              <span className="time-lbl">Menit</span>
            </div>
            <span className="colon">:</span>
            <div className="time-box">
              <span className="time-num">{pad(timeLeft.seconds)}</span>
              <span className="time-lbl">Detik</span>
            </div>
          </div>

          {/* Contact */}
          <div className="contact-links">
            <a href="mailto:husnialfarisal@gmail.com" className="email-link">
              <Mail size={14} />
              husnialfarisal@gmail.com
            </a>
            <div className="social-links">
              <a href="https://github.com/husnialfarisal-tech" target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={16} />
              </a>
              <a href="https://linkedin.com/in/husni-alfarisal" target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <p className="footer-text">© 2025 Husni Alfarisal · All rights reserved</p>
        </div>
      </div>
    </>
  );
}