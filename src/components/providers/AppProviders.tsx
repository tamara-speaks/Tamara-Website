'use client'

import { ReactNode } from 'react'
import { VersionProvider } from '@/context/VersionContext'
import VersionToggle from '@/components/ui/VersionToggle'

export default function AppProviders({ children }: { children: ReactNode }) {
  return (
    <VersionProvider>
      {children}
      <VersionToggle />
    </VersionProvider>
  )
}
