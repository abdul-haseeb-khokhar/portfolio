import { motion } from 'framer-motion'
import MonogramCard from './MonogramCard'

const tags = ['Node.js', 'Express', 'PostgreSQL', 'Redis', 'System Design']

const container = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
    },
}

const item = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Hero = () => {
    const scrollToSection = (id) => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <motion.section
            id="home"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '7rem 2rem 3rem',
                maxWidth: 'var(--max-width)',
                margin: '0 auto',
            }}
        >
            <motion.h1 variants={item} style={{
                fontSize: 'clamp(2.6rem, 6vw, 4rem)',
                marginBottom: '0.25rem',
            }}>
                Backend
            </motion.h1>
            <motion.h1 variants={item} style={{
                fontSize: 'clamp(2.6rem, 6vw, 4rem)',
                fontStyle: 'italic',
                fontWeight: 500,
                color: 'var(--accent)',
                marginBottom: '1rem',
            }}>
                Developer.
            </motion.h1>
            <motion.p variants={item} style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                color: 'var(--navy2)',
                marginBottom: '0',
            }}>
                &amp; Systems Architect
            </motion.p>

            <motion.div variants={item} className="section-rule" />

            <motion.div variants={item} style={{ margin: '2.5rem 0 2rem' }}>
                <MonogramCard size={260} />
            </motion.div>

            <motion.p variants={item} style={{
                fontSize: '1rem',
                color: 'var(--muted)',
                maxWidth: '520px',
                lineHeight: 1.8,
                marginBottom: '1.75rem',
            }}>
                I build production-style backend systems — Node.js and Express APIs,
                Redis-buffered pipelines, and layered PostgreSQL architectures —
                with a bias toward deliberate trade-offs over tutorials.
            </motion.p>

            <motion.div variants={item} style={{
                display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '2.5rem',
            }}>
                {tags.map((tag) => (
                    <span key={tag} style={{
                        fontSize: '0.78rem',
                        fontWeight: 500,
                        color: 'var(--navy2)',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-sm)',
                        padding: '6px 14px',
                    }}>
                        {tag}
                    </span>
                ))}
            </motion.div>

            <motion.div variants={item} style={{
                display: 'flex', flexDirection: 'column', gap: '0.75rem', width: '100%', maxWidth: '320px',
            }}>
                <button className="btn-primary" onClick={() => scrollToSection('projects')}>
                    View My Work
                </button>
                <button className="btn-ghost" onClick={() => scrollToSection('contact')}>
                    Get in Touch
                </button>
            </motion.div>
        </motion.section>
    )
}

export default Hero
