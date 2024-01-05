'use client'

import React from 'react'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { Form } from '@/components/ui/form'

const formSchema = z.object({
  status: z.string().optional(),
  category: z.string().optional(),
  tags: z.array(z.string()).optional()
})

const FiltersForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: '',
      category: '',
      tags: []
    }
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }
  return (
    <div className="py-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        ></form>
      </Form>
    </div>
  )
}

export default FiltersForm
