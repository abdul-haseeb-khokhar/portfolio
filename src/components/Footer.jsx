import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer
            style={{
                borderTop: '1px solid var(--border)',
                padding: '2rem',
            }}
        >
            <div
                style={{
                    maxWidth: 'var(--max-width)',
                    margin: '0 auto',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '1rem',
                }}
            >

                {/* ── Left: name + credit ── */}
                <div>
                    <p
                        style={{
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            color: 'var(--text)',
                            marginBottom: '2px',
                        }}
                    >
                        Abdul Haseeb
                    </p>
                    <p style={{ fontSize: '0.78rem', color: 'var(--muted)' }}>
                        © {year} · Built with React + Vite · Deployed on Vercel
                    </p>
                </div>

                {/* ── Right: social icons ── */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {[
                        { href: 'https://github.com/abdul-haseeb-khokhar', icon: <FiGithub size={18} />, label: 'GitHub' },
                        { href: 'https://linkedin.com/in/abdul-haseeb-khokhar-9ba6153b1', icon: <FiLinkedin size={18} />, label: 'LinkedIn' },
                        { href: 'https://wa.me/923402710136', icon: <FaWhatsapp size={18} />, label: 'WhatsApp' },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={social.label}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '36px',
                                height: '36px',
                                borderRadius: 'var(--radius-md)',
                                border: '1px solid var(--border)',
                                color: 'var(--muted)',
                                background: 'var(--surface)',
                                transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = 'rgba(110,231,183,0.3)'
                                e.currentTarget.style.color = 'var(--accent)'
                                e.currentTarget.style.transform = 'translateY(-2px)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = 'var(--border)'
                                e.currentTarget.style.color = 'var(--muted)'
                                e.currentTarget.style.transform = 'translateY(0)'
                            }}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>

            </div>
        </footer>
    )
}

export default Footer