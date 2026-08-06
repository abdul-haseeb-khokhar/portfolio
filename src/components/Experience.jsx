import { motion } from 'framer-motion'
import Reveal from './Reveal'

const Experience = () => {
    return (
        <section id="experience" style={{
            padding: 'var(--section-padding)', maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center',
        }}>
            <Reveal>
                <p className="section-label">Experience</p>
                <h2 className="section-heading">Professional Journey</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
                    Where I've honed my skills and shipped real features.
                </p>
                <div className="section-rule" />
            </Reveal>

            <Reveal delay={0.1}>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '3rem', textAlign: 'left' }}>
                {/* ── Rail ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                    <motion.div
                        initial={{ scale: 0.6, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            width: '48px', height: '48px', borderRadius: 'var(--radius-sm)',
                            background: 'var(--navy)', color: '#fff',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.95rem',
                        }}>
                        CA
                    </motion.div>
                    <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        style={{ width: '1px', flexGrow: 1, background: 'var(--border)', marginTop: '10px', transformOrigin: 'top' }}
                    />
                </div>

                <div style={{
                    flex: 1, minWidth: 0, padding: '1.75rem', background: 'var(--surface)',
                    border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', marginBottom: '0.5rem',
                }}>
                    <div style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
                        flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.6rem',
                    }}>
                        <h3 style={{ fontSize: '1.15rem' }}>
                            Full-Stack Developer Intern <span style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'italic' }}>· CodeAlpha (Remote)</span>
                        </h3>
                        <span style={{
                            fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent)',
                            background: 'var(--surface2)', padding: '3px 10px', borderRadius: 'var(--radius-pill)',
                        }}>
                            2026
                        </span>
                    </div>

                    <ul style={{
                        fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.75,
                        paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem',
                    }}>
                        <li>
                            Built the e-commerce backend: User, Product, Cart, and Order models in
                            MongoDB/Mongoose with JWT auth middleware, role-protected routes, and
                            RESTful controllers for catalog, cart, and orders.
                        </li>
                        <li>
                            One of four deliverables (e-commerce, social platform, project management
                            tool, real-time chat) built in a consistent React + Node/Express + MongoDB
                            monorepo.
                        </li>
                    </ul>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'JWT'].map((tag) => (
                            <span key={tag} style={{
                                fontSize: '0.72rem', padding: '4px 10px', background: 'var(--surface2)',
                                border: '1px solid var(--border)', borderRadius: 'var(--radius-sm)', color: 'var(--navy2)',
                            }}>
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            </Reveal>
        </section>
    )
}

export default Experience
