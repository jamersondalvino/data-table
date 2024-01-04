'use client'

import React, { useState } from 'react'
import { AlignJustify, Grid2X2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const LayoutSwitch = () => {
  const [activeView, setActiveView] = useState<'list' | 'card'>('list')
  return (
    <div>
      <Button
        variant={activeView === 'list' ? 'default' : 'outline'}
        size="icon"
        className="rounded-r-none"
        onClick={() => setActiveView('list')}
      >
        <AlignJustify className="h-4 w-4" />
      </Button>
      <Button
        variant={activeView === 'card' ? 'default' : 'outline'}
        size="icon"
        className="rounded-l-none"
        onClick={() => setActiveView('card')}
      >
        <Grid2X2 className="h-4 w-4" />
      </Button>
    </div>
  )
}

export default LayoutSwitch
