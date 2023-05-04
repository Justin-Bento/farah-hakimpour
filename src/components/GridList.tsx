import React from 'react'

type Props = {}

export default function GridList({children, Columns}: any) {
  return (
    <div className={`grid ${Columns} gap-8`}>{children}</div>
  )
}