import { FiMail, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Reveal from './Reveal'

const contactLinks = [
    { label: 'Email', href: 'mailto:h.khokhar2015@gmail.com', icon: <FiMail size={18} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abdul-haseeb-khokhar-9ba6153b1', icon: <FiLinkedin size={18} /> },
    { label: 'GitHub', href: 'https://github.com/abdul-haseeb-khokhar', icon: <FiGithub size={18} /> },
    { label: 'WhatsApp', href: 'https://wa.me/923402710136', icon: <FaWhatsapp size={18} /> },
]

const Contact = () => {
    return (
        <section id="contact" style={{
            padding: 'var(--section-padding)', maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center',
        }}>
            <Reveal>
                <p className="section-label">Contact</p>
                <h2 className="section-heading">Get In Touch</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '460px', margin: '0 auto' }}>
                    Open to full-time roles, freelance projects, or just a good conversation
                    about building something. Pick the channel that suits you.
                </p>
                <div className="section-rule" />
            </Reveal>

            <div className="contact-grid" style={{
                display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '1.5rem', marginTop: '3rem', textAlign: 'left',
            }}>
                {/* ── Contact info ── */}
                <Reveal delay={0.1} y={24} style={{ height: '100%' }}>
                <div style={{
                    height: '100%', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: '2rem',
                }}>
                    <h3 style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>Contact Information</h3>
                    <div className="contact-info-links" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                        {contactLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                target={link.label === 'Email' ? '_self' : '_blank'}
                                rel="noreferrer"
                                style={{
                                    display: 'flex', alignItems: 'center', gap: '10px',
                                    padding: '0.9rem 1rem', background: 'var(--surface2)',
                                    border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)',
                                    color: 'var(--navy2)', transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = 'var(--accent)'
                                    e.currentTarget.style.color = 'var(--accent)'
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'var(--border)'
                                    e.currentTarget.style.color = 'var(--navy2)'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}
                            >
                                {link.icon}
                                <span style={{ fontSize: '0.85rem', fontWeight: 500 }}>{link.label}</span>
                            </a>
                        ))}
                    </div>
                </div>
                </Reveal>

                {/* ── Resume ── */}
                <Reveal delay={0.2} y={24} style={{ height: '100%' }}>
                <div style={{
                    height: '100%', background: 'var(--navy)', borderRadius: 'var(--radius-lg)', padding: '2rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.1rem',
                }}>
                    <h3 style={{ fontSize: '1.05rem', color: '#fff' }}>Resume</h3>
                    <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                        Get the full picture — experience, projects, and stack in one place.
                    </p>
                    <a
                        href="/Abdul_Haseeb_Khokhar_CV.pdf"
                        download
                        style={{
                            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                            background: '#fff', color: 'var(--navy)', fontWeight: 500, fontSize: '0.85rem',
                            padding: '12px 20px', borderRadius: 'var(--radius-sm)', transition: 'opacity 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
                        onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                        <FiDownload size={16} /> Download Resume
                    </a>
                </div>
                </Reveal>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .contact-grid {
                        grid-template-columns: 1fr !important;
                    }
                }
                @media (max-width: 420px) {
                    .contact-info-links {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default Contact
