'use client'

import * as React from 'react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'

const items = [
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'Status',
    value: 'status'
  },
  {
    label: 'Created Date',
    value: 'created_at'
  },
  {
    label: 'Created by',
    value: 'created_by'
  },
  {
    Category: 'Category',
    value: 'category_id'
  }
]

const SortBy = () => {
  const [sortBy, setSortBy] = React.useState('created_at')

  return (
    <DropdownMenu>
      <div className="flex items-center space-x-1">
        <p className="text-sm">Sort by:</p>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center space-x-1 cursor-pointer">
            <p className=" text-primary font-semibold">
              {items.find(item => item.value === sortBy)?.label}
            </p>
            <ChevronDown className="w-4 h-4 ml-2" />
          </div>
        </DropdownMenuTrigger>
      </div>

      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Sort table by</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={sortBy} onValueChange={setSortBy}>
          {items.map(item => (
            <DropdownMenuRadioItem value={item.value} key={item.value}>
              {item.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SortBy

//58:43 https://youtu.be/M7rxUNdCQxc?si=ZJdU3egv-IF9ZY0B
