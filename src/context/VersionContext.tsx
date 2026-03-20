'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

type VersionContextType = {
  showOldVersion: boolean
  toggleVersion: () => void
  mounted: boolean
}

// Default context value for SSR
const defaultContextValue: VersionContextType = {
  showOldVersion: false,
  toggleVersion: () => {},
  mounted: false,
}

const VersionContext = createContext<VersionContextType>(defaultContextValue)

export function VersionProvider({ children }: { children: ReactNode }) {
  const [showOldVersion, setShowOldVersion] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check localStorage for saved preference
    const saved = localStorage.getItem('showOldVersion')
    if (saved === 'true') {
      setShowOldVersion(true)
    }
  }, [])

  const toggleVersion = () => {
    setShowOldVersion(prev => {
      const newValue = !prev
      localStorage.setItem('showOldVersion', String(newValue))
      return newValue
    })
  }

  return (
    <VersionContext.Provider value={{ showOldVersion, toggleVersion, mounted }}>
      {children}
    </VersionContext.Provider>
  )
}

export function useVersion() {
  const context = useContext(VersionContext)
  return context
}

// Hook to get spacing class based on version
export function useSpacing(oldSpacing: string, newSpacing: string) {
  const { showOldVersion } = useVersion()
  return showOldVersion ? oldSpacing : newSpacing
}
