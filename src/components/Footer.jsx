import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import Logo from './Logo'

const navLinks = [
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
]

const socials = [
    { href: 'https://github.com/abdul-haseeb-khokhar', icon: <FiGithub size={17} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/abdul-haseeb-khokhar-9ba6153b1', icon: <FiLinkedin size={17} />, label: 'LinkedIn' },
    { href: 'https://wa.me/923402710136', icon: <FaWhatsapp size={17} />, label: 'WhatsApp' },
]

const Footer = () => {
    const year = new Date().getFullYear()

    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <footer style={{ background: 'var(--navy)', color: 'rgba(255,255,255,0.7)' }}>
            <div style={{
                maxWidth: 'var(--max-width)', margin: '0 auto', padding: '3.5rem 2rem 2rem',
                display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '2.5rem',
            }}>
                <div>
                    <Logo size={30} />
                    <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.55)', marginTop: '1rem', maxWidth: '320px', lineHeight: 1.7 }}>
                        Backend developer crafting production-style systems with layered
                        architecture and deliberate trade-offs.
                    </p>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem' }}>
                        {socials.map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={social.label}
                                style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    width: '36px', height: '36px', borderRadius: 'var(--radius-sm)',
                                    border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.7)',
                                    transition: 'border-color 0.2s, color 0.2s, transform 0.2s',
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = '#fff'
                                    e.currentTarget.style.color = '#fff'
                                    e.currentTarget.style.transform = 'translateY(-2px)'
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
                                    e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                                    e.currentTarget.style.transform = 'translateY(0)'
                                }}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <p style={{
                        fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600,
                        letterSpacing: '1.5px', textTransform: 'uppercase', color: '#fff', marginBottom: '1rem',
                    }}>
                        Navigation
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.href}
                                onClick={() => scrollToSection(link.href)}
                                style={{
                                    background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0,
                                    fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', transition: 'color 0.2s',
                                }}
                                onMouseEnter={e => e.target.style.color = '#fff'}
                                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <p style={{
                    maxWidth: 'var(--max-width)', margin: '0 auto', padding: '1.25rem 2rem',
                    fontSize: '0.78rem', color: 'rgba(255,255,255,0.45)', textAlign: 'center',
                }}>
                    © {year} Abdul Haseeb Khokhar. All rights reserved. · Built with React + Vite
                </p>
            </div>

            <style>{`
                @media (max-width: 560px) {
                    footer > div:first-child {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </footer>
    )
}

export default Footer
