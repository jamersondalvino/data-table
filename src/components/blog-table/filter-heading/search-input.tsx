import React from 'react'
import { Input } from '@/components/ui/input'

const SearchInput = () => {
  return (
    <div className='w-full'>
      <Input placeholder="Search for a blog" className="bg-gray-50 w-full" />
    </div>
  )
}

export default SearchInput
