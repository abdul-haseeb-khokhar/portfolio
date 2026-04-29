import { SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiVercel, SiExpress, SiGooglegemini } from 'react-icons/si'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
    {
        title: 'JournalAnalyst',
        tag: 'Full-Stack . AI',
        description: 'A microsevice trading journal with AI-Powered insights. Three independent Node.js services — user, trade, AI — each deployed separately on Vercel with JWT auth and Google Gemini integration.',
        stack: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#68A063' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'Gemini', icon: <SiGooglegemini />, color: '#8AB4F8' },
            { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
        ],
        github: 'https://github.com/abdul-haseeb-khokhar/JournalAnalyst',
        live: 'https://journal-analyst-five.vercel.app',
        featured: true,
    },

    {
        title: 'Digital Kisan',
        tag: 'Full-stack . Marketplace',
        description: 'A farmer-to-buyer agricultural marketplace with 7 microservices, InDrive-style transport bidding, escrow payments, and push/SMS notifications. Database-per-service architecture.',
        stack: [
            { name: 'React Native', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#68A063' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
        ],
        github: 'https://github.com/abdul-haseeb-khokhar/DigitalKisan',
        live: null,
        featured: true,
    },
    {
        title: 'Reclaim',
        tag: 'Full-Stack',
        description: 'A community lost-and-found platform with dynamic filtering by status, category, and location. PostgreSQL backend using a clean service-repository layered architecture.',
        stack: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#68A063' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
        ],
        github: 'https://github.com/m-arshad-dev/reclaim',
        live: null,
        featured: false
    }
]

const Projects = () => {
    return (
        <section id='projects' style={{
            padding: 'var(--section-padding)',
            maxWidth: 'var(--max-width)',
            margin: '0 auto',
        }}>
            <p className='section-label'>Projects</p>
            <h2 style={{
                fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                fontWeight: 700,
                letterSpacing: '-1px',
                marginBottom: '0.75rem',
            }}> Projets I've built</h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '3rem', maxWidth: '480px' }}>
                Real projects, real problems solved, real code shipped.
            </p>

            <div style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px'
            }}>
                {projects.map((project) => (
                    <div key={project.title}
                        style={{
                            background: 'var(--surface)',
                            border: project.featured
                                ? '1px solid rgba(110,231,183,0.15)'
                                : '1px solid var(--border)',
                            borderRadius: 'var(--radius-lg)',
                            padding: '1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1rem',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform 0.2s, border-color 0.2s',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.transform = 'translateY(-4px)'
                            e.currentTarget.style.borderColor = 'rgba(110,231,183,0.35)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.transform = 'translateY(0)'
                            e.currentTarget.style.borderColor = project.featured
                                ? 'rgba(110,231,183,0.15)'
                                : 'var(--border)'
                        }}>
                        {project.featured && (
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0,
                                height: '2px',
                                background: 'linear-gradient(90deg, var(--accent), var(--accent2))',
                            }}
                            ></div>
                        )}

                        <span style={{
                            display: 'inline-block',
                            fontSize: '0.72rem',
                            fontWeight: 500,
                            padding: '4px 10px',
                            background: 'rgba(110,231,183,0.08)',
                            color: 'var(--accent)',
                            borderRadius: 'var(--radius-pill)',
                            border: '1px solid rgba(110,231,183,0.15)',
                            width: 'fit-content',
                        }}>
                            {project.tag}
                        </span>
                        <h3 style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.15rem',
                            fontWeight: 700,
                            letterSpacing: '-0.5px',
                            color: 'var(--text)',
                        }}> {project.title}</h3>
                        <p style={{
                            fontSize: '0.875rem',
                            color: 'var(--muted)',
                            lineHeight: 1.65,
                            flexGrow: 1,
                        }}>{project.description}</p>

                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {project.stack.map((tech) => (
                                <span
                                    key={tech.name}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '5px',
                                        fontSize: '0.72rem',
                                        padding: '4px 8px',
                                        background: 'var(--surface2)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius-sm)',
                                        color: 'var(--muted)',
                                    }}
                                >
                                    <span style={{ color: tech.color, display: 'flex', fontSize: '0.85rem' }}>
                                        {tech.icon}
                                    </span>
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        {/* ── Divider ── */}
                        <div style={{ height: '1px', background: 'var(--border)' }} />

                        {/* ── Links ── */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                fontSize: '0.8rem',
                                fontWeight: 500,
                                color: 'var(--muted)',
                                transition: 'color 0.2s',
                            }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                            >
                            <FiGithub size={14} />
                            GitHub
                        </a>
                        <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            fontSize: '0.8rem',
                            fontWeight: 500,
                            color: 'var(--muted)',
                            transition: 'color 0.2s',
                        }}
                        onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                        onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}
                        >
                        <FiExternalLink size={14} />
                        Live demo
                        </a>
            </div>
        </div>
    ))
}
            </div >
            <style>{`
            @media (max-width: 640px) {
            #project> div: last-of-type {
            grid-template-columns: 1fr !important;}}`}</style>
        </section >
    )
}

export default Projects;