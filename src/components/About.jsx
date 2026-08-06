import MonogramCard from './MonogramCard'
import Reveal from './Reveal'

const stats = [
    { number: '3+', label: 'Production-style backend systems shipped' },
    { number: '7', label: 'Independent microservices in one architecture' },
]

const About = () => {
    return (
        <section id="about" style={{
            padding: 'var(--section-padding)', maxWidth: 'var(--max-width)', margin: '0 auto', textAlign: 'center',
        }}>
            <Reveal>
                <MonogramCard size={200} />

                <h2 className="section-heading" style={{ marginTop: '2.5rem' }}>
                    Crafting Reliable <br />
                    <span style={{ fontStyle: 'italic', color: 'var(--accent)', fontWeight: 500 }}>Backend Systems</span>
                </h2>
                <div className="section-rule" />
            </Reveal>

            <Reveal delay={0.1}>
                <div style={{ maxWidth: '620px', margin: '2rem auto 0', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                    <p style={{ fontSize: '1rem' }}>
                        I'm a backend developer and BS Computer Science graduate (University
                        of Gujrat, 2026) who builds production-style systems end to end,
                        with a bias toward layered architecture and deliberate trade-offs
                        over tutorials.
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                        My recent work includes <strong style={{ color: 'var(--text)', fontWeight: 600 }}>StorePulse</strong>,
                        a multi-tenant analytics SaaS with a Redis-buffered ingestion pipeline
                        behind NGINX on GCP; <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Digital Kisan</strong>,
                        a farmer-to-buyer marketplace with 7 microservices, an escrow payment
                        system, and InDrive-style transport bidding; and{' '}
                        <strong style={{ color: 'var(--text)', fontWeight: 600 }}>Journal Analyst</strong>,
                        an AI-powered trading journal with Google OAuth and Gemini-generated
                        coaching insights.
                    </p>
                    <p style={{ fontSize: '1rem' }}>
                        I value clean architecture and clear reasoning — every system I build
                        is chosen deliberately, not by default.
                    </p>
                </div>
            </Reveal>

            <Reveal delay={0.15}>
                <div style={{ marginTop: '2.25rem' }}>
                    <p style={{
                        fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--heading)',
                    }}>
                        Abdul Haseeb Khokhar
                    </p>
                    <p style={{ fontStyle: 'italic', fontSize: '0.9rem', color: 'var(--muted)' }}>
                        Backend Developer
                    </p>
                </div>

                <a
                    href="/Abdul_Haseeb_Khokhar_CV.pdf"
                    download
                    className="btn-ghost"
                    style={{ width: 'fit-content', margin: '2rem auto 0' }}
                >
                    Here's my CV
                </a>
            </Reveal>

            <Reveal delay={0.2}>
                <div className="about-stats" style={{
                    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '560px', margin: '3rem auto 0',
                }}>
                    {stats.map((stat) => (
                        <div key={stat.label} style={{
                            padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)',
                        }}>
                            <span style={{
                                display: 'block', fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '0.35rem',
                            }}>
                                {stat.number}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Reveal>

            <style>{`
                @media (max-width: 480px) {
                    .about-stats {
                        grid-template-columns: 1fr !important;
                    }
                }
            `}</style>
        </section>
    )
}

export default About
