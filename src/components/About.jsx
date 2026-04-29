const About = () => {
    const stats = [
        {
            number: '3+',
            label: 'Full-stack apps built\nand deployed to production'
        },
        {
            number: '10+',
            label: 'Technologies across\n frontend, backend & databases',
        },

    ]


    return (
        <section id='about' style={{
            padding: 'var(--section-padding)', maxWidth: 'var(--max-width)', margin: '0 auto',
        }}>
            <p className="section-label">About Me</p>

            <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center'
            }}>
                <div>
                    <h2 style={{
                        fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                        fontWeight: 700,
                        letterSpacing: '-1px',
                        marginBottom: '1.25rem'
                    }}>
                        I don't just learn - <br />
                        <span style={{ color: 'var(--accent)' }}>I ship.</span>
                    </h2>
                    <p style={{ marginBottom: '1rem' }}>
                        I'm a full-stack developer who builds real products
                        instead of following tutorials. Every concept I learn goes straight
                        into a project — from JWT auth flows to microservice architectures.
                    </p>
                    <p style={{ marginBottom: '1.75rem' }}>
                        My recent work includes{' '}
                        <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
                            JournalAnalyst
                        </strong>
                        , a microservices trading journal with AI insights,{' '}
                        <strong style={{ color: 'var(--text)', fontWeight: 500 }}>
                            Digital Kisan
                        </strong>
                        , a farmer-to-buyer marketplace with 7 backend services, an
                        escrow payment system, and InDrive-style transport bidding, and {' '}
                        <strong style={{color: 'var(--text)', fontWeight: 500}}>
                            Reclaim
                        </strong>
                        , Lost and found --- Community items recovery platform
                    </p>
                    <a
                        href="/Abdul_Haseeb_Khokhar_CV.pdf"
                        download
                        className='btn-ghost'
                        style={{ width: 'fit-content' }}
                    >
                        Here's my CV
                    </a>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {stats.map((stat, index) => (
                        <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 'var(--radius-md)', transition: 'border-color 0.2s' }}
                            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(110, 231, 183, 0.25)'}
                            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}>
                            <span
                                style={{
                                    fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 800, color: 'var(--accent)', minWidth: '64px', lineHeight: 1
                                }}>
                                {stat.number}
                            </span>
                            <span style={{
                                fontSize: '0.85rem', color: 'var(--muted)', lineHeight: 1.5, whiteSpace: 'pre-line'
                            }}>
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`@media(max-width: 640px){
            #about > div {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important
            }
            }`
            }</style>
        </section>
    )
}

export default About;