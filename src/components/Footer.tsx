import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/Lovedeep-s',
    Icon: Github,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/lovedeepsingh102',
    Icon: Linkedin,
  },
  {
    label: 'Email',
    href: 'mailto:s.lovedeepparmarpta@gmail.com',
    Icon: Mail,
  },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'relative',
        zIndex: 1,
        borderTop: '1px solid rgba(36, 99, 235, 0.12)',
        padding: '40px 24px',
      }}
    >
      <div
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '28px',
              height: '28px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #2463eb, #8b5cf6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '11px',
              fontWeight: '700',
              color: '#fff',
            }}
          >
            LS
          </div>
          <span
            style={{
              fontSize: '15px',
              fontWeight: '700',
              color: 'var(--text-primary)',
              letterSpacing: '-0.02em',
            }}
          >
            Lovedeep Singh
          </span>
        </div>

        {/* Copyright */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--text-muted)',
            order: 3,
          }}
          className="footer-copy"
        >
          &copy; 2026 Lovedeep Singh. All rights reserved.
        </p>

        {/* Social links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {socials.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              aria-label={label}
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(13, 18, 36, 0.8)',
                border: '1px solid rgba(36, 99, 235, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text-muted)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(36, 99, 235, 0.5)'
                ;(e.currentTarget as HTMLElement).style.color = '#a5b4fc'
                ;(e.currentTarget as HTMLElement).style.background =
                  'rgba(36, 99, 235, 0.1)'
                ;(e.currentTarget as HTMLElement).style.transform =
                  'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor =
                  'rgba(36, 99, 235, 0.2)'
                ;(e.currentTarget as HTMLElement).style.color =
                  'var(--text-muted)'
                ;(e.currentTarget as HTMLElement).style.background =
                  'rgba(13, 18, 36, 0.8)'
                ;(e.currentTarget as HTMLElement).style.transform =
                  'translateY(0)'
              }}
            >
              <Icon size={16} />
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-copy { order: 3; width: 100%; text-align: center; }
        }
      `}</style>
    </motion.footer>
  )
}
