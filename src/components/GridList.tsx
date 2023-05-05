import React from 'react'

type GridListProps = {
  Columns: string;
  children: any,
  className: string
}

const GridList: React.FC<GridListProps> = ({ children, Columns, className }:  GridListProps) => {
  return (
    <div aria-label="grid" className={`grid ${Columns} gap-8 ${className}`} >
      {children}
    </div>
  )
}

export default GridList;
