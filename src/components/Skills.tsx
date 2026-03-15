import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const allSkills = [
  'JavaScript',
  'TypeScript',
  'Python',
  'Go (Golang)',
  'C',
  'C++',
  'React',
  'HTML',
  'CSS',
  'Accessibility (WCAG 2.2)',
  'TypeScript Migration',
  'MySQL',
  'Oracle SQL',
  'REST APIs',
  'Django',
  'Microservices',
  'Git',
  'Docker',
  'Jenkins',
  'CI/CD',
  'Nginx',
  'Tomcat',
  'VS Code',
  'Postman',
]

const orbitRings = [
  {
    radiusX: 368,
    radiusY: 192,
    depth: 96,
    duration: 56,
    reverse: false,
    startAngleDeg: 22,
    tiltDeg: -16,
    ringColor: 'rgba(36, 99, 235, 0.18)',
  },
  {
    radiusX: 298,
    radiusY: 154,
    depth: 78,
    duration: 44,
    reverse: true,
    startAngleDeg: 137,
    tiltDeg: 11,
    ringColor: 'rgba(139, 92, 246, 0.2)',
  },
  {
    radiusX: 230,
    radiusY: 118,
    depth: 62,
    duration: 34,
    reverse: false,
    startAngleDeg: 244,
    tiltDeg: -8,
    ringColor: 'rgba(36, 99, 235, 0.25)',
  },
  {
    radiusX: 166,
    radiusY: 86,
    depth: 44,
    duration: 24,
    reverse: true,
    startAngleDeg: 319,
    tiltDeg: 15,
    ringColor: 'rgba(139, 92, 246, 0.28)',
  },
]

const ringSkills = orbitRings.map((_, ringIndex) =>
  allSkills.filter((_, skillIndex) => skillIndex % orbitRings.length === ringIndex)
)

export default function Skills() {
  const [timeMs, setTimeMs] = useState(0)

  useEffect(() => {
    let rafId = 0
    const start = performance.now()

    const update = (now: number) => {
      setTimeMs(now - start)
      rafId = window.requestAnimationFrame(update)
    }

    rafId = window.requestAnimationFrame(update)
    return () => window.cancelAnimationFrame(rafId)
  }, [])

  return (
    <section
      id="skills"
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
          style={{ marginBottom: '72px', textAlign: 'center' }}
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
            Technologies
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
            Skills{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2463eb, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Orbit
            </span>
          </h2>
          <p
            style={{
              marginTop: '16px',
              fontSize: '16px',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              margin: '16px auto 0',
              lineHeight: '1.7',
            }}
          >
            Every skill in my stack lives inside the same system, from frontend
            architecture to backend delivery.
          </p>
        </motion.div>

        {/* Orbit visualization with full stack coverage */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              position: 'relative',
              width: 'min(98vw, 760px)',
              height: 'min(98vw, 760px)',
            }}
          >
            {orbitRings.map((ring, ringIndex) => {
              const phaseOffset = ((timeMs / 1000) / ring.duration) * Math.PI * 2
              const spinDirection = ring.reverse ? -1 : 1
              const startAngle = (ring.startAngleDeg * Math.PI) / 180

              return (
                <div
                  key={`${ring.radiusX}-${ringIndex}`}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: `${ring.radiusX * 2}px`,
                    height: `${ring.radiusY * 2}px`,
                    marginLeft: `${-ring.radiusX}px`,
                    marginTop: `${-ring.radiusY}px`,
                    borderRadius: '50%',
                    border: `1px solid ${ring.ringColor}`,
                    transform: `rotate(${ring.tiltDeg}deg)`,
                    transformOrigin: 'center',
                  }}
                >
                  {ringSkills[ringIndex].map((skill, slotIndex, list) => {
                    const baseAngle = (slotIndex / list.length) * Math.PI * 2
                    const angle = baseAngle + startAngle + phaseOffset * spinDirection

                    const x = Math.cos(angle) * ring.radiusX
                    const y = Math.sin(angle) * ring.radiusY
                    const z = Math.sin(angle) * ring.depth

                    const depthRatio = (z + ring.depth) / (ring.depth * 2)
                    const scale = 0.78 + depthRatio * 0.36
                    const opacity = 0.4 + depthRatio * 0.6
                    const chipBgAlpha = 0.78 + depthRatio * 0.16
                    const chipBorderAlpha = 0.22 + depthRatio * 0.3
                    const textAlpha = 0.72 + depthRatio * 0.28
                    const shadowAlpha = 0.16 + depthRatio * 0.22
                    const blurPx = (1 - depthRatio) * 0.35

                    return (
                      <div
                        key={skill}
                        style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: `translate(-50%, -50%) translate(${x}px, ${y}px) scale(${scale})`,
                          transformOrigin: 'center',
                          opacity,
                          zIndex: Math.round(depthRatio * 100),
                          filter: `blur(${blurPx}px)`,
                          pointerEvents: 'none',
                        }}
                      >
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '6px 10px',
                            borderRadius: '999px',
                            transform: `rotate(${-ring.tiltDeg}deg)`,
                            transformOrigin: 'center',
                            background: `rgba(9, 15, 34, ${chipBgAlpha})`,
                            border: `1px solid rgba(36, 99, 235, ${chipBorderAlpha})`,
                            boxShadow: `0 8px 24px rgba(7, 15, 45, ${shadowAlpha})`,
                            fontSize: '11px',
                            fontWeight: '600',
                            color: `rgba(199, 210, 254, ${textAlpha})`,
                            textAlign: 'center',
                            whiteSpace: 'nowrap',
                            backdropFilter: 'blur(6px)',
                          }}
                        >
                          {skill}
                        </span>
                      </div>
                    )
                  })}
                </div>
              )
            })}

            {/* Core badge */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '116px',
                height: '116px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #2463eb, #8b5cf6)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: '700',
                color: '#fff',
                boxShadow: '0 0 32px rgba(36, 99, 235, 0.5)',
                fontFamily: 'monospace',
              }}
            >
              {'</>'}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
