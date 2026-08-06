const Logo = ({ light = true, size = 34 }) => {
    const stroke = light ? '#ffffff' : 'var(--heading)'

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <svg width={size} height={size} viewBox="0 0 34 34" fill="none">
                <line x1="17" y1="2" x2="17" y2="10" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
                <line x1="17" y1="24" x2="17" y2="32" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
                <line x1="2" y1="17" x2="10" y2="17" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
                <line x1="24" y1="17" x2="32" y2="17" stroke={stroke} strokeWidth="1" strokeDasharray="2 2" />
                <rect x="9" y="9" width="16" height="16" stroke={stroke} strokeWidth="1.4" />
                <circle cx="17" cy="17" r="2" fill={stroke} />
            </svg>
            <span style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 600,
                fontSize: '1.05rem',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                color: light ? '#ffffff' : 'var(--heading)',
            }}>
                Abdul Haseeb
            </span>
        </div>
    )
}

export default Logo
