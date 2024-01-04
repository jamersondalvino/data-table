import BlogTable from '@/components/blog-table'
import React from 'react'

const ReactTable = () => {
  return (
    <div className="flex flex-col p-10 bg-gray-100 h-screen w-full">
      <h2 className="font-semibold">Blog listing</h2>
      <div className="mt-10">
        <BlogTable />
      </div>
    </div>
  )
}

export default ReactTable
