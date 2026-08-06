import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiVercel, SiExpress, SiGooglegemini, SiRedis, SiDocker, SiNginx, SiPrisma, SiExpo, SiJest } from 'react-icons/si'
import { FiGithub, FiArrowUpRight } from 'react-icons/fi'
import Reveal from './Reveal'

const projects = [
    {
        title: 'StorePulse',
        tag: 'Analytics SaaS',
        mockup: {
            bg: 'linear-gradient(135deg, #0f1b33, #1c2b4f)',
            label: 'StorePulse',
            sub: 'Traffic monitoring for ecommerce',
        },
        description: 'A multi-tenant web analytics SaaS with a modular-monolith backend (auth, sites, ingest, analytics) and a Redis-backed ingest pipeline that batch-flushes buffered events, scaled behind NGINX and deployed to Google Cloud Compute Engine.',
        stack: [
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'Express', icon: <SiExpress /> },
            { name: 'PostgreSQL', icon: <SiPostgresql /> },
            { name: 'Prisma', icon: <SiPrisma /> },
            { name: 'Redis', icon: <SiRedis /> },
            { name: 'Docker', icon: <SiDocker /> },
            { name: 'NGINX', icon: <SiNginx /> },
        ],
        github: 'https://github.com/abdul-haseeb-khokhar/StorePulse',
        live: 'https://storepulse-xi.vercel.app',
        featured: true,
    },
    {
        title: 'Digital Kisan',
        tag: 'Marketplace',
        mockup: {
            bg: 'linear-gradient(135deg, #1f3a2a, #2f5a3f)',
            label: 'Digital Kisan',
            sub: '7-microservice agri-marketplace',
        },
        description: 'A farmer-to-buyer agricultural marketplace built as 7 independent microservices — user, listing, order, payment, transport, notify, admin — each with its own MongoDB Atlas database, centralized JWT auth, a mock escrow payment service, and InDrive-style transport bidding.',
        stack: [
            { name: 'React Native', icon: <SiExpo /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Express', icon: <SiExpress /> },
        ],
        github: 'https://github.com/abdul-haseeb-khokhar/DigitalKisan',
        live: null,
        featured: true,
    },
    {
        title: 'Journal Analyst',
        tag: 'AI · Full-Stack',
        mockup: {
            bg: 'linear-gradient(135deg, #2a1f3a, #4a2f5a)',
            label: 'Journal Analyst',
            sub: 'AI-powered trading journal',
        },
        description: 'An AI-powered trading journal with a 3-service backend for logging and analyzing forex trades, Google OAuth 2.0 + local JWT auth, and Gemini API–generated coaching insights. Covered by Jest unit tests for the user/trade controllers.',
        stack: [
            { name: 'React', icon: <SiReact /> },
            { name: 'Node.js', icon: <SiNodedotjs /> },
            { name: 'MongoDB', icon: <SiMongodb /> },
            { name: 'Gemini', icon: <SiGooglegemini /> },
            { name: 'Jest', icon: <SiJest /> },
            { name: 'Vercel', icon: <SiVercel /> },
        ],
        github: 'https://github.com/abdul-haseeb-khokhar/JournalAnalyst',
        live: 'https://journal-analyst-five.vercel.app',
        featured: false,
    },
]

const Projects = () => {
    return (
        <section id="projects" style={{
            padding: 'var(--section-padding)',
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
            textAlign: 'center',
        }}>
            <Reveal>
                <p className="section-label">Projects</p>
                <h2 className="section-heading">Selected Works</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
                    Real projects, real problems solved, real code shipped.
                </p>
                <div className="section-rule" />
            </Reveal>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '28px',
                marginTop: '3rem',
                textAlign: 'left',
            }}>
                {projects.map((project, index) => (
                    <Reveal key={project.title} delay={index * 0.12} style={{ height: '100%' }}>
                    <div style={{
                        height: '100%',
                        background: 'var(--surface)',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--radius-md)',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)'
                            e.currentTarget.style.boxShadow = '0 20px 40px -24px rgba(16,26,51,0.35)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.boxShadow = 'none'
                        }}
                    >
                        {/* ── Browser-chrome mockup ── */}
                        <div style={{ background: project.mockup.bg }}>
                            <div style={{
                                display: 'flex', gap: '6px', padding: '10px 14px',
                                borderBottom: '1px solid rgba(255,255,255,0.08)',
                            }}>
                                {['#ef4444', '#f59e0b', '#22c55e'].map(c => (
                                    <span key={c} style={{ width: '9px', height: '9px', borderRadius: '50%', background: c, opacity: 0.85 }} />
                                ))}
                            </div>
                            <div style={{
                                height: '140px',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                padding: '0 1.5rem',
                            }}>
                                <span style={{
                                    fontFamily: 'var(--font-display)',
                                    fontStyle: 'italic',
                                    fontSize: '1.4rem',
                                    color: '#fff',
                                    marginBottom: '6px',
                                }}>
                                    {project.mockup.label}
                                </span>
                                <span style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                                    {project.mockup.sub}
                                </span>
                            </div>
                        </div>

                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.9rem', flexGrow: 1 }}>
                            <span style={{
                                fontSize: '0.7rem',
                                fontWeight: 500,
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                color: 'var(--accent)',
                            }}>
                                {project.tag}
                            </span>

                            <h3 style={{ fontSize: '1.2rem' }}>{project.title}</h3>

                            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, flexGrow: 1 }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                                {project.stack.map((tech) => (
                                    <span key={tech.name} style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '5px',
                                        fontSize: '0.7rem', padding: '4px 9px',
                                        background: 'var(--surface2)', border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius-sm)', color: 'var(--navy2)',
                                    }}>
                                        <span style={{ display: 'flex', fontSize: '0.8rem' }}>{tech.icon}</span>
                                        {tech.name}
                                    </span>
                                ))}
                            </div>

                            <div style={{ height: '1px', background: 'var(--border)', margin: '0.25rem 0' }} />

                            <div style={{ display: 'flex', gap: '1.25rem' }}>
                                <a href={project.github} target="_blank" rel="noreferrer" style={{
                                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                                    fontSize: '0.8rem', fontWeight: 500, color: 'var(--muted)', transition: 'color 0.2s',
                                }}
                                    onMouseEnter={e => e.currentTarget.style.color = 'var(--heading)'}
                                    onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                                >
                                    <FiGithub size={14} /> GitHub
                                </a>
                                {project.live && (
                                    <a href={project.live} target="_blank" rel="noreferrer" style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                                        fontSize: '0.8rem', fontWeight: 500, color: 'var(--accent)', transition: 'color 0.2s',
                                    }}
                                        onMouseEnter={e => e.currentTarget.style.color = 'var(--heading)'}
                                        onMouseLeave={e => e.currentTarget.style.color = 'var(--accent)'}
                                    >
                                        View Project <FiArrowUpRight size={14} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div>
        </section>
    )
}

export default Projects
