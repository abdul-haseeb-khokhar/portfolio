import { SiReact, SiJavascript, SiTailwindcss, SiVite, SiNodedotjs, SiExpress, SiJsonwebtokens, SiMongodb, SiPostgresql, SiMongoose, SiGithub, SiVercel, SiPostman } from 'react-icons/si'

const skills = [
    {
        category: 'Frontend',
        items: [
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'Tailwind', icon: <SiTailwindcss />, color: '#38BDF8' },
            { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
        ]
    },
    {
        category: 'Backend',
        items: [
            { name: 'Node.js', icon: <SiNodedotjs />, color: '#68A063' },
            { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
            { name: 'REST APIs', icon: <SiJsonwebtokens />, color: '#FB015B' },
            { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: '#FB015B' },
        ]
    },
    {
        category: 'Databases',
        items: [
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
            { name: 'Mongoose', icon: <SiMongodb />, color: '#880000' },
        ]
    },
    {
        category: 'Tools & Infra',
        items: [
            { name: 'GitHub', icon: <SiGithub />, color: '#ffffff' },
            { name: 'Vercel', icon: <SiVercel />, color: '#ffffff' },
            { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
            { name: 'React Native', icon: <SiReact />, color: '#61DAFB' },
        ]
    }
]
const Skills = () => {
    return (
        <section id='skills' style={{
            padding: 'var(--section-padding)', maxWidth: 'var(--max-width)', margin: '0 auto'
        }}>
            <p className='section-label'>Tech stack</p>

            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-1px', marginBottom: '0.75rem' }}>What I work with</h2>

            <p style={{ fontSize: '0.95rem', color: 'var(--muted)', marginBottom: '3rem', maxWidth: '480px' }}>
                A practical stack built through real projects — not just watched tutorials.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {skills.map((group) => (
                    <div key={group.category}>

                        {/* ── Category label ── */}
                        <p
                            style={{
                                fontSize: '0.72rem',
                                fontWeight: 500,
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                color: 'var(--muted)',
                                marginBottom: '1rem',
                            }}
                        >
                            {group.category}
                        </p>

                        {/* ── Skills row ── */}
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                            {group.items.map((skill) => (
                                <div
                                    key={skill.name}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        padding: '10px 18px',
                                        background: 'var(--surface)',
                                        border: '1px solid var(--border)',
                                        borderRadius: 'var(--radius-md)',
                                        fontSize: '0.875rem',
                                        fontWeight: 500,
                                        color: 'var(--text)',
                                        cursor: 'default',
                                        transition: 'border-color 0.2s, transform 0.2s',
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = 'rgba(110,231,183,0.3)'
                                        e.currentTarget.style.transform = 'translateY(-2px)'
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = 'var(--border)'
                                        e.currentTarget.style.transform = 'translateY(0)'
                                    }}
                                >
                                    {/* ── Brand icon with its real color ── */}
                                    <span style={{ fontSize: '1.1rem', color: skill.color, display: 'flex' }}>
                                        {skill.icon}
                                    </span>
                                    {skill.name}
                                </div>
                            ))}
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;