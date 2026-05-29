'use client';

import { motion } from 'framer-motion';
import { Download, MapPin, Calendar, Award, Coffee, Heart, Zap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image'

const funFacts = [
  { icon: Coffee, text: '☕ 3+ cups of coffee per day' },
  { icon: Heart, text: '❤️ Passionate about clean code' },
  { icon: Zap, text: '⚡ Fast learner & problem solver' },
  { icon: Code, text: '💻 50+ personal projects completed' },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-primary opacity-10 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary tracking-wider uppercase mb-2 block">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get to Know <span className="text-gradient">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Profile photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative">
              {/* Decorative frame */}
              <motion.div
                animate={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute -inset-4 rounded-3xl border-2 border-primary/30"
              />
              <motion.div
                animate={{ rotate: [0, -2, 2, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -inset-2 rounded-2xl border border-secondary/30"
              />
              
              {/* Avatar */}
             <div className="relative rounded-2xl overflow-hidden aspect-square">
  <Image
    src="/images/profil.jpeg"
    alt="Husni Alfarisal"
    fill
    className="object-cover"
    priority
  />
</div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-xl bg-gradient-primary text-black font-semibold text-sm shadow-lg shadow-primary/30"
              >
                Available for Hire
              </motion.div>
            </div>
          </motion.div>

          {/* Right: About content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Hi, I'm Husni Alfarisal</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A passionate Frontend Developer from Maluku Utara, Indonesia 🇮🇩. I specialize in building modern, responsive, and performant web applications using React, Next.js, and Tailwind CSS.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With a keen eye for design and a love for clean code, I transform ideas into beautiful digital experiences. I believe in continuous learning and staying up-to-date with the latest web technologies.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card/50 border border-border text-center hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-gradient mb-1">3+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-border text-center hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-gradient mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-border text-center hover:border-primary/50 transition-colors col-span-2 md:col-span-1">
                <div className="text-2xl font-bold text-gradient mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
            </div>

            {/* Info cards */}
            <div className="space-y-3 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Maluku Utara, Indonesia</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Available for Remote Work</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Award className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground">Computer Science Graduate</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary hover:text-black px-6 group"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Fun Facts</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {funFacts.map((fact, index) => {
              const Icon = fact.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-xl bg-card/50 border border-border hover:border-primary/50 transition-all group"
                >
                  <Icon className="h-8 w-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-sm text-muted-foreground">{fact.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
