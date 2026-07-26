import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'

const projects = [
  {
    title: 'Knight Horses',
    description:
      'Premium horse sales platform showcasing exceptional breeds with a polished, responsive experience and streamlined browsing for buyers.',
    tags: ['React', 'TypeScript', 'Vite', 'Responsive Design'],
    image: 'https://knighthorses.com/Horses/The-Friesian-Horse-1.jpg',
    live: 'https://knighthorses.com/',
    accent: '#b45309',
  },
  {
    title: 'GreenLight',
    description:
      'Computer-vision based room occupancy system using YOLOv3 and OpenCV to reduce electricity waste in academic spaces.',
    tags: ['Python', 'OpenCV', 'YOLOv3', 'React'],
    image: 'https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=900&q=80',
    github: 'https://github.com/Lovedeep-s/CNN-based-human-detection-to-save-electricity',
    accent: '#2463eb',
  },
  {
    title: 'Tagit',
    description:
      'QR-based luggage tracking portal with fast scan workflows, real-time state updates, and scalable Django APIs.',
    tags: ['Django', 'JavaScript', 'HTML/CSS', 'QR Workflows'],
    image: 'https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=900&q=80',
    github: 'https://github.com/Lovedeep-s/TagIT.git',
    accent: '#8b5cf6',
  },
  {
    title: 'Content Editing Microservice',
    description:
      'A decoupled content platform integrated with Bitbucket that lets non-developers update UI content safely.',
    tags: ['TypeScript', 'Node.js', 'Docker', 'REST APIs'],
    image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=900&q=80',
    github: 'https://github.com/Lovedeep-s',
    accent: '#2463eb',
  },
]

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function Projects() {
  return (
    <section
      id="projects"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px' }}
        >
          <p
            style={{
              fontSize: '13px',
              fontWeight: '600',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '12px',
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: '700',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              lineHeight: '1.1',
            }}
          >
            Featured{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2463eb, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Creations
            </span>
          </h2>
          <div
            style={{
              width: '48px',
              height: '3px',
              background: 'linear-gradient(90deg, #2463eb, #8b5cf6)',
              borderRadius: '2px',
              marginTop: '16px',
            }}
          />
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  return (
      <motion.article
          variants={cardVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ y: -6 }}
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--card-border)',
        borderRadius: 'var(--radius-xl)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        overflow: 'hidden',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'rgba(36, 99, 235, 0.45)'
        ;(e.currentTarget as HTMLElement).style.boxShadow =
          '0 24px 60px rgba(36, 99, 235, 0.18)'
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.borderColor =
          'var(--card-border)'
        ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', overflow: 'hidden', height: '200px' }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.5s ease',
          }}
          onMouseEnter={(e) => {
            ;(e.target as HTMLElement).style.transform = 'scale(1.05)'
          }}
          onMouseLeave={(e) => {
            ;(e.target as HTMLElement).style.transform = 'scale(1)'
          }}
        />
        {/* Tag pills overlay */}
        <div
          style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap',
          }}
        >
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              style={{
                padding: '3px 10px',
                borderRadius: '999px',
                background: 'rgba(5, 8, 20, 0.8)',
                border: '1px solid rgba(36, 99, 235, 0.4)',
                backdropFilter: 'blur(8px)',
                fontSize: '11px',
                fontWeight: '600',
                color: '#a5b4fc',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: '24px' }}>
        <h3
          style={{
            fontSize: '20px',
            fontWeight: '700',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '10px',
          }}
        >
          {project.title}
        </h3>
        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.65',
            marginBottom: '20px',
          }}
        >
          {project.description}
        </p>

        {/* All tags */}
        <div
          style={{
            display: 'flex',
            gap: '6px',
            flexWrap: 'wrap',
            marginBottom: '20px',
          }}
        >
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: '4px 10px',
                borderRadius: '999px',
                background: 'rgba(36, 99, 235, 0.1)',
                border: '1px solid rgba(36, 99, 235, 0.2)',
                fontSize: '11px',
                fontWeight: '500',
                color: '#a5b4fc',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '10px' }}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'rgba(36, 99, 235, 0.1)',
                border: '1px solid rgba(36, 99, 235, 0.2)',
                color: '#a5b4fc',
                fontSize: '13px',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.background =
                  'rgba(36, 99, 235, 0.2)'
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(36, 99, 235, 0.5)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.background =
                  'rgba(36, 99, 235, 0.1)'
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(36, 99, 235, 0.2)'
              }}
            >
              <Github size={14} />
              Code
            </a>
          )}
          <a
            href={project.live ?? '#contact'}
            target={project.live ? '_blank' : undefined}
            rel={project.live ? 'noreferrer' : undefined}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #2463eb, #3b74f5)',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.opacity = '0.85'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.opacity = '1'
            }}
          >
            {project.live ? 'Visit Site' : 'Details'}
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </motion.article>
  )
}
