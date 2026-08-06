import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Preloader = () => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        const timer = setTimeout(() => {
            setLoading(false)
            document.body.style.overflow = ''
        }, 1100)
        return () => {
            clearTimeout(timer)
            document.body.style.overflow = ''
        }
    }, [])

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        zIndex: 999,
                        background: 'var(--bg)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1.1rem',
                    }}
                >
                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        style={{
                            width: '64px',
                            height: '64px',
                            border: '1px solid var(--border)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontFamily: 'var(--font-display)',
                            fontWeight: 700,
                            fontSize: '1.2rem',
                            color: 'var(--heading)',
                        }}
                    >
                        AH
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.4 }}
                        style={{
                            fontSize: '0.72rem',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            color: 'var(--muted)',
                        }}
                    >
                        Loading
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Preloader
