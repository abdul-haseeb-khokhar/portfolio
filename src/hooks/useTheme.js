import { useState, useEffect, useCallback } from 'react'

export function useTheme() {
    const [theme, setTheme] = useState(() => {
        if (typeof document !== 'undefined') {
            return document.documentElement.getAttribute('data-theme') || 'light'
        }
        return 'light'
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        try {
            localStorage.setItem('theme', theme)
        } catch {
            // ignore (private browsing / storage disabled)
        }
    }, [theme])

    const toggleTheme = useCallback(() => {
        setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
    }, [])

    return { theme, toggleTheme }
}
