import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const contactLinks = [
  {
    label: 'Email',
    value: 'h.khokhar2015@gmail.com',
    href: 'mailto:h.khokhar2015@gmail.com',
    icon: <FiMail size={20} />,
    color: '#6ee7b7',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/abdul-haseeb-khokhar-9ba6153b1',
    href: 'https://www.linkedin.com/in/abdul-haseeb-khokhar-9ba6153b1',
    icon: <FiLinkedin size={20} />,
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    value: 'github.com/abdul-haseeb-khokhar',
    href: 'https://github.com/abdul-haseeb-khokhar',
    icon: <FiGithub size={20} />,
    color: '#ffffff',
  },
  {
    label: 'WhatsApp',
    value: '+923402710136',
    href: 'https://wa.me/923402710136',
    icon: <FaWhatsapp size={20} />,
    color: '#25D366',
  },
]

const Contact = () => {
  return (
    <section
      id="contact"
      style={{
        padding: 'var(--section-padding)',
        maxWidth: 'var(--max-width)',
        margin: '0 auto',
      }}
    >
      {/* ── Label ── */}
      <p className="section-label">Contact</p>

      {/* ── Main card ── */}
      <div
        style={{
          background: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: 'var(--radius-lg)',
          padding: '3rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1rem',
        }}
      >

        {/* ── Heading ── */}
        <h2
          style={{
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            fontWeight: 700,
            letterSpacing: '-1px',
          }}
        >
          Let's work together
        </h2>

        {/* ── Subtext ── */}
        <p
          style={{
            fontSize: '0.95rem',
            color: 'var(--muted)',
            maxWidth: '460px',
            lineHeight: 1.75,
            marginBottom: '1rem',
          }}
        >
          I'm open to full-time roles, freelance projects, or just a good
          conversation about building something. Pick the channel that suits you.
        </p>

        {/* ── Contact cards grid ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '12px',
            width: '100%',
            marginTop: '1rem',
          }}
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label === 'Email' ? '_self' : '_blank'}
              rel="noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '10px',
                padding: '1.25rem',
                background: 'var(--surface2)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--muted)',
                textDecoration: 'none',
                transition: 'border-color 0.2s, transform 0.2s, color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = link.color
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.color = link.color
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.color = 'var(--muted)'
              }}
            >
              {/* ── Icon ── */}
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--surface)',
                  color: link.color,
                  flexShrink: 0,
                }}
              >
                {link.icon}
              </span>

              {/* ── Label + value ── */}
              <div>
                <p
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--text)',
                    marginBottom: '2px',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {link.label}
                </p>
                <p
                  style={{
                    fontSize: '0.72rem',
                    color: 'inherit',
                    wordBreak: 'break-all',
                  }}
                >
                  {link.value}
                </p>
              </div>

            </a>
          ))}
        </div>

      </div>

      {/* ── Mobile responsive ── */}
      <style>{`
        @media (max-width: 480px) {
          #contact > div {
            padding: 1.5rem 1rem !important;
          }
          #contact > div > div {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

    </section>
  )
}

export default Contact