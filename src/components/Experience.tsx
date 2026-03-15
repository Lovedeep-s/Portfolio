import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'

const timeline = [
  {
    period: '2025 – Present',
    title: 'Associate Software Engineer',
    org: 'Vimo India',
    description:
      'Leading WCAG 2.2 improvements, migrating key modules to TypeScript, and improving page performance by 30%.',
    bullets: [
      'Led accessibility audit and WCAG 2.2 remediation across core product flows.',
      'Drove TypeScript migration for critical frontend modules, reducing runtime bugs by 40%.',
      'Optimised React rendering pipeline, improving LCP and INP scores significantly.',
    ],
    accent: '#2463eb',
    icon: 'work',
  },
  {
    period: '2025',
    title: 'Software Engineer Intern',
    org: 'Vimo India',
    description:
      'Built backend services and CI/CD-integrated content delivery tooling with strong collaboration across design and platform teams.',
    bullets: [
      'Designed and shipped a CMS integration that decoupled UI content from the codebase.',
      'Automated deployment pipelines using Jenkins + Docker, cutting release time by 50%.',
      'Collaborated with design team to deliver pixel-perfect, accessible UI components.',
    ],
    accent: '#8b5cf6',
    icon: 'work',
  },
  {
    period: '2024',
    title: 'SDE Intern',
    org: 'Arvat AI',
    description:
      'Developed dashboard systems, persistent layouts, and background queue workflows with Go and React.',
    bullets: [
      'Built real-time analytics dashboards in React with WebSocket data streams.',
      'Engineered background job queues in Go, processing 10k+ tasks daily reliably.',
      'Implemented persistent layout system that reduced user context-switching friction.',
    ],
    accent: '#2463eb',
    icon: 'work',
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 24px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
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
            Career
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
            Journey Through{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2463eb, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Time
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

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: '20px',
              top: '8px',
              bottom: '8px',
              width: '1px',
              background:
                'linear-gradient(180deg, #2463eb 0%, #8b5cf6 50%, #2463eb 100%)',
              opacity: 0.3,
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              paddingLeft: '60px',
            }}
          >
            {timeline.map((item, i) => (
              <TimelineCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineCard({
  item,
  index,
}: {
  item: (typeof timeline)[number]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ position: 'relative' }}
    >
      {/* Timeline dot */}
      <div
        style={{
          position: 'absolute',
          left: '-48px',
          top: '20px',
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          background: item.accent,
          boxShadow: `0 0 16px ${item.accent}66`,
          border: '3px solid var(--bg-base)',
          zIndex: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      {/* Card */}
      <div
        style={{
          background: 'var(--card-bg)',
          border: `1px solid ${item.accent}22`,
          borderLeft: `3px solid ${item.accent}`,
          borderRadius: 'var(--radius-lg)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          padding: '28px',
          transition: 'border-color 0.3s, box-shadow 0.3s',
        }}
        onMouseEnter={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = `0 16px 48px ${item.accent}22`
          ;(e.currentTarget as HTMLElement).style.borderColor = `${item.accent}55`
        }}
        onMouseLeave={(e) => {
          ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
          ;(e.currentTarget as HTMLElement).style.borderColor = `${item.accent}22`
        }}
      >
        {/* Header row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '14px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                background: `${item.accent}18`,
                border: `1px solid ${item.accent}33`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: item.accent,
                flexShrink: 0,
              }}
            >
              {item.icon === 'work' ? (
                <Briefcase size={16} />
              ) : (
                <GraduationCap size={16} />
              )}
            </div>
            <div>
              <h3
                style={{
                  fontSize: '17px',
                  fontWeight: '700',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                  lineHeight: '1.3',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: item.accent,
                  marginTop: '2px',
                }}
              >
                {item.org}
              </p>
            </div>
          </div>

          <span
            style={{
              padding: '5px 12px',
              borderRadius: '999px',
              background: `${item.accent}14`,
              border: `1px solid ${item.accent}30`,
              fontSize: '12px',
              fontWeight: '600',
              color: item.accent === '#2463eb' ? '#93c5fd' : '#c4b5fd',
              whiteSpace: 'nowrap',
            }}
          >
            {item.period}
          </span>
        </div>

        <p
          style={{
            fontSize: '14px',
            color: 'var(--text-secondary)',
            lineHeight: '1.65',
            marginBottom: '16px',
          }}
        >
          {item.description}
        </p>

        {/* Bullet points */}
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {item.bullets.map((bullet) => (
            <li
              key={bullet}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '8px',
                marginBottom: '8px',
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  background: item.accent,
                  flexShrink: 0,
                  marginTop: '8px',
                }}
              />
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}
