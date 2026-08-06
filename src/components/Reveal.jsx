import { motion } from 'framer-motion'

/**
 * Fades + slides content up as it enters the viewport (mirrors the
 * scroll-triggered reveal used on abdullah-younas.vercel.app).
 */
const Reveal = ({ children, delay = 0, y = 32, once = true, amount = 0.2, style, className }) => (
    <motion.div
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, amount }}
        transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
        style={style}
        className={className}
    >
        {children}
    </motion.div>
)

export default Reveal
