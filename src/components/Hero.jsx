const Hero = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <section
            id='home'
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 2rem',
                maxWidth: 'var(--max-width)',
                margin: '0 auto',
                position: 'relative',
            }}>

            <div
                style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(110, 231, 183, 0.08)',
                    border: '1px solid rgba(110, 231, 183, 0.2)',
                    color: 'var(--accent)',
                    fontSize: '0.78rem',
                    fontWeight: 500,
                    padding: '6px 14px',
                    borderRadius: 'var(--radius-pill)',
                    marginBottom: '2rem',
                    width: 'fit-content',
                }}>
                <span style={{
                    width: '7px', height: '7px', background: 'var(--accent)', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite',
                }}></span>
                Available for work
            </div>

            <h1 style={{
                fontSize: 'clamp(2.8rem, 6vm, 4.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '-2px',
                marginBottom: '1.5rem',
            }}>
                Abdul Haseeb
                <br />

                <span style={{
                    background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent2) 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    Full-Stack Dev.
                </span>
            </h1>
            <p
                style={{
                    fontSize: '1.05rem',
                    color: 'var(--muted)',
                    maxWidth: '520px',
                    lineHeight: 1.75,
                    marginBottom: '2.5rem',
                }}>
                I build clean, scalable web applications — from Node.js microservices
                to React frontends. Focused on writing code that actually ships.
            </p>

            <div style= {{
                display: 'flex', gap: '1rem', flexWrap: 'wrap'
            }}>
                <button 
                className= 'btn-primary'
                onClick={() => scrollToSection('projects')}>
                    View my Work
                </button>
                <button
                className= 'btn-ghost'
                onClick={() => scrollToSection('contact')}>
                    Get in Touch
                </button>
            </div>

            <div 
            style= {{
                position: 'absolute',
                bottom: '2rem', 
                left: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--muted)',
                fontSize: '0.75rem',
                animation: 'bounce 2s infinite',
            }}>
                <svg width='14' height= '14' viewBox="0 0 14 14" fill= 'none'>
                    <path
                     d="M7 2v10M3 8l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"/>
                </svg>
                Scroll to explore
            </div>

            <style>{`
            @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
            }
            @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
            }
            `}</style>
        </section>
    )
}

export default Hero;