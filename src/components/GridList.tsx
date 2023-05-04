import Link from 'next/link'
import React from 'react'

type Props = {}

export default function GridList({ children, Columns }: any) {
  return (
    <div aria-label="grid" className={`grid ${Columns} gap-8 `}>
      {children}
    </div>
  )
}