'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Code2, Server, Database, X, ZoomIn } from 'lucide-react';
import { projects, type ProjectCategory } from '@/data/projects';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const categories: ProjectCategory[] = ['All', 'React', 'Next.js', 'API', 'PHP'];

const categoryIcons: Record<string, any> = {
  React: Code2,
  'Next.js': Code2,
  API: Server,
  PHP: Database,
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-primary opacity-10 blur-3xl"
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my best work, demonstrating skills in modern web technologies
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 transition-all ${
                activeCategory === category
                  ? 'bg-gradient-primary text-black'
                  : 'border-primary/30 text-muted-foreground hover:text-primary hover:border-primary'
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = categoryIcons[project.category];
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative h-full rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300">
                    
                    {/* Project image */}
                    <div
                      className="relative h-48 overflow-hidden cursor-zoom-in"
                      onClick={() => {
                        setSelectedImage(project.image);
                        setSelectedTitle(project.title);
                      }}
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                          <CategoryIcon className="h-16 w-16 text-primary/30" />
                        </div>
                      )}

                      {/* Category badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-semibold text-primary border border-primary/30">
                          {project.category}
                        </span>
                      </div>

                      {/* Zoom hint */}
                      <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                          <ZoomIn className="h-4 w-4 text-primary" />
                        </div>
                      </div>

                      {/* Hover overlay with links */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-background/90 flex items-center justify-center gap-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {project.liveUrl && project.liveUrl !== '#' && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-full bg-primary text-black flex items-center justify-center hover:shadow-lg hover:shadow-primary/50 transition-all"
                          >
                            <ExternalLink className="h-5 w-5" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-12 h-12 rounded-full bg-background border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-black hover:border-primary transition-all"
                          >
                            <Github className="h-5 w-5" />
                          </motion.a>
                        )}
                        <motion.button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage(project.image);
                            setSelectedTitle(project.title);
                          }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-12 h-12 rounded-full bg-background border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-black transition-all"
                        >
                          <ZoomIn className="h-5 w-5" />
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Project info */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech stack badges */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-md bg-muted/50 text-xs text-muted-foreground border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">No projects found in this category.</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center p-4 cursor-zoom-out"
            style={{ zIndex: 9999 }}
          >
            {/* Header */}
            <div className="w-full max-w-5xl flex items-center justify-between mb-4">
              <span className="text-white/70 font-semibold text-lg">{selectedTitle}</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedImage(null)}
                className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10"
              style={{ aspectRatio: '16/9' }}
            >
              <Image
                src={selectedImage}
                alt={selectedTitle}
                fill
                className="object-contain"
              />
            </motion.div>

            {/* Close hint */}
            <p className="text-white/30 text-sm mt-4">Klik di luar untuk menutup</p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}