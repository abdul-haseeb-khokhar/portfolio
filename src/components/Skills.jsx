import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
    SiNodedotjs, SiExpress, SiJsonwebtokens, SiPrisma, SiMongoose, SiZod, SiResend,
    SiPostgresql, SiMongodb, SiRedis,
    SiDocker, SiNginx, SiCaddy, SiGooglecloud, SiUpstash, SiCloudflare, SiGit, SiVercel, SiPostman,
    SiReact, SiExpo, SiTailwindcss, SiVite,
} from 'react-icons/si'
import { FiChevronDown, FiCode, FiDatabase, FiTool } from 'react-icons/fi'
import Reveal from './Reveal'

const skillGroups = [
    {
        category: 'Backend',
        icon: <FiCode />,
        items: [
            { name: 'Node.js', icon: <SiNodedotjs />, level: 92 },
            { name: 'Express.js', icon: <SiExpress />, level: 90 },
            { name: 'REST API Design', icon: <SiJsonwebtokens />, level: 90 },
            { name: 'JWT Auth & Middleware', icon: <SiJsonwebtokens />, level: 88 },
            { name: 'Prisma ORM', icon: <SiPrisma />, level: 82 },
            { name: 'Mongoose', icon: <SiMongoose />, level: 80 },
            { name: 'Zod Validation', icon: <SiZod />, level: 78 },
            { name: 'Resend (Transactional Email)', icon: <SiResend />, level: 74 },
        ],
    },
    {
        category: 'Databases',
        icon: <FiDatabase />,
        items: [
            { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85 },
            { name: 'MongoDB', icon: <SiMongodb />, level: 85 },
            { name: 'Redis', icon: <SiRedis />, level: 78 },
        ],
    },
    {
        category: 'DevOps & Tools',
        icon: <FiTool />,
        items: [
            { name: 'Docker', icon: <SiDocker />, level: 78 },
            { name: 'NGINX', icon: <SiNginx />, level: 75 },
            { name: 'Caddy (TLS)', icon: <SiCaddy />, level: 72 },
            { name: 'Google Cloud', icon: <SiGooglecloud />, level: 72 },
            { name: 'Upstash', icon: <SiUpstash />, level: 70 },
            { name: 'Cloudflare DNS', icon: <SiCloudflare />, level: 70 },
            { name: 'Git & GitHub', icon: <SiGit />, level: 88 },
            { name: 'Vercel', icon: <SiVercel />, level: 82 },
            { name: 'Postman', icon: <SiPostman />, level: 80 },
        ],
    },
    {
        category: 'Frontend (supporting)',
        icon: <SiReact />,
        items: [
            { name: 'React', icon: <SiReact />, level: 85 },
            { name: 'React Native (Expo)', icon: <SiExpo />, level: 78 },
            { name: 'Tailwind / NativeWind', icon: <SiTailwindcss />, level: 82 },
            { name: 'Vite', icon: <SiVite />, level: 80 },
        ],
    },
]

const Skills = () => {
    const [openIndex, setOpenIndex] = useState(-1)

    return (
        <section id="skills" style={{
            padding: 'var(--section-padding)', maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center',
        }}>
            <Reveal>
                <p className="section-label">Tech Stack</p>
                <h2 className="section-heading">Technical Arsenal</h2>
                <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '480px', margin: '0 auto' }}>
                    A practical stack built through real projects — not just watched tutorials.
                </p>
                <div className="section-rule" />
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginTop: '3rem', textAlign: 'left' }}>
                {skillGroups.map((group, index) => {
                    const isOpen = openIndex === index
                    return (
                        <Reveal key={group.category} delay={index * 0.08}>
                        <div style={{
                            border: '1px solid var(--border)',
                            borderRadius: 'var(--radius-md)',
                            background: 'var(--surface)',
                            overflow: 'hidden',
                        }}>
                            <button
                                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                style={{
                                    width: '100%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                                    padding: '1.1rem 1.5rem',
                                    background: 'none', border: 'none', cursor: 'pointer',
                                    fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 600, color: 'var(--heading)',
                                }}
                            >
                                <span style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                    <span style={{
                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                        width: '34px', height: '34px', borderRadius: 'var(--radius-sm)',
                                        background: 'var(--navy)', color: '#fff', fontSize: '1rem',
                                    }}>
                                        {group.icon}
                                    </span>
                                    {group.category}
                                </span>
                                <FiChevronDown style={{
                                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0)',
                                    transition: 'transform 0.2s',
                                    color: 'var(--muted)',
                                }} />
                            </button>

                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <div style={{ padding: '0 1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                                            {group.items.map((skill, i) => (
                                                <div key={skill.name} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                                    <span style={{
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        width: '30px', height: '30px', borderRadius: 'var(--radius-sm)',
                                                        background: 'var(--surface2)', color: 'var(--navy2)', fontSize: '0.95rem', flexShrink: 0,
                                                    }}>
                                                        {skill.icon}
                                                    </span>
                                                    <span style={{ fontSize: '0.85rem', color: 'var(--text)', minWidth: '170px' }}>
                                                        {skill.name}
                                                    </span>
                                                    <div style={{ flexGrow: 1, height: '4px', background: 'var(--surface2)', borderRadius: 'var(--radius-pill)', overflow: 'hidden' }}>
                                                        <motion.div
                                                            initial={{ width: 0 }}
                                                            animate={{ width: `${skill.level}%` }}
                                                            transition={{ duration: 0.7, delay: 0.1 + i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                                            style={{ height: '100%', background: 'var(--accent)' }}
                                                        />
                                                    </div>
                                                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', width: '34px', textAlign: 'right' }}>
                                                        {skill.level}%
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                        </Reveal>
                    )
                })}
            </div>
        </section>
    )
}

export default Skills
