const MonogramCard = ({ size = 280 }) => {
    return (
        <div style={{ position: 'relative', width: size, margin: '0 auto' }}>
            {/* ── Tilted card behind ── */}
            <div style={{
                position: 'absolute',
                top: '14px',
                left: '18px',
                width: '100%',
                height: '100%',
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                transform: 'rotate(6deg)',
                zIndex: 0,
            }} />

            {/* ── Main framed card ── */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                background: 'linear-gradient(150deg, #eee9df, #dcd6c8)',
                border: '1px solid var(--border)',
                padding: '18px',
                boxShadow: '0 20px 40px -20px rgba(16,26,51,0.25)',
            }}>
                {/* corner brackets */}
                {[
                    { top: 8, left: 8, borderTop: '2px solid var(--navy)', borderLeft: '2px solid var(--navy)' },
                    { top: 8, right: 8, borderTop: '2px solid var(--navy)', borderRight: '2px solid var(--navy)' },
                    { bottom: 8, left: 8, borderBottom: '2px solid var(--navy)', borderLeft: '2px solid var(--navy)' },
                    { bottom: 8, right: 8, borderBottom: '2px solid var(--navy)', borderRight: '2px solid var(--navy)' },
                ].map((pos, i) => (
                    <span key={i} style={{ position: 'absolute', width: '18px', height: '18px', ...pos }} />
                ))}

                <div style={{
                    aspectRatio: '1 / 1.15',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <span style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 600,
                        fontSize: `${size / 3.4}px`,
                        color: 'var(--navy)',
                        opacity: 0.85,
                        letterSpacing: '2px',
                    }}>
                        AH
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MonogramCard
