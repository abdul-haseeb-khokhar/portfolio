import { useState, useEffect } from 'react'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'
import Logo from './Logo'
import { useTheme } from '../hooks/useTheme'

const navLinks = [
    { label: 'Projects', href: 'projects' },
    { label: 'Skills', href: 'skills' },
    { label: 'About', href: 'about' },
    { label: 'Experience', href: 'experience' },
    { label: 'Contact', href: 'contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { theme, toggleTheme } = useTheme()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        setMenuOpen(false)
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <nav style={{
            position: 'fixed',
            top: 0, left: 0, right: 0,
            zIndex: 50,
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'var(--navy)',
            boxShadow: scrolled ? '0 4px 20px -8px rgba(0,0,0,0.3)' : 'none',
            transition: 'box-shadow 0.3s ease, background-color 0.25s ease',
        }}>
            <div style={{ cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <Logo size={30} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
                {/* ── Desktop links ── */}
                <div className="nav-links" style={{ display: 'flex', gap: '2rem' }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer',
                                fontSize: '0.85rem', fontWeight: 500, fontFamily: 'var(--font-body)',
                                color: 'rgba(255,255,255,0.7)', transition: 'color 0.2s', padding: 0,
                            }}
                            onMouseEnter={e => e.target.style.color = '#fff'}
                            onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.7)'}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>

                {/* ── Theme toggle ── */}
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                >
                    {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
                </button>

                {/* ── Mobile toggle ── */}
                <button
                    className="nav-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={{
                        display: 'none', background: 'none', border: 'none', color: '#fff', cursor: 'pointer', padding: 0,
                    }}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </div>

            {/* ── Mobile menu ── */}
            {menuOpen && (
                <div style={{
                    position: 'absolute', top: '100%', left: 0, right: 0,
                    background: 'var(--navy)', borderTop: '1px solid rgba(255,255,255,0.1)',
                    display: 'flex', flexDirection: 'column', padding: '1rem 2rem', gap: '1rem',
                }}>
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => scrollToSection(link.href)}
                            style={{
                                background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left',
                                fontSize: '0.9rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)', padding: '0.4rem 0',
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .nav-links { display: none !important; }
                    .nav-toggle { display: flex !important; }
                }
            `}</style>
        </nav>
    )
}

export default Navbar
