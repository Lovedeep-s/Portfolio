import { motion, type Variants } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
}

const itemTransition = { duration: 0.6, ease: 'easeOut' as const }

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '120px 24px 80px',
        zIndex: 1,
      }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: '860px',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '28px',
        }}
      >
        {/* Status pill */}
        <motion.div variants={item} transition={itemTransition}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px 6px 10px',
              borderRadius: '999px',
              background: 'rgba(36, 99, 235, 0.1)',
              border: '1px solid rgba(36, 99, 235, 0.3)',
              fontSize: '12px',
              fontWeight: '600',
              letterSpacing: '0.1em',
              color: '#a5b4fc',
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.4)',
                animation: 'pulse-dot 2s ease-in-out infinite',
                flexShrink: 0,
              }}
            />
            Available for New Projects
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          transition={itemTransition}
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            fontWeight: '700',
            lineHeight: '1.0',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
          }}
        >
          Lovedeep{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #2463eb 0%, #8b5cf6 50%, #a78bfa 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Singh
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          transition={itemTransition}
          style={{
            fontSize: 'clamp(16px, 2.5vw, 20px)',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
            maxWidth: '600px',
          }}
        >
          Crafting immersive{' '}
          <strong style={{ color: 'var(--text-primary)', fontWeight: '600' }}>
            3D web experiences
          </strong>{' '}
          and high-performance applications with a focus on modern aesthetics and
          glassmorphism.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          transition={itemTransition}
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #2463eb, #3b74f5)',
              color: '#fff',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              boxShadow: '0 8px 28px rgba(36, 99, 235, 0.4)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
              ;(e.currentTarget as HTMLElement).style.boxShadow =
                '0 12px 36px rgba(36, 99, 235, 0.55)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
              ;(e.currentTarget as HTMLElement).style.boxShadow =
                '0 8px 28px rgba(36, 99, 235, 0.4)'
            }}
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 28px',
              borderRadius: '999px',
              background: 'rgba(13, 18, 36, 0.7)',
              border: '1px solid rgba(36, 99, 235, 0.3)',
              color: 'var(--text-primary)',
              fontSize: '15px',
              fontWeight: '600',
              textDecoration: 'none',
              backdropFilter: 'blur(12px)',
              transition: 'border-color 0.2s, background 0.2s, transform 0.2s',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor =
                'rgba(36, 99, 235, 0.7)'
              ;(e.currentTarget as HTMLElement).style.background =
                'rgba(36, 99, 235, 0.1)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.borderColor =
                'rgba(36, 99, 235, 0.3)'
              ;(e.currentTarget as HTMLElement).style.background =
                'rgba(13, 18, 36, 0.7)'
              ;(e.currentTarget as HTMLElement).style.transform = 'translateY(0)'
            }}
          >
            <MessageCircle size={16} />
            Contact Me
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={item} transition={itemTransition} style={{ marginTop: '16px' }}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '22px',
              height: '36px',
              borderRadius: '11px',
              border: '2px solid rgba(36, 99, 235, 0.35)',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '6px',
              margin: '0 auto',
            }}
          >
            <div
              style={{
                width: '4px',
                height: '8px',
                borderRadius: '2px',
                background: 'var(--accent)',
                opacity: 0.7,
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes pulse-dot {
          0%, 100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4); }
          50% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
        }
      `}</style>
    </section>
  )
}
