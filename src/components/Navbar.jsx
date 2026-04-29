import { useState, useEffect } from 'react';

const navLinks = [
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
]

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 50,
                padding: '1rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                background: scrolled ? 'rgba(10,10,15,0.85)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
                transition: 'all 0.3s ease',
            }}>
            <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.1rem',
                color: 'var(--accent)',
                letterSpacing: '-0.5px',
                cursor: 'pointer',
            }}
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
                AH.
            </div>

            <div style={{ display: 'flex', gap: '2rem'}}>
                {navLinks.map((link) => (
                    <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    style={{
                        background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              color: 'var(--muted)',
              transition: 'color 0.2s',
              padding: 0,
                    }}
                    onMouseEnter={e=> e.target.style.color = 'var(--text)'}
                    onMouseLeave={e=> e.target.style.color = 'var(--muted)'}>
                        {link.label}
                    </button>
                ))}
            </div>
        </nav>
    )
}

export default Navbar;