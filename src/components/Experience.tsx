'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Award, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const experiences = [
  {
    id: 1,
    type: 'work',
    title: 'Frontend Developer',
    company: 'Tech Startup',
    location: 'Remote',
    period: '2023 - Present',
    description: 'Building modern web applications using React, Next.js, and TypeScript. Leading frontend architecture decisions and mentoring junior developers.',
    icon: Briefcase,
  },
  {
    id: 2,
    type: 'work',
    title: 'Freelance Web Developer',
    company: 'Self-employed',
    location: 'Indonesia',
    period: '2022 - Present',
    description: 'Delivering custom web solutions for clients across various industries. Specializing in responsive design and performance optimization.',
    icon: Briefcase,
  },
  {
    id: 3,
    type: 'education',
    title: 'Bachelor of Computer Science',
    company: 'University',
    location: 'Indonesia',
    period: '2019 - 2023',
    description: 'Graduated with honors. Focused on software engineering, web development, and database management systems.',
    icon: GraduationCap,
  },
  {
    id: 4,
    type: 'certification',
    title: 'Full Stack Web Development',
    company: 'Bootcamp / Online Course',
    location: 'Online',
    period: '2022',
    description: 'Intensive bootcamp covering modern web development technologies including React, Node.js, and database design.',
    icon: Award,
  },
  {
    id: 5,
    type: 'certification',
    title: 'React Advanced Concepts',
    company: 'Online Course',
    location: 'Online',
    period: '2023',
    description: 'Deep dive into React ecosystem, hooks, state management, performance optimization, and testing strategies.',
    icon: Award,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
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
          className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-primary opacity-10 blur-3xl"
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
            Experience
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary transform md:-translate-x-1/2" />

            {/* Timeline items */}
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={experience.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-start mb-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-5 h-5 rounded-full bg-background border-4 border-primary shadow-lg shadow-primary/50"
                    />
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all z-0 relative"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-bold">{experience.title}</h3>
                            <p className="text-sm text-primary">{experience.company}</p>
                          </div>
                        </div>
                        {experience.type === 'work' && (
                          <Badge variant="outline" className="border-secondary/30 text-secondary">
                            Current
                          </Badge>
                        )}
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span>{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {experience.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
