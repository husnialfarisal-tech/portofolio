'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Database, 
  GitBranch, 
  Image as ImageIcon, 
  Terminal, 
  Cloud,
  Cpu,
  Server
} from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 95, icon: Code2 },
      { name: 'Next.js', level: 90, icon: Code2 },
      { name: 'TypeScript', level: 85, icon: Code2 },
      { name: 'Tailwind CSS', level: 95, icon: Layout },
      { name: 'HTML/CSS', level: 98, icon: Layout },
      { name: 'JavaScript', level: 95, icon: Code2 },
    ]
  },
  {
    title: 'Tools',
    icon: Terminal,
    skills: [
      { name: 'Git', level: 90, icon: GitBranch },
      { name: 'GitHub', level: 90, icon: GitBranch },
      { name: 'VS Code', level: 95, icon: Terminal },
      { name: 'Figma', level: 80, icon: ImageIcon },
      { name: 'Vercel', level: 85, icon: Cloud },
    ]
  },
  {
    title: 'Currently Learning',
    icon: Cpu,
    skills: [
      { name: 'Node.js', level: 70, icon: Server },
      { name: 'REST API', level: 80, icon: Database },
      { name: 'Testing', level: 65, icon: Code2 },
      { name: 'GraphQL', level: 60, icon: Database },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-gradient-primary opacity-10 blur-3xl"
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
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                whileHover={{ y: -5 }}
                className="rounded-2xl border border-border bg-card/50 backdrop-blur-sm p-6 hover:border-primary/50 transition-all"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <CategoryIcon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {SkillIcon && (
                              <div className="w-5 h-5 flex items-center justify-center">
                                {React.createElement(SkillIcon, { className: "h-4 w-4 text-primary" })}
                              </div>
                            )}
                            <span className="font-medium text-sm">{skill.name}</span>
                          </div>
                          <Badge 
                            variant="outline" 
                            className="text-xs border-primary/30 text-primary"
                          >
                            {skill.level}%
                          </Badge>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-muted/50"
                        />
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-6">Also Familiar With</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Redux', 'Zustand', 'React Query',
              'Prisma', 'MongoDB', 'PostgreSQL',
              'Firebase', 'Supabase', 'Auth.js',
              'Docker', 'CI/CD', 'AWS',
              'Jest', 'Cypress', 'Storybook'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                <Badge 
                  variant="outline" 
                  className="px-4 py-2 rounded-full border-primary/20 text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
