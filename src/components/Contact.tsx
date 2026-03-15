import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, Linkedin, Github, MapPin, Send } from 'lucide-react'

const contactDetails = [
  {
    label: 'Phone',
    value: '+91 70875 71659',
    href: 'tel:+917087571659',
    Icon: Phone,
  },
  {
    label: 'Email',
    value: 's.lovedeepparmarpta@gmail.com',
    href: 'mailto:s.lovedeepparmarpta@gmail.com',
    Icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/lovedeepsingh102',
    href: 'https://linkedin.com/in/lovedeepsingh102',
    Icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: 'github.com/Lovedeep-s',
    href: 'https://github.com/Lovedeep-s',
    Icon: Github,
  },
  {
    label: 'Location',
    value: 'Patiala, India',
    href: '#',
    Icon: MapPin,
  },
]

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailto = `mailto:s.lovedeepparmarpta@gmail.com?subject=Hello from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '100px 24px 80px',
      }}
    >
      {/* Glow backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background:
            'radial-gradient(ellipse, rgba(36, 99, 235, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '64px', textAlign: 'center' }}
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
            Get in Touch
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
            Let&apos;s build the{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2463eb, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              future
            </span>{' '}
            together.
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
            I&apos;m currently looking for impactful product teams and ambitious web
            projects to collaborate on.
          </p>
        </motion.div>

        {/* Content grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            alignItems: 'start',
          }}
        >
          {/* Left: contact chips */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3
              style={{
                fontSize: '20px',
                fontWeight: '700',
                color: 'var(--text-primary)',
                marginBottom: '24px',
                letterSpacing: '-0.02em',
              }}
            >
              Reach out directly
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {contactDetails.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '14px 18px',
                    borderRadius: 'var(--radius-lg)',
                    background: 'var(--card-bg)',
                    border: '1px solid var(--card-border)',
                    backdropFilter: 'blur(12px)',
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    transition: 'border-color 0.2s, background 0.2s, color 0.2s, transform 0.2s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'rgba(36, 99, 235, 0.45)'
                    ;(e.currentTarget as HTMLElement).style.background =
                      'rgba(36, 99, 235, 0.07)'
                    ;(e.currentTarget as HTMLElement).style.color =
                      'var(--text-primary)'
                    ;(e.currentTarget as HTMLElement).style.transform =
                      'translateX(4px)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.borderColor =
                      'var(--card-border)'
                    ;(e.currentTarget as HTMLElement).style.background =
                      'var(--card-bg)'
                    ;(e.currentTarget as HTMLElement).style.color =
                      'var(--text-secondary)'
                    ;(e.currentTarget as HTMLElement).style.transform =
                      'translateX(0)'
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(36, 99, 235, 0.12)',
                      border: '1px solid rgba(36, 99, 235, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a5b4fc',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={16} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: 'var(--text-muted)',
                        marginBottom: '2px',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontSize: '14px',
                        fontWeight: '500',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--card-border)',
                borderRadius: 'var(--radius-xl)',
                backdropFilter: 'blur(16px)',
                padding: '32px',
              }}
            >
              {submitted ? (
                <div
                  style={{
                    textAlign: 'center',
                    padding: '40px 0',
                  }}
                >
                  <div
                    style={{
                      fontSize: '40px',
                      marginBottom: '16px',
                      color: '#22c55e',
                    }}
                  >
                    <Send size={40} />
                  </div>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      marginBottom: '8px',
                    }}
                  >
                    Message sent!
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  <h3
                    style={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      letterSpacing: '-0.02em',
                      marginBottom: '4px',
                    }}
                  >
                    Send a message
                  </h3>

                  {[
                    { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
                    { name: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
                  ].map((field) => (
                    <div key={field.name} style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <label
                        htmlFor={field.name}
                        style={{
                          fontSize: '13px',
                          fontWeight: '600',
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {field.label}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={form[field.name as keyof FormState]}
                        onChange={handleChange}
                        required
                        style={{
                          padding: '11px 14px',
                          borderRadius: 'var(--radius)',
                          background: 'rgba(5, 8, 20, 0.7)',
                          border: '1px solid rgba(36, 99, 235, 0.2)',
                          color: 'var(--text-primary)',
                          fontSize: '14px',
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          fontFamily: 'var(--font-body)',
                        }}
                        onFocus={(e) => {
                          ;(e.target as HTMLElement).style.borderColor =
                            'rgba(36, 99, 235, 0.6)'
                        }}
                        onBlur={(e) => {
                          ;(e.target as HTMLElement).style.borderColor =
                            'rgba(36, 99, 235, 0.2)'
                        }}
                      />
                    </div>
                  ))}

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label
                      htmlFor="message"
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{
                        padding: '11px 14px',
                        borderRadius: 'var(--radius)',
                        background: 'rgba(5, 8, 20, 0.7)',
                        border: '1px solid rgba(36, 99, 235, 0.2)',
                        color: 'var(--text-primary)',
                        fontSize: '14px',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s',
                        fontFamily: 'var(--font-body)',
                        lineHeight: '1.6',
                      }}
                      onFocus={(e) => {
                        ;(e.target as HTMLElement).style.borderColor =
                          'rgba(36, 99, 235, 0.6)'
                      }}
                      onBlur={(e) => {
                        ;(e.target as HTMLElement).style.borderColor =
                          'rgba(36, 99, 235, 0.2)'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      padding: '13px 24px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #2463eb, #3b74f5)',
                      border: 'none',
                      color: '#fff',
                      fontSize: '15px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 6px 20px rgba(36, 99, 235, 0.35)',
                      transition: 'opacity 0.2s, transform 0.2s',
                      fontFamily: 'var(--font-body)',
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.opacity = '0.9'
                      ;(e.currentTarget as HTMLElement).style.transform =
                        'translateY(-1px)'
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.opacity = '1'
                      ;(e.currentTarget as HTMLElement).style.transform =
                        'translateY(0)'
                    }}
                  >
                    Say Hello
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
